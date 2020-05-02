import React from 'react';
import { waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { QUERY_KEYS } from 'constants/appConstants';
import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarsPage from '../CarsPage';

describe('<CarsPage />', () => {
  const setup = () => {
    const query = {
      [QUERY_KEYS.sort]: 'asc',
      [QUERY_KEYS.page]: '1',
      [QUERY_KEYS.colorFilter]: '',
      [QUERY_KEYS.manufacturerFilter]: '',
    };
    const { renderResult } = renderWithProviders(
      <Route path={routePaths.cars}>
        <CarsPage />
      </Route>,
      {
        routerConfig: {
          route: `/?${new URLSearchParams(query)}`,
        },
      },
    );

    return {
      renderResult,
      query,
    };
  };

  it('should render document title "Cars"', async () => {
    setup();

    await waitFor(() => expect(document.title).toEqual('Cars'));
  });

  it('should render <NavFilter /> component', async () => {
    const { renderResult } = setup();

    await waitFor(() => renderResult.queryByTestId('NavFilterButton'));

    expect(renderResult.getByTestId('NavFilter')).toBeInTheDocument();
  });

  it('should render <CarList /> component', async () => {
    const { renderResult } = setup();

    await waitFor(() => renderResult.queryByText('Available Cars'));

    expect(renderResult.getByTestId('CarList')).toBeInTheDocument();
  });
});
