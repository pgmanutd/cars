import React from 'react';
import { render } from '@testing-library/react';

import CarsLoader from '../CarsLoader';

describe('<CarsLoader />', () => {
  const setup = () => {
    const renderResult = render(<CarsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
