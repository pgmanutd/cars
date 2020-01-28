import React from 'react';
import { waitForDomChange } from '@testing-library/react';

import { renderWithRouter } from 'utils/testUtils';

import CarDetails from '../CarDetails';

describe('<CarDetails />', () => {
  const setup = () => {
    const renderResult = renderWithRouter(<CarDetails />);

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

    await waitForDomChange();

    expect(renderResult.getByTestId('CarDetailsPage')).toBeInTheDocument();
  });
});
