import React from 'react';
import { wait, waitForElement } from '@testing-library/react';
import { Route } from 'react-router-dom';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import CarDetailsPage from '../CarDetailsPage';

describe('<CarDetailsPage />', () => {
  const setup = () => {
    const params = {
      stockNumber: '1234',
    };
    const { renderResult } = renderWithProviders(
      <Route path={routePaths.carDetails}>
        <CarDetailsPage />
      </Route>,
      {
        routerConfig: {
          route: `/details/${params.stockNumber}`,
        },
      },
    );

    return {
      renderResult,
      params,
    };
  };

  it('should render document title "Car Details"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('Car Details'));
  });

  it('should render <CarInfo />', async () => {
    const { renderResult } = setup();

    await waitForElement(() => renderResult.queryByTestId('CarInfoFeatures'));

    expect(renderResult.getByTestId('CarInfo')).toBeInTheDocument();
  });
});
