import React from 'react';
import { wait, waitForElement } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { QUERY_VALUES } from 'constants/appConstants';
import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarsPage from '../CarsPage';

describe('<CarsPage />', () => {
  const setup = () => {
    const query = {
      [QUERY_VALUES.sort]: 'asc',
      [QUERY_VALUES.page]: '1',
      [QUERY_VALUES.colorFilter]: '',
      [QUERY_VALUES.manufacturerFilter]: '',
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

    await wait(() => expect(document.title).toEqual('Cars'));
  });

  it('should render sort query', async () => {
    const { renderResult, query } = setup();

    await waitForElement(() => renderResult.queryByTestId('NavFilterButton'));

    expect(renderResult.getByText(query.sort)).toBeInTheDocument();
  });

  it('should render page query', async () => {
    const { renderResult, query } = setup();

    await waitForElement(() => renderResult.queryByTestId('NavFilterButton'));

    expect(renderResult.getByText(query.page)).toBeInTheDocument();
  });

  it('should render <NavFilter /> component', async () => {
    const { renderResult } = setup();

    await waitForElement(() => renderResult.queryByTestId('NavFilterButton'));

    expect(renderResult.getByTestId('NavFilter')).toBeInTheDocument();
  });
});
