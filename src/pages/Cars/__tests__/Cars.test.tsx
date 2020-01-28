import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import Cars from '../Cars';

describe('<Cars />', () => {
  const setup = () => {
    const renderResult = renderWithProviders(<Cars />);

    return {
      renderResult,
    };
  };

  it('should render <CarsLoader /> when <CarsPage /> is loading', () => {
    const { renderResult } = setup();

    expect(renderResult.getByTestId('CarsLoader')).toBeInTheDocument();
  });

  it('should render <CarsPage /> when loaded', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('CarsPage')).toBeInTheDocument(),
    );
  });
});
