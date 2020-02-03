import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import CarListLoader from '../CarListLoader';

describe('<CarListLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<CarListLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
