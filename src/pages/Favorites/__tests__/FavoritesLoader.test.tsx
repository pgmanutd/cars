import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import FavoritesLoader from '../FavoritesLoader';

describe('<FavoritesLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<FavoritesLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
