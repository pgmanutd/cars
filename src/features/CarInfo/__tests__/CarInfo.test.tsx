import React from 'react';
import { waitForElement } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { renderWithProviders } from 'utils/testUtils';

import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';

import { StockNumberParam } from '../types';
import CarInfo from '../CarInfo';

describe('<CarInfo />', () => {
  const setup = ({ stockNumber }: { stockNumber: StockNumberParam }) => {
    const initialRoute = `/details/${stockNumber}`;

    const { renderResult, history } = renderWithProviders(
      <>
        <Route path={routePaths.notFound}>
          <div data-testid="NotFound">Not Found</div>
        </Route>
        <Route path={initialRoute}>
          <CarInfo stockNumber={stockNumber} />
        </Route>
      </>,
      {
        routerConfig: {
          route: initialRoute,
        },
      },
    );

    return {
      renderResult,
      history,
    };
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render the component and matches it against stored snapshot for success response', async () => {
    const stockNumber = '1234';
    const successResponse = {
      car: {
        stockNumber: 78924,
        manufacturerName: 'Fiat',
        modelName: 'Sedici',
        color: 'white',
        mileage: { number: 141474, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: 'https://dummyimage.com/300/09f/fff.png',
      },
    };

    fetchMock
      .doMockOnceIf(apiPaths.carDetails({ stockNumber }))
      .mockResponseOnce(JSON.stringify(successResponse));

    const { renderResult } = setup({ stockNumber });

    await waitForElement(() => renderResult.queryByTestId('CarInfoFeatures'));

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should render the component and matches it against stored snapshot for blank response', async () => {
    const stockNumber = '1234';
    const successResponse = null;

    fetchMock
      .doMockOnceIf(apiPaths.carDetails({ stockNumber }))
      .mockResponseOnce(JSON.stringify(successResponse));

    const { renderResult } = setup({ stockNumber });

    await waitForElement(() =>
      renderResult.queryByTestId('CarInfoImageSkeleton'),
    );

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should redirect to not found page for failed response', async () => {
    const stockNumber = '1234';
    const errorResponse = new Error('Some error');

    fetchMock
      .doMockOnceIf(apiPaths.carDetails({ stockNumber }))
      .mockRejectOnce(errorResponse);

    const { renderResult, history } = setup({ stockNumber });

    await waitForElement(() => renderResult.queryByTestId('NotFound'));

    expect(history.location.pathname).toBe(routePaths.notFound);
  });
});
