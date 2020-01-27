import { API_BASE_PATH } from 'setupProxy';

const apiPaths = {
  cars: () => `${API_BASE_PATH}/cars`,
  carDetails: ({ stockNumber }: { stockNumber: number }) =>
    `${API_BASE_PATH}/cars/${stockNumber}`,
  colors: () => `${API_BASE_PATH}/colors`,
  manufacturers: () => `${API_BASE_PATH}/manufacturers`,
};

export default apiPaths;
