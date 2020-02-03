import React, { memo, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import _omit from 'lodash/fp/omit';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import useLocalStorage from 'hooks/useLocalStorage';

import { useTranslate } from 'features/Translate';
import { Car } from 'features/CarInfo/types';

import { FavoriteCars } from './types';
import { useStyles } from './addFavoriteCarStyles';

export interface AddFavoriteCarProps {
  car: Car;
}

const AddFavoriteCar: React.FC<AddFavoriteCarProps> = ({
  car,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const [favoriteCars, setFavoriteCars] = useLocalStorage<FavoriteCars>(
    LOCAL_STORAGE_KEYS.favoriteCars,
    {},
  );

  const isCarSetAsFavorite = favoriteCars[car.stockNumber];

  const handleFavoriteCars = useCallback(() => {
    if (isCarSetAsFavorite) {
      return setFavoriteCars(_omit([car.stockNumber], favoriteCars));
    }

    return setFavoriteCars({
      ...favoriteCars,
      [car.stockNumber]: car,
    });
  }, [isCarSetAsFavorite, car, favoriteCars, setFavoriteCars]);

  return (
    <Box data-testid="AddFavoriteCar" {...restProps} className={classes.root}>
      <Typography variant="body2">
        {isCarSetAsFavorite
          ? translate('features.AddFavoriteCar.unFavoriteCarsDescription')
          : translate('features.AddFavoriteCar.favoriteCarsDescription')}
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color={isCarSetAsFavorite ? 'secondary' : 'primary'}
          onClick={handleFavoriteCars}
        >
          {isCarSetAsFavorite
            ? translate('features.AddFavoriteCar.removeFavoriteButton')
            : translate('features.AddFavoriteCar.saveFavoriteButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default memo(AddFavoriteCar);
