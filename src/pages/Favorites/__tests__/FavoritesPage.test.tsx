import React from 'react';
import { waitForDomChange } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import FavoritesPage from '../FavoritesPage';

describe('<FavoritesPage />', () => {
  const setup = () => {
    const renderResult = renderWithProviders(<FavoritesPage />);

    return {
      renderResult,
    };
  };

  it('should render document title "Favorites"', async () => {
    setup();

    await waitForDomChange();

    expect(document.title).toEqual('Favorites');
  });
});
