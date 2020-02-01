import React, { memo, useCallback, useMemo } from 'react';
import _pathOr from 'lodash/fp/pathOr';

import TranslateContext from './TranslateContext';

import enLanguage from './translations/en.json';

const languages = {
  en: enLanguage,
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
  const translations = languages[language];

  const translate = useCallback<(translateKey: string) => string>(
    translateKey => _pathOr(translateKey, translateKey, translations),
    [translations],
  );
  const providerValue = useMemo(() => ({ translate }), [translate]);

  return (
    <TranslateContext.Provider value={providerValue}>
      {children}
    </TranslateContext.Provider>
  );
};

export default memo(TranslateProvider);
