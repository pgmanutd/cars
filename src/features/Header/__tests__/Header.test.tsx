import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import Header from '../Header';

describe('<Header />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<Header />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
