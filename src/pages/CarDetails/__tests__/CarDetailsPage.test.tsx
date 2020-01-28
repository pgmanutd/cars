import React from 'react';
import { waitForDomChange } from '@testing-library/react';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarDetailsPage from '../CarDetailsPage';

describe('<CarDetailsPage />', () => {
  const setup = () => {
    const params = {
      stockNumber: '1234',
    };
    const query = {
      sort: 'asc',
      page: '1',
      'filters.manufacturer': 'Audi',
      'filters.color': 'white',
    };
    const renderResult = renderWithProviders(<CarDetailsPage />, {
      routerConfig: {
        path: routePaths.carDetails,
        route: `/${params.stockNumber}?${new URLSearchParams(
          query as Record<string, string>,
        )}`,
      },
    });

    return {
      renderResult,
      params,
      query,
    };
  };

  it('should render document title "Car Details"', async () => {
    setup();

    await waitForDomChange();

    expect(document.title).toEqual('Car Details');
  });

  it('should render stockNumber param', () => {
    const { renderResult, params } = setup();

    expect(renderResult.getByText(params.stockNumber)).toBeInTheDocument();
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
