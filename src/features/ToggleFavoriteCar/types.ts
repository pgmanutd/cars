import { Car } from 'features/CarInfo/types';

export interface FavoriteCars {
  [stockNumber: string]: Car;
}
