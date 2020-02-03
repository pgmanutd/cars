import _toUpper from 'lodash/fp/toUpper';
import _upperFirst from 'lodash/fp/upperFirst';

import { Car } from 'features/CarInfo/types';

export const getCarName = ({ manufacturerName, modelName }: Car) =>
  `${manufacturerName} ${modelName}`;

export const getCarFeatures = (
  { stockNumber, mileage, fuelType, color }: Car,
  { stockNumberPrefix = '' }: { stockNumberPrefix?: string } = {
    stockNumberPrefix: '',
  },
) =>
  `${stockNumberPrefix}${stockNumber} - ${mileage?.number} ${_toUpper(
    mileage?.unit,
  )} - ${_upperFirst(fuelType)} - ${_upperFirst(color)}`;
