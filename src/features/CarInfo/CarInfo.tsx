import React, { memo, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import _omit from 'lodash/fp/omit';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';
import apiPaths from 'constants/apiPaths';
import routePaths from 'constants/routePaths';

import { getCarName, getCarFeatures } from 'utils/carUtils';

import useFetch from 'hooks/useFetch';
import useLocalStorage from 'hooks/useLocalStorage';

import { useTranslate } from 'features/Translate';

import { StockNumberParam, CarResponse, FavoriteCars } from './types';
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
    initialUrl: apiPaths.carDetails({ stockNumber }),
  });
  const [favoriteCars, setFavoriteCars] = useLocalStorage<FavoriteCars>(
    LOCAL_STORAGE_KEYS.favoriteCars,
    {},
  );

  const { isCarInfoLoading, car, isCarSetAsFavorite } = getCarInfo({
    isLoading,
    data,
    favoriteCars,
  });

  const handleFavoriteCars = useCallback(() => {
    if (isCarSetAsFavorite) {
      return setFavoriteCars(_omit([car.stockNumber], favoriteCars));
    }

    return setFavoriteCars({
      ...favoriteCars,
      [car.stockNumber]: car,
    });
  }, [isCarSetAsFavorite, car, favoriteCars, setFavoriteCars]);

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
      spacing={2}
    >
      <Grid item xs={12}>
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
      <Grid item xs={7}>
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
      <Grid item xs={5}>
        <Box className={classes.favoriteBox}>
          <Typography variant="body2">
            {isCarSetAsFavorite
              ? translate('features.CarInfo.unFavoriteCarsDescription')
              : translate('features.CarInfo.favoriteCarsDescription')}
          </Typography>
          <Box className={classes.favoriteButtonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFavoriteCars}
            >
              {isCarSetAsFavorite
                ? translate('features.CarInfo.removeFavoriteButton')
                : translate('features.CarInfo.saveFavoriteButton')}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(CarInfo);
