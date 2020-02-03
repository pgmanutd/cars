import React from 'react';

import { renderWithTranslate } from 'utils/testUtils';

import CarCardsLoader from '../CarCardsLoader';

describe('<CarCardsLoader />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<CarCardsLoader />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.getAllByTestId('CarCardLoader')).toHaveLength(5);
  });
});
