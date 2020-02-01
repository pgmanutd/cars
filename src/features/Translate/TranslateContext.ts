import React from 'react';

const TranslateContext = React.createContext({
  translate: (translateKey: string) => translateKey,
});

export default TranslateContext;
