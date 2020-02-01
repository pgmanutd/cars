import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import FavoritesLoader from '../FavoritesLoader';

describe('<FavoritesLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<FavoritesLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
