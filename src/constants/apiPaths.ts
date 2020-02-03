import { API_BASE_PATH } from 'constants/appConstants';

import appendBasePath from 'utils/appendBasePath';

import { StockNumberParam } from 'features/CarInfo/types';
import { ManufacturerQuery, ColorQuery } from 'features/NavFilter/types';
import { PageQuery } from 'features/CarList/types';
import { SortQuery } from 'features/MileageSorter/types';

const apiPaths = {
  cars: (params: {
    manufacturer: ManufacturerQuery;
    color: ColorQuery;
    sort: SortQuery;
    page: PageQuery;
  }) =>
    appendBasePath(
      `${API_BASE_PATH}/cars`,
      new URLSearchParams(params)?.toString(),
    ),
  carDetails: ({ stockNumber }: { stockNumber: StockNumberParam }) =>
    `${API_BASE_PATH}/cars/${stockNumber}`,
  colors: () => `${API_BASE_PATH}/colors`,
  manufacturers: () => `${API_BASE_PATH}/manufacturers`,
};

export default apiPaths;
