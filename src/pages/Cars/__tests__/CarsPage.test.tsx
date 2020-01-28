import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import CarsPage from '../CarsPage';

describe('<CarsPage />', () => {
  const setup = () => {
    const renderResult = render(<CarsPage />);

    return {
      renderResult,
    };
  };

  it('should render document title "CarsPage"', async () => {
    setup();

    await waitForDomChange();

    expect(document.title).toEqual('CarsPage');
  });
});
