import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import { Redirect } from 'react-router-dom';

import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';

import { getCarName, getCarFeatures } from 'utils/carUtils';

import useFetch from 'hooks/useFetch';

import { useTranslate } from 'features/Translate';

import { StockNumberParam, Car, CarResponse } from './types';
import { useStyles } from './carInfoStyles';

export interface CarInfoProps {
  stockNumber: StockNumberParam;
}

const CarInfo: React.FC<CarInfoProps> = ({ stockNumber, ...restProps }) => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const [{ isLoading, data, error }] = useFetch<CarResponse>({
    initialUrl: apiPaths.carDetails({ stockNumber }),
  });

  if (error) {
    return <Redirect to={routePaths.notFound} />;
  }

  const isCarInfoLoading = isLoading || !data;
  const car = data?.car ?? ({} as Car);

  return (
    <Grid
      data-testid="CarInfo"
      {...restProps}
      component="section"
      container
      spacing={2}
    >
      <Grid item xs={12}>
        {isCarInfoLoading ? (
          <Skeleton
            data-testid="CarInfoImageSkeleton"
            variant="rect"
            height={200}
          />
        ) : (
          <Box className={classes.carImageContainer}>
            <img src={car.pictureUrl} alt={car.modelName} />
          </Box>
        )}
      </Grid>
      <Grid item xs={6}>
        {isCarInfoLoading ? (
          <>
            <Skeleton height={50} width="50%" />
            <Skeleton height={50} />
            <Skeleton variant="rect" height={150} />
          </>
        ) : (
          <Box data-testid="CarInfoFeatures">
            <Typography variant="h3" gutterBottom>
              {getCarName(car)}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {getCarFeatures(car, {
                stockNumberPrefix: translate(
                  'features.CarInfo.stockNumberPrefix',
                ),
              })}
            </Typography>
            <Typography variant="body2">
              {translate('features.CarInfo.description')}
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item xs={6}>
        {isCarInfoLoading ? <Skeleton height={150} /> : null}
      </Grid>
    </Grid>
  );
};

export default memo(CarInfo);
