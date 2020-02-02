import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import AppLogo from '../AppLogo';

describe('<AppLogo />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<AppLogo />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
