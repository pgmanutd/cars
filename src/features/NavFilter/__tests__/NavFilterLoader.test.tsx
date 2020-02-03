import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import NavFilterLoader from '../NavFilterLoader';

describe('<NavFilterLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(
      <NavFilterLoader
        areColorsResponseLoading
        areManufacturersResponseLoading
        areNavFiltersResponseLoading
      />,
    );

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
