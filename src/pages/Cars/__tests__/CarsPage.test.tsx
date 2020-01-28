import React from 'react';
import { wait } from '@testing-library/react';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarsPage from '../CarsPage';

describe('<CarsPage />', () => {
  const setup = () => {
    const query = {
      sort: 'asc',
      page: '1',
      'filters.manufacturer': 'Audi',
      'filters.color': 'white',
    };
    const { renderResult } = renderWithProviders(<CarsPage />, {
      routerConfig: {
        path: routePaths.cars,
        route: `/?${new URLSearchParams(query as Record<string, string>)}`,
      },
    });

    return {
      renderResult,
      query,
    };
  };

  it('should render document title "Cars"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('Cars'));
  });

  it('should render sort query', () => {
    const { renderResult, query } = setup();

    expect(renderResult.getByText(query.sort)).toBeInTheDocument();
  });

  it('should render page query', () => {
    const { renderResult, query } = setup();

    expect(renderResult.getByText(query.page)).toBeInTheDocument();
  });

  it('should render filters.manufacturer query', () => {
    const { renderResult, query } = setup();

    expect(
      renderResult.getByText(query['filters.manufacturer']),
    ).toBeInTheDocument();
  });

  it('should render filters.color query', () => {
    const { renderResult, query } = setup();

    expect(renderResult.getByText(query['filters.color'])).toBeInTheDocument();
  });
});
