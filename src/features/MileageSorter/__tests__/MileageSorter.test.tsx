import React from 'react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import MileageSorter from '../MileageSorter';

describe('<MileageSorter />', () => {
  const setup = () => {
    const initialRoute = routePaths.cars;
    const sort = '';

    const { renderResult, history } = renderWithProviders(
      <Route path={initialRoute}>
        <MileageSorter sort={sort} />
      </Route>,
      {
        routerConfig: {
          route: initialRoute,
        },
      },
    );

    return {
      sort,
      renderResult,
      history,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should add "sort" query to location path when "asc" item in dropdown is clicked', () => {
    const { renderResult, history } = setup();

    userEvent.click(renderResult.getByText('None'));
    userEvent.click(renderResult.getByText('Mileage - Ascending'));

    const searchParams = new URLSearchParams(history.location.search);

    expect(searchParams.toString()).toBe('sort=asc');
  });
});
