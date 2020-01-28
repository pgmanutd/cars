import React from 'react';
import { wait } from '@testing-library/react';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarDetailsPage from '../CarDetailsPage';

describe('<CarDetailsPage />', () => {
  const setup = () => {
    const params = {
      stockNumber: '1234',
    };
    const { renderResult } = renderWithProviders(<CarDetailsPage />, {
      routerConfig: {
        path: routePaths.carDetails,
        route: `/${params.stockNumber}`,
      },
    });

    return {
      renderResult,
      params,
    };
  };

  it('should render document title "Car Details"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('Car Details'));
  });

  it('should render stockNumber param', () => {
    const { renderResult, params } = setup();

    expect(renderResult.getByText(params.stockNumber)).toBeInTheDocument();
  });
});
