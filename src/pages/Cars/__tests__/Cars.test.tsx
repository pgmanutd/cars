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

  it('should render document title "Cars"', async () => {
    setup();

    await waitForDomChange();

    expect(document.title).toEqual('Cars');
  });
});
