import { v4 as uuidv4 } from "uuid";


export const identity = (value: any) => value;

export const generateUniqueID = () => {
  return uuidv4();
}
