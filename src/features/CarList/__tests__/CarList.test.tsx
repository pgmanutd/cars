import React from 'react';
import { waitForElement } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import apiPaths from 'constants/apiPaths';

import { ColorQuery, ManufacturerQuery } from 'features/NavFilter/types';
import { SortQuery } from 'features/MileageSorter/types';

import { PageQuery } from '../types';
import CarList from '../CarList';

describe('<CarList />', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const setup = ({
    sort,
    page,
    color,
    manufacturer,
  }: {
    sort: SortQuery;
    page: PageQuery;
    color: ColorQuery;
    manufacturer: ManufacturerQuery;
  }) => {
    const { renderResult } = renderWithProviders(
      <CarList
        sort={sort}
        page={page}
        color={color}
        manufacturer={manufacturer}
      />,
    );

    return {
      renderResult,
    };
  };

  it('should render <CarCard /> for success response', async () => {
    const sort = 'asc';
    const page = '1';
    const color = 'white';
    const manufacturer = 'Fiat';
    const successResponse = {
      cars: [
        {
          stockNumber: 78924,
          manufacturerName: 'Fiat',
          modelName: 'Sedici',
          color: 'white',
          mileage: { number: 141474, unit: 'km' },
          fuelType: 'Diesel',
          pictureUrl: 'https://dummyimage.com/300/09f/fff.png',
        },
      ],
    };

    fetchMock
      .doMockOnceIf(apiPaths.cars({ sort, page, color, manufacturer }))
      .mockResponseOnce(JSON.stringify(successResponse));

    const { renderResult } = setup({ sort, page, color, manufacturer });

    await waitForElement(() => renderResult.queryByText('Available Cars'));

    expect(renderResult.getAllByTestId('CarCard')).toHaveLength(1);
  });

  it('should render "No cars found." for empty cars response', async () => {
    const sort = 'asc';
    const page = '1';
    const color = 'white';
    const manufacturer = 'Fiat';
    const successResponse = {
      cars: [],
    };
    fetchMock
      .doMockOnceIf(apiPaths.cars({ sort, page, color, manufacturer }))
      .mockResponseOnce(JSON.stringify(successResponse));

    const { renderResult } = setup({ sort, page, color, manufacturer });

    await waitForElement(() => renderResult.queryByText('Available Cars'));

    expect(renderResult.getByText('No cars found.')).toBeInTheDocument();
  });

  it('renders <CarListLoader /> for failed response', async () => {
    const sort = 'asc';
    const page = '1';
    const color = 'white';
    const manufacturer = 'Fiat';
    const errorResponse = new Error('Some error');

    fetchMock
      .doMockOnceIf(apiPaths.cars({ sort, page, color, manufacturer }))
      .mockRejectOnce(errorResponse);

    const { renderResult } = setup({ sort, page, color, manufacturer });

    await waitForElement(() => renderResult.queryByTestId('CarListLoader'));

    expect(renderResult.queryByTestId('CarCard')).not.toBeInTheDocument();
  });
});
