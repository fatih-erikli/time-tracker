import { v4 as uuidv4, validate } from "uuid";

export const promisifyOnSuccess = async (request: IDBRequest) => {
  return new Promise<any>((resolve) => {
    request.addEventListener('error', () => {
      console.error('error', request.error);
    });
    request.addEventListener('success', (event: Event) => {
      const target = event.target as IDBRequest;
      resolve(target.result);
    });
  });
}

export const identity = (value: any) => value;

export const generateUniqueID = () => {
  return uuidv4();
}

export const isValidUUIDKey = (key: string) => validate(key);
