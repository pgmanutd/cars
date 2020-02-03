import React from 'react';

import replaceAllUtils from 'utils/replaceAllUtils';

const TranslateContext = React.createContext({
  translate: (
    translateKey: string,
    mappedObject: { [key: string]: string } = {},
  ) => replaceAllUtils(translateKey, mappedObject),
});

export default TranslateContext;
