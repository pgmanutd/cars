import React from 'react';
import _noop from 'lodash/fp/noop';

import replaceAll, { ReplaceAllMappedObject } from 'utils/replaceAll';

import { Language } from './types';
import { DEFAULT_LANGUAGE, LANGUAGES_MAP } from './translateConstants';

const TranslateContext = React.createContext({
  translate: (
    translateKey: string,
    mappedObject: ReplaceAllMappedObject = {},
  ) => replaceAll(translateKey, mappedObject),
  language: DEFAULT_LANGUAGE as Language,
  languages: Object.keys(LANGUAGES_MAP) as Language[],
  setLanguage: (language: Language) => {
    _noop(language);
  },
});

export default TranslateContext;
