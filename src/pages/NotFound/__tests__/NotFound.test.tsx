import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import NotFound from '../NotFound';

describe('<NotFound />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<NotFound />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should render document title "404 - Not Found"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('404 - Not Found'));
  });
});
