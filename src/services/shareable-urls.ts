import { addUpgradeHandler, getDatabaseConnection } from ".";
import { SHAREABLE_URLS } from "../constants";
import { WorkLogEntries, ShareableURL } from "../types";
import { promisifyOnSuccess } from "../utils";

const SHAREABLE_URL_ENDPOINT = `https://shareble-url-service.fatih-erikli.workers.dev/`;

addUpgradeHandler(async (result: any) => {
  const shareableUrlsObjectStore = result.createObjectStore(SHAREABLE_URLS, { autoIncrement: false });
  shareableUrlsObjectStore.createIndex("dateCreation", "dateCreation", { unique: false });
});

export const fetchShareableURL = async (urlKey: string) => {
  let response;
  response = await fetch(`${SHAREABLE_URL_ENDPOINT}${urlKey}`, { method: "GET" });
  response = await response.json();
  response = response as any;
  return response as ShareableURL;
};

export const updateRemoteShareableURL = async (
  urlKey: string,
  worklog: WorkLogEntries,
  contentHash: string,
) => {
  let response;
  response = await fetch(`${SHAREABLE_URL_ENDPOINT}${urlKey}`, {
    method: "PUT", 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contentHash,
      worklog,
      key: urlKey,
    }),
  });
  response = await response.json();
  response = response as any;
  return response as ShareableURL;
};

export const fetchShareableURLsMetaData = async (urlKeys: Array<string>) => {
  let response;
  response = await fetch(`${SHAREABLE_URL_ENDPOINT}metadata`, { method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      urlKeys,
    })
  });
  response = await response.json();
  response = (response as any).urlKeys;
  return response as Array<{
    key: string;
    contentHash: string;
    dateCreation: string;
    dateModification: string;
    viewCount: number;
  }>;
}

export const requestShareableURL = async (
  worklog: WorkLogEntries,
  contentHash: string,
  urlKey: string,
) => {
  let response;
  let retrieveKey = urlKey;
  try {
    response = await fetch(SHAREABLE_URL_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contentHash,
        worklog,
        key: urlKey,
      }),
    });
  } catch (e) {
    throw new Error('Failed.');
  }
  if (response.status === 400) {
    response = await response.json();
    if (response['existing-document']) {
      retrieveKey = response['existing-document'];
    }
  }
  response = await fetchShareableURLsMetaData([retrieveKey]);
  response = response[0];
  return ({
    worklog: [],
    key: response.key,
    contentHash: response.contentHash,
    isCreated: retrieveKey === urlKey,
    dateCreation: response.dateCreation,
    dateModification: response.dateModification,
    viewCount: response.viewCount,
  }) as ShareableURL;
};

export async function getLocalShareableURL(key: string): Promise<ShareableURL> {
  const db = await getDatabaseConnection();
  const transaction = db.transaction(SHAREABLE_URLS, "readonly");
  const objectStore = transaction.objectStore(SHAREABLE_URLS);
  return await promisifyOnSuccess(objectStore.get(key));
}

export async function updateLocalShareableURL(
  key: string,
  contentHash: string,
  dateModification: string,
  viewCount: number,
): Promise<ShareableURL> {
  const db = await getDatabaseConnection();
  const transaction = db.transaction(SHAREABLE_URLS, "readwrite");
  const objectStore = transaction.objectStore(SHAREABLE_URLS);
  const document = await promisifyOnSuccess(objectStore.get(key));
  return promisifyOnSuccess(objectStore.put({
    ...document,
    contentHash,
    dateModification,
    viewCount
  }, key));
}

export async function deleteLocalShareableURL(key: string): Promise<ShareableURL> {
  const db = await getDatabaseConnection();
  const transaction = db.transaction(SHAREABLE_URLS, "readwrite");
  const objectStore = transaction.objectStore(SHAREABLE_URLS);
  return await promisifyOnSuccess(objectStore.delete(key));
}

export async function createLocalShareableURL(
  worklog: WorkLogEntries,
  key: string,
  contentHash: string,
  dateCreation: string,
  dateModification: string|undefined,
  viewCount: number,
) {
  const promise: Promise<ShareableURL> = new Promise(async (resolve) => {
    const db = await getDatabaseConnection();
    const transaction = db.transaction(SHAREABLE_URLS, "readwrite");
    const objectStore = transaction.objectStore(SHAREABLE_URLS);
    const request: IDBRequest = objectStore.put({
      key,
      worklog,
      dateModification,
      dateCreation,
      contentHash,
      viewCount,
    },key);
    request.addEventListener('success', async () => {
      const document = await getLocalShareableURL(key);
      resolve(document as ShareableURL);
    });
  });
  return promise;
}

export const getShareableUrlDatabaseInstance = async () => {
  return new Promise<IDBDatabase>(async (resolve) => {
    const request = await getDatabaseConnection();
    return request;
  });
}

export async function fetchLocalShareableUrls() {
  const promise = new Promise(async (resolve) => {
    const db: IDBDatabase = await getDatabaseConnection();
    const transaction = db.transaction(SHAREABLE_URLS, "readonly");
    const objectStore = transaction.objectStore(SHAREABLE_URLS);
    const dateIndex = objectStore.index("dateCreation");
    const keys: Array<string> = await promisifyOnSuccess(dateIndex.getAllKeys());
    const promises = keys.map((key) =>
      promisifyOnSuccess(objectStore.get(key))
    );
    const results = await Promise.all(promises);
    let resultsWithKeys: Array<ShareableURL> = keys.map((key, index) => ({
      key,
      ...results[index],
    }));
    const metadata = await fetchShareableURLsMetaData(keys);
    resultsWithKeys = resultsWithKeys.map(shareableUrl => {
      const shareableUrlWithMetaData = metadata.find(({key}) => key === shareableUrl.key);
      if (shareableUrlWithMetaData) {
        return {
          ...shareableUrl,
          viewCount: shareableUrlWithMetaData.viewCount,
          dateModification: shareableUrlWithMetaData.dateModification,
          contentHash: shareableUrlWithMetaData.contentHash,
        };
      } else {
        return shareableUrl;
      }
    });
    resolve(resultsWithKeys);
  });

  return promise as Promise<Array<ShareableURL>>;
}
