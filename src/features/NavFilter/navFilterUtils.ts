import { QUERY_VALUES } from 'constants/appConstants';

import routePaths from 'constants/routePaths';

import { ColorQuery, ManufacturerQuery } from './types';

export const getFilterButtonHref = ({
  selectedColor,
  selectedManufacturer,
}: {
  selectedColor: ColorQuery;
  selectedManufacturer: ManufacturerQuery;
}) => {
  const query = {
    [QUERY_VALUES.colorFilter]: selectedColor,
    [QUERY_VALUES.manufacturerFilter]: selectedManufacturer,
  };

  return `${routePaths.cars}?${new URLSearchParams(
    query as Record<string, string>,
  )}`;
};

export const pickTargetValue = (event: React.ChangeEvent<{ value: unknown }>) =>
  event.target.value;
