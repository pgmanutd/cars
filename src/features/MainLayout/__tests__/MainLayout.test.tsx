import React from 'react';
import { waitFor } from '@testing-library/react';

import { renderWithTranslate } from 'utils/testUtils';

import MainLayout from '../MainLayout';

describe('<MainLayout />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<MainLayout />);

    return {
      renderResult,
    };
  };

  it('should render <CarsPage /> initially', async () => {
    const { renderResult } = setup();

    await waitFor(() =>
      expect(renderResult.getByTestId('CarsPage')).toBeInTheDocument(),
    );
  });
});
