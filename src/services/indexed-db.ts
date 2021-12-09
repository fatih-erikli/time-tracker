import { WORK_LOG, DB_NAME, DB_VERSION } from '../constants';
import { WorkLogEntries, WorkLogEntry } from '../types';
import { generateUniqueID } from '../utils';

export const promisifyOnSuccess = async (request: IDBRequest) => {
  return new Promise<any>((resolve) => {
    request.addEventListener('success', (event: Event) => {
      const target = event.target as IDBRequest;
      resolve(target.result);
    });
  });
}

export const getIndexedDbInstance = async () => {
  return new Promise<IDBDatabase>(async (resolve) => {
    const request: IDBRequest = indexedDB.open(DB_NAME, DB_VERSION);

    request.addEventListener('upgradeneeded', () => {
      const documentObjectsStore = request.result.createObjectStore(WORK_LOG, { autoIncrement: false });
      documentObjectsStore.createIndex("dateCreation", "dateCreation", { unique: false });
    })
    
    request.addEventListener('success', () => {
      resolve(request.result);
    });
  });
}

export const removeIndexDbStore = async () => {
  const db: IDBDatabase = await getIndexedDbInstance();
  const transaction: IDBTransaction = db.transaction(WORK_LOG, "readwrite");
  const objectStore: IDBObjectStore = transaction.objectStore(WORK_LOG);
  objectStore.clear();
  return Promise.resolve();
}

export async function fetchWorkLogEntries() {
  const promise = new Promise(async (resolve) => {
    const db = await getIndexedDbInstance();
    const transaction = db.transaction(WORK_LOG, "readonly");
    const objectStore = transaction.objectStore(WORK_LOG);
    const dateIndex = objectStore.index("dateCreation");
    const keys: Array<string> = await promisifyOnSuccess(dateIndex.getAllKeys());
    const promises = keys.map((key) =>
      promisifyOnSuccess(objectStore.get(key))
    );
    const results = await Promise.all(promises);
    const resultsWithKeys: Array<WorkLogEntry> = keys.map((key, index) => ({
      key,
      ...results[index],
    }));
    resolve(resultsWithKeys);
  });

  return promise as Promise<WorkLogEntries>;
}

export async function createWorkLogEntry(payload:WorkLogEntry, uniqueId: string='') {
  const promise: Promise<void> = new Promise(async (resolve) => {
    const db = await getIndexedDbInstance();
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
    const db = await getIndexedDbInstance();
    const transaction = db.transaction(WORK_LOG, "readwrite");
    const objectStore = transaction.objectStore(WORK_LOG);
    objectStore.put(payload, key).onsuccess = resolve;
  });
  return promise;
}
