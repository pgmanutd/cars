import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import CarDetailsLoader from '../CarDetailsLoader';

describe('<CarDetailsLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<CarDetailsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
