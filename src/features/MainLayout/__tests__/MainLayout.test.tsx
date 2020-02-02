import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import MainLayout from '../MainLayout';

describe('<MainLayout />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<MainLayout />);

    return {
      renderResult,
    };
  };

  it('should render <CarsPage /> initially', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('CarsPage')).toBeInTheDocument(),
    );
  });
});
