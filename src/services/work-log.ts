import sha1 from 'crypto-js/sha1';
import { addUpgradeHandler, getDatabaseConnection } from '.';

import { WORK_LOG } from '../constants';
import { WorkLogEntries, WorkLogEntry } from '../types';
import { generateUniqueID, promisifyOnSuccess } from '../utils';

export const hashWorkLogEntries = (worklogEntries: WorkLogEntries) => {
  return sha1(JSON.stringify(worklogEntries)).toString();
};

addUpgradeHandler(async (result: any) => {
  const documentObjectStore = result.createObjectStore(WORK_LOG, { autoIncrement: false });
  documentObjectStore.createIndex("dateCreation", "dateCreation", { unique: false });
});

export const getWorkLogLinkKeysDatabaseInstance = async (linkKey: string) => {
  return new Promise(async (resolve) => {
    const request = await getDatabaseConnection();
    resolve(request);
  });
}

export const removeIndexDbStore = async () => {
  const db: IDBDatabase = await getDatabaseConnection();
  const transaction: IDBTransaction = db.transaction(WORK_LOG, "readwrite");
  const objectStore: IDBObjectStore = transaction.objectStore(WORK_LOG);
  objectStore.clear();
  return Promise.resolve();
}

export async function fetchWorkLogEntries(linkKey?: string) {
  const promise = new Promise(async (resolve) => {
    let keys, objectStore: IDBObjectStore;
    const db = await getDatabaseConnection();
    const transaction = db.transaction(WORK_LOG, "readonly");
    objectStore = transaction.objectStore(WORK_LOG);
    const dateIndex = objectStore.index("dateCreation");
    keys = await promisifyOnSuccess(dateIndex.getAllKeys());
    
    const promises = keys.map((key: string) =>
      promisifyOnSuccess(objectStore.get(key))
    );
    const results = await Promise.all(promises);
    const resultsWithKeys: Array<WorkLogEntry> = keys
      .map((key: string, index: number) => ({ key, ...results[index],}))
      .filter((workLogEntry: WorkLogEntry) => (workLogEntry.linkKey === linkKey || !workLogEntry.linkKey));
    resolve(resultsWithKeys);
  });

  return promise as Promise<WorkLogEntries>;
}

export async function createWorkLogEntry(payload:WorkLogEntry, uniqueId: string='') {
  const promise: Promise<void> = new Promise(async (resolve) => {
    const db = await getDatabaseConnection();
    const transaction = db.transaction(WORK_LOG, "readwrite");
    const objectStore = transaction.objectStore(WORK_LOG);
    const key = uniqueId || generateUniqueID();
    const request: IDBRequest = objectStore.put({
      ...payload,
      dateCreation: payload.dateCreation || new Date().toJSON(),
      key
    },key);
    request.addEventListener('success', () => resolve())
  });
  return promise;
}

export async function updateWorkLogEntry(payload: WorkLogEntry, key: string) {
  const promise = new Promise(async (resolve) => {
    const db = await getDatabaseConnection();
    const transaction = db.transaction(WORK_LOG, "readwrite");
    const objectStore = transaction.objectStore(WORK_LOG);
    objectStore.put(payload, key).onsuccess = resolve;
  });
  return promise;
}
