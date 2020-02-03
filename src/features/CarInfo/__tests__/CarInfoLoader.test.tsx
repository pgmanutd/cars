import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import CarInfoLoader from '../CarInfoLoader';

describe('<CarInfoLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<CarInfoLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
