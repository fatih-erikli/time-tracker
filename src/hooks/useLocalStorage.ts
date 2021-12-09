import { useState } from 'react';
import { identity } from '../utils';

export const useLocalStorageState = (key: string, defaultValue: any, castInto: Function=identity) => {
  const [state, setState] = useState(
    castInto(localStorage.getItem(key) || defaultValue)
  );
  return [
    state,
    (value: string) => {
      localStorage.setItem(key, value);
      setState(value);
    },
  ];
}
