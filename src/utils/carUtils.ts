import { Car } from 'features/CarInfo/types';

export const getCarName = ({ manufacturerName, modelName }: Car) =>
  `${manufacturerName} ${modelName}`;

export const getCarFeatures = (
  { stockNumber, mileage, fuelType, color }: Car,
  { stockNumberPrefix = '' }: { stockNumberPrefix?: string } = {
    stockNumberPrefix: '',
  },
) =>
  `${stockNumberPrefix}${stockNumber} - ${mileage?.number} ${mileage?.unit} - ${fuelType} - ${color}`;
