import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import CarsLoader from '../CarsLoader';

describe('<CarsLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<CarsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
