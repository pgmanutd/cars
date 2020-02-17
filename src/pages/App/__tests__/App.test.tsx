import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import App from '../App';

describe('<App />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<App />);

    return {
      renderResult,
    };
  };

  it('should render <Header />', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('Header')).toBeInTheDocument(),
    );
  });

  it('should render <MainLayout />', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('MainLayout')).toBeInTheDocument(),
    );
  });

  it('should render <Footer />', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('Footer')).toBeInTheDocument(),
    );
  });
});
