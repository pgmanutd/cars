import { Cars, CarListResponse } from './types';

export const getCarListInfo = ({
  isLoading,
  data,
  error,
}: {
  isLoading: boolean;
  data: CarListResponse | null;
  error: Error | null;
}) => {
  const isCarListLoading = !!(isLoading || !data || error);
  const cars = data?.cars ?? ([] as Cars);
  const totalCarsCount = data?.totalCarsCount ?? 0;
  const totalPageCount = data?.totalPageCount ?? 0;
  const carsCount = cars.length;
  const hasCars = cars.length > 0;

  return {
    isCarListLoading,
    cars,
    totalCarsCount,
    totalPageCount,
    carsCount,
    hasCars,
  };
};
