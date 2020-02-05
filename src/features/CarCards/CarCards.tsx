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
import ToggleFavoriteCar from 'features/ToggleFavoriteCar';

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

  if (isLoading) {
    return <CarCardsLoader />;
  }

  return (
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
          <Grid item md={2} xs={12}>
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
          <Grid item md={5} xs={12}>
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
          <Grid item md={5} xs={12}>
            <ToggleFavoriteCar car={car} />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

// NOTE: Using memo to avoid unnecessary rerenders of this component.
// Only used "memo" for components which actually accepts any props and used
// it for rendering
// https://kentcdodds.com/blog/usememo-and-usecallback
export default memo(CarCards);
