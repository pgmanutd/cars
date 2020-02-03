import { Car, CarResponse } from './types';

export const getCarInfo = ({
  isLoading,
  data,
  favoriteCars,
}: {
  isLoading: boolean;
  data: CarResponse | null;
  favoriteCars: { [key: string]: {} };
}) => {
  const isCarInfoLoading = isLoading || !data;
  const car = data?.car ?? ({} as Car);
  const isCarSetAsFavorite = favoriteCars[car.stockNumber];

  return {
    isCarInfoLoading,
    car,
    isCarSetAsFavorite,
  };
};
