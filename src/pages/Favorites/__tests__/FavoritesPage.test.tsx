import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import FavoritesPage from '../FavoritesPage';

describe('<FavoritesPage />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<FavoritesPage />);

    return {
      renderResult,
    };
  };

  it('should render document title "Favorites"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('Favorites'));
  });
});
