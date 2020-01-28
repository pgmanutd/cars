import React from 'react';
import { render } from '@testing-library/react';

import FavoritesLoader from '../FavoritesLoader';

describe('<FavoritesLoader />', () => {
  const setup = () => {
    const renderResult = render(<FavoritesLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
