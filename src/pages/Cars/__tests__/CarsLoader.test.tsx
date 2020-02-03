import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import CarsLoader from '../CarsLoader';

describe('<CarsLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<CarsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
