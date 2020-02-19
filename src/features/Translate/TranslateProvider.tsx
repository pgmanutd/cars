import React, { useMemo } from 'react';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import replaceAll, { ReplaceAllMappedObject } from 'utils/replaceAll';

import useLocalStorage from 'hooks/useLocalStorage';

import TranslateContext from './TranslateContext';

import { Language } from './types';
import { DEFAULT_LANGUAGE, LANGUAGES_MAP } from './translateConstants';

export interface TranslateProviderProps {
  children: React.ReactNode;
  initialLanguage?: Language;
}

const TranslateProvider: React.FC<TranslateProviderProps> = ({
  children,
  // NOTE: `defaultProps` rule to be deprecated on function components
  // https://github.com/yannickcr/eslint-plugin-react/issues/2396
  initialLanguage = DEFAULT_LANGUAGE,
}) => {
  const [language, setLanguage] = useLocalStorage<Language>(
    LOCAL_STORAGE_KEYS.language,
    initialLanguage,
  );

  // NOTE: Using useMemo to avoid unnecessary rerenders of consumers.
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const providerValue = useMemo(() => {
    const translations = LANGUAGES_MAP[language] as {
      [key: string]: string;
    };

    const translate = (
      translateKey: string,
      mappedObject: ReplaceAllMappedObject = {},
    ) => replaceAll(translations?.[translateKey] ?? translateKey, mappedObject);

    return {
      translate,
      language,
      languages: Object.keys(LANGUAGES_MAP) as Language[],
      setLanguage,
    };
  }, [language, setLanguage]);

  return (
    <TranslateContext.Provider value={providerValue}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
