import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import TranslateProvider from '../TranslateProvider';
import useTranslate from '../useTranslate';

jest.mock('../translations/en.json', () => ({
  mockKey: 'mockValue',
}));

describe('#useTranslate', () => {
  const setup = () => {
    const translateKey = 'mockKey';
    const translatedValue = 'mockValue';
    const Wrapper: React.FC = ({ children }) => (
      <TranslateProvider>{children}</TranslateProvider>
    );

    const { result } = renderHook(() => useTranslate(), { wrapper: Wrapper });

    return {
      result,
      translateKey,
      translatedValue,
    };
  };

  it('should use translate and gets the translated value', () => {
    const { result, translateKey, translatedValue } = setup();

    expect(result.current.translate(translateKey)).toBe(translatedValue);
  });
});
