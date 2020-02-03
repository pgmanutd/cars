import { StockNumberParam } from 'features/CarInfo/types';

const routePaths = {
  cars: '/',
  carDetails: {
    pathWithParams: ({ stockNumber }: { stockNumber: StockNumberParam }) =>
      `/details/${stockNumber}`,
    path: '/details/:stockNumber',
  },
  favorites: '/favorites',
  notFound: '/not-found',
};

export default routePaths;
