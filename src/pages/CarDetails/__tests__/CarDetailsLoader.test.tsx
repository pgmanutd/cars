import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import CarDetailsLoader from '../CarDetailsLoader';

describe('<CarDetailsLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<CarDetailsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
