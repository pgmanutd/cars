import React, { memo, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import _compose from 'lodash/fp/compose';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import useLocalStorage from 'hooks/useLocalStorage';

import { useTranslate } from 'features/Translate';
import { Car } from 'features/CarInfo/types';

import { FavoriteCars } from './types';
import { useStyles } from './toggleFavoriteCarStyles';

import {
  isCarInFavoriteCars,
  addCarToFavorites,
  removeCarFromFavorites,
} from './toggleFavoriteUtils';

export interface ToggleFavoriteCarProps {
  car: Car;
}

const ToggleFavoriteCar: React.FC<ToggleFavoriteCarProps> = ({
  car,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const [favoriteCars, setFavoriteCars] = useLocalStorage<FavoriteCars>(
    LOCAL_STORAGE_KEYS.favoriteCars,
    {},
  );

  const isCarSetAsFavorite = isCarInFavoriteCars(car, favoriteCars);
  const toggleFavoriteCar = isCarSetAsFavorite
    ? removeCarFromFavorites(car)
    : addCarToFavorites(car);

  const handleFavoriteCarsClick = useCallback(() => {
    _compose(setFavoriteCars, toggleFavoriteCar)(favoriteCars);
  }, [toggleFavoriteCar, favoriteCars, setFavoriteCars]);

  return (
    <Box
      data-testid="ToggleFavoriteCar"
      {...restProps}
      className={classes.root}
    >
      <Typography variant="body2">
        {isCarSetAsFavorite
          ? translate('features.ToggleFavoriteCar.unFavoriteCarsDescription')
          : translate('features.ToggleFavoriteCar.favoriteCarsDescription')}
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color={isCarSetAsFavorite ? 'secondary' : 'primary'}
          onClick={handleFavoriteCarsClick}
        >
          {isCarSetAsFavorite
            ? translate('features.ToggleFavoriteCar.removeFavoriteButton')
            : translate('features.ToggleFavoriteCar.saveFavoriteButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default memo(ToggleFavoriteCar);
