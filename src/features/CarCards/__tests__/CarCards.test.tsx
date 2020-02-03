import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import CarCards from '../CarCards';

describe('<CarCards />', () => {
  const setup = ({ isLoading = false } = {}) => {
    const cars = [
      {
        stockNumber: 1234,
        manufacturerName: 'Audi',
        modelName: 'Abcd',
        mileage: {
          number: 1234,
          unit: 'km',
        },
        fuelType: 'petrol',
        color: 'white',
        pictureUrl: 'image.svg',
      },
    ];
    const { renderResult } = renderWithProviders(
      <CarCards cars={cars} isLoading={isLoading} />,
    );

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should render <CarCardsLoader /> when #isLoading prop is true', () => {
    const { renderResult } = setup({ isLoading: true });

    expect(renderResult.getByTestId('CarCardsLoader')).toBeInTheDocument();
  });
});
