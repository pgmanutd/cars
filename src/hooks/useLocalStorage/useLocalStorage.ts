import { useState, useEffect } from 'react';

import parseJSON from 'utils/parseJSON';

export interface LocalStorageChangeValue<T> {
  key: string;
  item: T | null;
}

const eventListenerName = 'onLocalStorageChange';

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
  const [storedItem, setStoredItem] = useState(() => {
    return getItemFromLocalStorage(key, initialValue);
  });

  useEffect(() => {
    const storageListener = ({
      detail,
    }: CustomEventInit<LocalStorageChangeValue<T>>) => {
      if (detail?.key === key) {
        setStoredItem(detail.item);
      }
    };

    window.addEventListener(eventListenerName, storageListener);

    return () => {
      window.removeEventListener(eventListenerName, storageListener);
    };
  }, [initialValue, key]);

  const setItem = (item: T) => {
    setStoredItem(item);

    addItemToLocalStorage(key, item);

    window.dispatchEvent(
      new CustomEvent<LocalStorageChangeValue<T>>(eventListenerName, {
        detail: { key, item },
      }),
    );
  };

  const removeItem = () => {
    setStoredItem(initialValue);

    removeItemFromLocalStorage(key);

    window.dispatchEvent(
      new CustomEvent<LocalStorageChangeValue<T>>(eventListenerName, {
        detail: { key, item: initialValue },
      }),
    );
  };

  return [storedItem, setItem, removeItem];
};

export default useLocalStorage;
