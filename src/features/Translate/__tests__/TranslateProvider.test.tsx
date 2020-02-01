import React from 'react';
import { render } from '@testing-library/react';

import TranslateContext from '../TranslateContext';
import TranslateProvider from '../TranslateProvider';

jest.mock('../translations/en.json', () => ({
  mockKey: 'mockValue',
}));

describe('<TranslateProvider />', () => {
  const setup = () => {
    const translateKey = 'mockKey';
    const translatedValue = 'mockValue';

    const consumer = (
      <TranslateContext.Consumer>
        {({ translate }) => <span>{translate('mockKey')}</span>}
      </TranslateContext.Consumer>
    );

    const renderResultWithProvider = render(
      <TranslateProvider>{consumer}</TranslateProvider>,
    );
    const renderResultWithoutProvider = render(consumer);

    return {
      translateKey,
      translatedValue,
      renderResultWithProvider,
      renderResultWithoutProvider,
    };
  };

  it('should translate and gets the translated value when provider is present', () => {
    const { renderResultWithProvider, translatedValue } = setup();

    expect(
      renderResultWithProvider.getByText(translatedValue),
    ).toBeInTheDocument();
  });

  it('should return passed translate key when provider is not present', () => {
    const { renderResultWithoutProvider, translateKey } = setup();

    expect(
      renderResultWithoutProvider.getByText(translateKey),
    ).toBeInTheDocument();
  });
});
