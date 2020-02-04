import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { Redirect } from 'react-router-dom';

import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';

import { getCarName, getCarFeatures } from 'utils/carUtils';

import useFetch from 'hooks/useFetch';

import { useTranslate } from 'features/Translate';
import ToggleFavoriteCar from 'features/ToggleFavoriteCar';

import { StockNumberParam, CarResponse } from './types';
import CarInfoLoader from './CarInfoLoader';
import { getCarInfo } from './carInfoUtils';
import { useStyles } from './carInfoStyles';

export interface CarInfoProps {
  stockNumber: StockNumberParam;
}

const CarInfo: React.FC<CarInfoProps> = ({ stockNumber, ...restProps }) => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const [{ isLoading, data, error }] = useFetch<CarResponse>({
    url: apiPaths.carDetails({ stockNumber }),
  });

  const { isCarInfoLoading, car } = getCarInfo({
    isLoading,
    data,
  });

  if (error) {
    return <Redirect to={routePaths.notFound} />;
  }

  if (isCarInfoLoading) {
    return <CarInfoLoader />;
  }

  return (
    <Grid
      data-testid="CarInfo"
      {...restProps}
      component="section"
      container
      spacing={4}
    >
      <Grid item md={12} xs={12}>
        <Box className={classes.carImageContainer}>
          {car.pictureUrl ? (
            <CardMedia
              image={car.pictureUrl}
              title={car.modelName}
              className={classes.carImage}
            />
          ) : (
            car.modelName
          )}
        </Box>
      </Grid>
      <Grid item md={7} xs={12}>
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
      </Grid>
      <Grid item md={5} xs={12}>
        <ToggleFavoriteCar car={car} />
      </Grid>
    </Grid>
  );
};

export default memo(CarInfo);
