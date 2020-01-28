import React from 'react';
import { waitForDomChange } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import CarsPage from '../CarsPage';

describe('<CarsPage />', () => {
  const setup = () => {
    const renderResult = renderWithProviders(<CarsPage />);

    return {
      renderResult,
    };
  };

  it('should render document title "Cars"', async () => {
    setup();

    await waitForDomChange();

    expect(document.title).toEqual('Cars');
  });
});
