import { useState, useEffect } from 'react';

import parseJSON from 'utils/parseJSON';

const eventListenerName = 'storage';

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

  const setItem = (item: T) => {
    setStoredItem(item);

    addItemToLocalStorage(key, item);
  };

  const removeItem = () => {
    setStoredItem(initialValue);

    removeItemFromLocalStorage(key);
  };

  return [storedItem, setItem, removeItem] as [
    T,
    (item: T) => void,
    () => void,
  ];
};

export default useLocalStorage;
