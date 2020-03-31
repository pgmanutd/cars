import React, { lazy, Suspense } from 'react';

import CarDetailsLoader from './CarDetailsLoader';

const CarDetailsPage = lazy(() =>
  import(/* webpackChunkName: "CarDetailsPage" */ './CarDetailsPage'),
);

const CarDetails: React.FC = (props) => (
  <Suspense fallback={<CarDetailsLoader />}>
    <CarDetailsPage {...props} />
  </Suspense>
);

export default CarDetails;
