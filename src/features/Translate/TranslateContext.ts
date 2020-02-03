import React from 'react';

import replaceAll from 'utils/replaceAll';

const TranslateContext = React.createContext({
  translate: (
    translateKey: string,
    mappedObject: { [key: string]: string } = {},
  ) => replaceAll(translateKey, mappedObject),
});

export default TranslateContext;
