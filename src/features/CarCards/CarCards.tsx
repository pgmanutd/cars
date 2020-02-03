import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import routePaths from 'constants/routePaths';

import { getCarName, getCarFeatures } from 'utils/carUtils';

import { useTranslate } from 'features/Translate';

import { Car } from 'features/CarInfo/types';

import CarCardsLoader from './CarCardsLoader';
import { useStyles } from './carCardsStyles';

export interface CarCardsProps {
  cars: Car[];
  isLoading?: boolean;
}

const CarCards: React.FC<CarCardsProps> = ({
  cars,
  isLoading = false,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();

  return isLoading ? (
    <CarCardsLoader />
  ) : (
    <Box data-testid="CarCards" {...restProps} component="section">
      {cars.map(car => (
        <Grid
          data-testid="CarCard"
          {...restProps}
          key={car.stockNumber}
          component="section"
          container
          spacing={2}
          className={classes.carContainer}
        >
          <Grid item xs={2}>
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
          <Grid item xs={10}>
            <Typography variant="h6" gutterBottom>
              {getCarName(car)}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {getCarFeatures(car, {
                stockNumberPrefix: translate(
                  'features.CarCards.stockNumberPrefix',
                ),
              })}
            </Typography>
            <Link
              component={RouterLink}
              to={routePaths.carDetails.pathWithParams({
                stockNumber: car.stockNumber?.toString(),
              })}
              color="textSecondary"
              variant="body2"
            >
              {translate('features.CarCards.viewDetailsLinkText')}
            </Link>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default memo(CarCards);
