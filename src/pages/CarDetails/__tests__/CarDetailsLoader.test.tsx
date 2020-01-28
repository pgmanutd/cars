import React from 'react';
import { render } from '@testing-library/react';

import CarDetailsLoader from '../CarDetailsLoader';

describe('<CarDetailsLoader />', () => {
  const setup = () => {
    const renderResult = render(<CarDetailsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
