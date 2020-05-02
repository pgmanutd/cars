import React from 'react';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import { renderWithProviders } from 'utils/testUtils';

import FavoritesPage from '../FavoritesPage';

describe('<FavoritesPage />', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const setup = () => {
    const { renderResult } = renderWithProviders(<FavoritesPage />);

    return {
      renderResult,
    };
  };

  it('should render document title "Favorites"', async () => {
    setup();

    await waitFor(() => expect(document.title).toEqual('Favorites'));
  });

  it('should show "No favorite cars present." when no favorite cars are present in local storage', () => {
    const { renderResult } = setup();

    expect(
      renderResult.getByText('No favorite cars present.'),
    ).toBeInTheDocument();
  });

  it('should render <CarCards />', () => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.favoriteCars,
      '{"17596":{"stockNumber":17596,"manufacturerName":"Fiat","modelName":"127","color":"white","mileage":{"number":115674,"unit":"km"},"fuelType":"Diesel","pictureUrl":"car.svg"},"28589":{"stockNumber":28589,"manufacturerName":"Fiat","modelName":"850 T/900 T/-E","color":"white","mileage":{"number":115035,"unit":"km"},"fuelType":"Diesel","pictureUrl":"car.svg"}}',
    );

    const { renderResult } = setup();

    expect(renderResult.getAllByTestId('CarCard')).toHaveLength(2);
  });

  it('should remove that particular <CarCards /> when its "Remove" button is clicked', () => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.favoriteCars,
      '{"17596":{"stockNumber":17596,"manufacturerName":"Fiat","modelName":"127","color":"white","mileage":{"number":115674,"unit":"km"},"fuelType":"Diesel","pictureUrl":"car.svg"},"28589":{"stockNumber":28589,"manufacturerName":"Fiat","modelName":"850 T/900 T/-E","color":"white","mileage":{"number":115035,"unit":"km"},"fuelType":"Diesel","pictureUrl":"car.svg"}}',
    );

    const { renderResult } = setup();

    userEvent.click(renderResult.getAllByText('Remove')[0]);

    expect(renderResult.getAllByTestId('CarCard')).toHaveLength(1);
  });
});
