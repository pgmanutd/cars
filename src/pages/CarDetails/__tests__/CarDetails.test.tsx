import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import CarDetails from '../CarDetails';

describe('<CarDetails />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<CarDetails />);

    return {
      renderResult,
    };
  };

  it('should render <CarDetailsLoader /> when <CarDetailsPage /> is loading', () => {
    const { renderResult } = setup();

    expect(renderResult.getByTestId('CarDetailsLoader')).toBeInTheDocument();
  });

  it('should render <CarDetailsPage /> when loaded', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('CarDetailsPage')).toBeInTheDocument(),
    );
  });
});
