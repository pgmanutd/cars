import _omit from 'lodash/fp/omit';
import _curry from 'lodash/fp/curry';

import { Car } from 'features/CarInfo/types';

import { FavoriteCars } from './types';

export const addCarToFavorites = _curry(
  (car: Car, favoriteCars: FavoriteCars) => ({
    ...favoriteCars,
    [car.stockNumber]: car,
  }),
);

export const removeCarFromFavorites = _curry(
  (car: Car, favoriteCars: FavoriteCars) =>
    _omit([car.stockNumber], favoriteCars),
);

export const isCarInFavoriteCars = (car: Car, favoriteCars: FavoriteCars) =>
  favoriteCars[car.stockNumber];
