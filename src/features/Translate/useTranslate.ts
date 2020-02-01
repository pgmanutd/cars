import { useContext } from 'react';

import TranslateContext from './TranslateContext';

const useTranslate = () => useContext(TranslateContext);

export default useTranslate;
