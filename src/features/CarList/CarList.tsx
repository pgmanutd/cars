import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';
import { QUERY_KEYS } from 'constants/appConstants';

import useFetch from 'hooks/useFetch';

import { useTranslate } from 'features/Translate';

import { ColorQuery, ManufacturerQuery } from 'features/NavFilter/types';
import { SortQuery } from 'features/MileageSorter/types';
import MileageSorter from 'features/MileageSorter';
import CarCards from 'features/CarCards';
import Pagination from 'features/Pagination';

import { PageQuery, CarListResponse } from './types';
import { getCarListInfo } from './carListUtils';
import CarListLoader from './CarListLoader';

export interface CarListProps {
  sort: SortQuery;
  page: PageQuery;
  color: ColorQuery;
  manufacturer: ManufacturerQuery;
  paginationBasePath?: string;
}

const CarList: React.FC<CarListProps> = ({
  sort,
  page,
  color,
  manufacturer,
  paginationBasePath = routePaths.cars,
  ...restProps
}) => {
  const { translate } = useTranslate();
  const [carListResponse] = useFetch<CarListResponse>({
    url: apiPaths.cars({
      sort,
      page,
      color,
      manufacturer,
    }),
  });

  const {
    isCarListLoading,
    cars,
    totalCarsCount,
    totalPageCount,
    carsCount,
    hasCars,
  } = getCarListInfo(carListResponse);

  if (isCarListLoading) {
    return <CarListLoader />;
  }

  return (
    <Grid
      data-testid="CarList"
      {...restProps}
      component="section"
      container
      spacing={2}
    >
      <Grid item md={12} xs={12}>
        <Typography variant="h5" gutterBottom>
          {translate('features.CarList.headerText')}
        </Typography>
      </Grid>
      {hasCars ? (
        <>
          <Grid item md={8} xs={12}>
            <Typography variant="body1">
              {translate('features.CarList.subHeaderText', {
                CARS_COUNT: carsCount?.toString(),
                TOTAL_CARS_COUNT: totalCarsCount?.toString(),
              })}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <MileageSorter sort={sort} />
          </Grid>
          <Grid item md={12} xs={12}>
            <CarCards cars={cars} isLoading={isCarListLoading} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Pagination
              currentPage={Number(page)}
              totalPage={totalPageCount}
              basePath={paginationBasePath}
              queryKey={QUERY_KEYS.page}
            />
          </Grid>
        </>
      ) : (
        <Grid item md={12} xs={12}>
          <Typography variant="body1">
            {translate('features.CarList.noCarsText')}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CarList;
