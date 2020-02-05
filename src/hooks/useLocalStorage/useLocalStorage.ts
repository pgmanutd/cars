import { useState, useEffect, useCallback } from 'react';

import parseJSON from 'utils/parseJSON';

const eventListenerName = 'storage';
const customEventListenerName = 'onLocalStorageChange';

const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const addItemToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = <T>(key: string, fallbackValue: T) => {
  return parseJSON<T>(localStorage.getItem(key), fallbackValue);
};

const useLocalStorage = <T = {}>(
  key: string,
  initialValue: T | null = null,
) => {
  const [storedItem, setStoredItem] = useState(() =>
    getItemFromLocalStorage(key, initialValue),
  );

  useEffect(() => {
    const storageListener = ({ key: storageKey, newValue }: StorageEvent) => {
      if (storageKey === key) {
        setStoredItem(parseJSON(newValue, initialValue));
      }
    };

    window.addEventListener(eventListenerName, storageListener);

    return () => {
      window.removeEventListener(eventListenerName, storageListener);
    };
  }, [initialValue, key]);

  useEffect(() => {
    const storageListener = ({ detail }: CustomEventInit) => {
      if (detail.key === key) {
        setStoredItem(detail.item);
      }
    };

    window.addEventListener(customEventListenerName, storageListener);

    return () => {
      window.removeEventListener(customEventListenerName, storageListener);
    };
  }, [initialValue, key]);

  // NOTE: Using useCallback to avoid unnecessary rerenders of components
  // which uses setItem
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const setItem = useCallback(
    (item: T) => {
      addItemToLocalStorage(key, item);

      window.dispatchEvent(
        new CustomEvent(customEventListenerName, { detail: { key, item } }),
      );
    },
    [key],
  );

  // NOTE: Using useCallback to avoid unnecessary rerenders of components
  // which uses removeItem
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const removeItem = useCallback(() => {
    removeItemFromLocalStorage(key);

    window.dispatchEvent(
      new CustomEvent(customEventListenerName, {
        detail: { key, item: initialValue },
      }),
    );
  }, [key, initialValue]);

  return [storedItem, setItem, removeItem] as [
    T,
    (item: T) => void,
    () => void,
  ];
};

export default useLocalStorage;
