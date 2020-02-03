import React from 'react';
import { waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';

import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import { ColorQuery, ManufacturerQuery } from '../types';
import NavFilter from '../NavFilter';

describe('<NavFilter />', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const setup = ({
    color,
    manufacturer,
  }: {
    color: ColorQuery;
    manufacturer: ManufacturerQuery;
  }) => {
    const initialRoute = routePaths.cars;

    const { renderResult, history } = renderWithProviders(
      <Route path={initialRoute}>
        <NavFilter color={color} manufacturer={manufacturer} />
      </Route>,
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

  const setupForSuccessResponse = async () => {
    const color = '';
    const successColorsResponse = {
      colors: ['white'],
    };

    const manufacturer = '';
    const successManufacturerResponse = {
      manufacturers: [
        {
          name: 'Audi',
          models: [
            {
              name: 'ABCD',
            },
          ],
        },
      ],
    };

    fetchMock
      .doMockOnceIf(apiPaths.colors())
      .mockResponseOnce(JSON.stringify(successColorsResponse));

    fetchMock
      .doMockOnceIf(apiPaths.manufacturers())
      .mockResponseOnce(JSON.stringify(successManufacturerResponse));

    const { renderResult, history } = setup({
      color,
      manufacturer,
    });

    await waitForElement(() => renderResult.queryByTestId('NavFilterButton'));

    return {
      renderResult,
      history,
      successColorsResponse,
      successManufacturerResponse,
    };
  };

  it('should render the component and matches it against stored snapshot for success response', async () => {
    const { renderResult } = await setupForSuccessResponse();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should change location path to selected values on "Filter" button press', async () => {
    const {
      renderResult,
      history,
      successColorsResponse,
      successManufacturerResponse,
    } = await setupForSuccessResponse();

    const color = successColorsResponse.colors[0];
    const manufacturer = successManufacturerResponse.manufacturers[0].name;

    userEvent.click(renderResult.getByText('All car colors'));
    userEvent.click(renderResult.getByText(color));
    userEvent.click(renderResult.getByText('All manufacturers'));
    userEvent.click(renderResult.getByText(manufacturer));

    userEvent.click(renderResult.getByText('Filter'));

    const searchParams = new URLSearchParams(history.location.search);

    expect(searchParams.toString()).toStrictEqual(
      `filters.color=${color}&filters.manufacturer=${manufacturer}`,
    );
  });

  it('should render the component and matches it against stored snapshot for failed response', async () => {
    const color = 'white';
    const manufacturer = 'Audi';
    const errorResponse = new Error('Some error');

    fetchMock.doMockOnceIf(apiPaths.colors()).mockRejectOnce(errorResponse);
    fetchMock
      .doMockOnceIf(apiPaths.manufacturers())
      .mockRejectOnce(errorResponse);

    const { renderResult } = setup({
      color,
      manufacturer,
    });

    await waitForElement(() =>
      renderResult.queryByTestId('NavFilterButtonSkeleton'),
    );

    expect(renderResult.asFragment()).toMatchSnapshot();
  });
});
