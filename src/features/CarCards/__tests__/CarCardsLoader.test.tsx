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

  it('should render <CarCardLoader />', () => {
    const { renderResult } = setup();

    expect(renderResult.getAllByTestId('CarCardLoader')).toHaveLength(5);
  });
});
