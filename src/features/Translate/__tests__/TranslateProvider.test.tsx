import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TranslateContext from '../TranslateContext';
import TranslateProvider from '../TranslateProvider';

jest.mock('../translations/en.json', () => ({
  mockKey: 'mockValue',
}));

describe('<TranslateProvider />', () => {
  const setup = () => {
    const translateKey = 'mockKey';
    const translatedValue = 'mockValue';
    const updateLanguage = 'de';

    const consumer = (
      <TranslateContext.Consumer>
        {({ translate, language, languages, setLanguage }) => (
          <>
            <span>{translate('mockKey')}</span>
            <span>Current language: {language}</span>
            {languages.map(languageKey => (
              <span key={languageKey}>Languages: {languageKey}</span>
            ))}
            <button onClick={() => setLanguage(updateLanguage)}>
              Update Language
            </button>
          </>
        )}
      </TranslateContext.Consumer>
    );

    return {
      translateKey,
      translatedValue,
      updateLanguage,
      consumer,
    };
  };

  describe('when provider is present', () => {
    const setupWithProvider = () => {
      const { consumer, ...rest } = setup();

      const renderResultWithProvider = render(
        <TranslateProvider>{consumer}</TranslateProvider>,
      );

      return {
        renderResultWithProvider,
        ...rest,
      };
    };

    it('should translate and gets the translated value', () => {
      const { renderResultWithProvider, translatedValue } = setupWithProvider();

      expect(
        renderResultWithProvider.getByText(translatedValue),
      ).toBeInTheDocument();
    });

    it('should render current language', () => {
      const { renderResultWithProvider } = setupWithProvider();

      expect(
        renderResultWithProvider.getByText('Current language: en'),
      ).toBeInTheDocument();
    });

    it('should render all languages', () => {
      const { renderResultWithProvider } = setupWithProvider();

      expect([
        renderResultWithProvider.getByText('Languages: en'),
        renderResultWithProvider.getByText('Languages: de'),
      ]).toHaveLength(2);
    });

    it('should update current language when changed', () => {
      const { renderResultWithProvider, updateLanguage } = setupWithProvider();

      userEvent.click(renderResultWithProvider.getByText('Update Language'));

      expect(
        renderResultWithProvider.getByText(
          `Current language: ${updateLanguage}`,
        ),
      ).toBeInTheDocument();
    });
  });

  describe('when provider is not present', () => {
    const setupWithoutProvider = () => {
      const { consumer, ...rest } = setup();

      const renderResultWithoutProvider = render(consumer);

      return {
        renderResultWithoutProvider,
        ...rest,
      };
    };

    it('should return passed translate key', () => {
      const {
        renderResultWithoutProvider,
        translateKey,
      } = setupWithoutProvider();

      expect(
        renderResultWithoutProvider.getByText(translateKey),
      ).toBeInTheDocument();
    });

    it('should render default current language', () => {
      const { renderResultWithoutProvider } = setupWithoutProvider();

      expect(
        renderResultWithoutProvider.getByText('Current language: en'),
      ).toBeInTheDocument();
    });

    it('should render all default languages', () => {
      const { renderResultWithoutProvider } = setupWithoutProvider();

      expect([
        renderResultWithoutProvider.getByText('Languages: en'),
        renderResultWithoutProvider.getByText('Languages: de'),
      ]).toHaveLength(2);
    });

    it('should not update current language when changed', () => {
      const { renderResultWithoutProvider } = setupWithoutProvider();

      userEvent.click(renderResultWithoutProvider.getByText('Update Language'));

      expect(
        renderResultWithoutProvider.getByText('Current language: en'),
      ).toBeInTheDocument();
    });
  });
});
