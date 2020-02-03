import { Car, CarResponse } from './types';

export const getCarInfo = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: CarResponse | null;
}) => {
  const isCarInfoLoading = isLoading || !data;
  const car = data?.car ?? ({} as Car);

  return {
    isCarInfoLoading,
    car,
  };
};
