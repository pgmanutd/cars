import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import Cars from '../Cars';

describe('<Cars />', () => {
  const setup = () => {
    const renderResult = render(<Cars />);

    return {
      renderResult,
    };
  };

  it('should render <CarsLoader /> when <CarsPage /> is loading', () => {
    const { renderResult } = setup();

    expect(renderResult.getByTestId('CarsLoader')).toBeInTheDocument();
  });

  it('should render <CarsPage /> when loaded', async () => {
    const { renderResult } = setup();

    await waitForDomChange();

    expect(renderResult.getByTestId('CarsPage')).toBeInTheDocument();
  });
});
