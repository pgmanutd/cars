import React, { useMemo } from 'react';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import replaceAll from 'utils/replaceAll';

import useLocalStorage from 'hooks/useLocalStorage';

import TranslateContext, { DefaultContext } from './TranslateContext';

import { DEFAULT_LANGUAGE, LANGUAGES_MAP } from './translateConstants';

export interface TranslateProviderProps {
  children: React.ReactNode;
  initialLanguage?: DefaultContext['language'];
}

const TranslateProvider: React.FC<TranslateProviderProps> = ({
  children,
  // NOTE: `defaultProps` rule to be deprecated on function components
  // https://github.com/yannickcr/eslint-plugin-react/issues/2396
  initialLanguage = DEFAULT_LANGUAGE,
}) => {
  const [language, setLanguage] = useLocalStorage<DefaultContext['language']>(
    LOCAL_STORAGE_KEYS.language,
    initialLanguage,
  );

  // NOTE: Using useMemo to avoid unnecessary rerenders of consumers.
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const providerValue = useMemo(() => {
    const translations = LANGUAGES_MAP[language] as {
      [key: string]: string;
    };

    const translate: DefaultContext['translate'] = (
      translateKey,
      mappedObject = {},
    ) => replaceAll(translations?.[translateKey] ?? translateKey, mappedObject);

    return {
      translate,
      language,
      languages: Object.keys(LANGUAGES_MAP) as DefaultContext['languages'],
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
