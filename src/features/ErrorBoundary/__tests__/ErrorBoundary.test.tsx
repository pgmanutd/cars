import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import ErrorBoundary from '../ErrorBoundary';

describe('<ErrorBoundary />', () => {
  beforeEach(() => {
    spyOn(console, 'error');
  });

  const setup = ({ shouldRenderChildComponentWithError = true } = {}) => {
    const ErrorThrower = () => {
      throw new Error('I crashed!');
    };

    const { renderResult } = renderWithTranslate(
      <ErrorBoundary>
        {shouldRenderChildComponentWithError && <ErrorThrower />}
        <div>Some child component</div>
      </ErrorBoundary>,
    );

    return {
      renderResult,
      ErrorThrower,
    };
  };

  describe('render the component and matches it against stored snapshot', () => {
    it('when some error is thrown from any child component', () => {
      const { renderResult } = setup();

      expect(renderResult.asFragment()).toMatchSnapshot();
    });

    it('when no error is thrown from any child component', () => {
      const { renderResult } = setup({
        shouldRenderChildComponentWithError: false,
      });

      expect(renderResult.asFragment()).toMatchSnapshot();
    });
  });
});
