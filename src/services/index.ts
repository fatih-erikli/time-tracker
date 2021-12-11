import { DB_NAME, DB_VERSION } from "../constants";

let request: IDBRequest;

const upgradeHandlers: Array<Function> = [];

export const addUpgradeHandler = (handler: Function) => {
  console.log('add upgrade handler');
  upgradeHandlers.push(handler);
}

let _localInstance: IDBDatabase | null;
let awaiting: Promise<IDBDatabase>;

export const getDatabaseConnection = async(): Promise<IDBDatabase> => {
  if (_localInstance) {
    return Promise.resolve(_localInstance);
  }

  if (awaiting) {
    return awaiting;
  }

  awaiting = 
    new Promise(resolve => {
      request = indexedDB.open(DB_NAME, DB_VERSION);
      request.addEventListener('upgradeneeded', () => {
        console.log('upgradeneeded');
        upgradeHandlers.forEach((_function: any) => _function(request.result));
      });
      request.addEventListener('onupgradeneeded', () => {console.log('onupgradeneeded on request');});
      request.addEventListener('success', () => {
        resolve(request.result as IDBDatabase);
        _localInstance = request.result;
      });
    });

  return awaiting;
}
