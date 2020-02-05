import React, { memo, useCallback, useMemo } from 'react';

import replaceAll from 'utils/replaceAll';

import TranslateContext from './TranslateContext';

import enLanguage from './translations/en.json';
import deLanguage from './translations/de.json';

const languages = {
  en: enLanguage,
  de: deLanguage,
};

export interface TranslateProviderProps {
  children: React.ReactNode;
  language?: keyof typeof languages;
}

const TranslateProvider: React.FC<TranslateProviderProps> = ({
  // NOTE: `defaultProps` rule to be deprecated on function components
  // https://github.com/yannickcr/eslint-plugin-react/issues/2396
  language = 'en',
  children,
}) => {
  const translations = languages[language] as {
    [key: string]: string;
  };

  const translate = useCallback<
    (translateKey: string, mappedObject?: { [key: string]: string }) => string
  >(
    (translateKey, mappedObject = {}) =>
      replaceAll(translations?.[translateKey] ?? translateKey, mappedObject),
    [translations],
  );

  // NOTE: Using useMemo to avoid unnecessary rerenders of consumers.
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const providerValue = useMemo(() => ({ translate }), [translate]);

  return (
    <TranslateContext.Provider value={providerValue}>
      {children}
    </TranslateContext.Provider>
  );
};

// NOTE: Using memo to avoid unnecessary rerenders of this component.
// Only used "memo" for components which actually accepts any props and used
// it for rendering
// https://kentcdodds.com/blog/usememo-and-usecallback
export default memo(TranslateProvider);
