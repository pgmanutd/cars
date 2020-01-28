import React from 'react';
import { wait } from '@testing-library/react';

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

    await wait(() => expect(document.title).toEqual('Cars'));
  });
});
