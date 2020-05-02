import React from 'react';
import { waitFor } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import Favorites from '../Favorites';

describe('<Favorites />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<Favorites />);

    return {
      renderResult,
    };
  };

  it('should render <FavoritesLoader /> when <FavoritesPage /> is loading', () => {
    const { renderResult } = setup();

    expect(renderResult.getByTestId('FavoritesLoader')).toBeInTheDocument();
  });

  it('should render <FavoritesPage /> when loaded', async () => {
    const { renderResult } = setup();

    await waitFor(() =>
      expect(renderResult.getByTestId('FavoritesPage')).toBeInTheDocument(),
    );
  });
});
