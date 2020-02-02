import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import Footer from '../Footer';

describe('<Footer />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<Footer />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
