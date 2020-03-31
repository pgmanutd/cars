import React, { lazy, Suspense } from 'react';

import CarsLoader from './CarsLoader';

const CarsPage = lazy(() =>
  import(/* webpackChunkName: "CarsPage" */ './CarsPage'),
);

const Cars: React.FC = (props) => (
  <Suspense fallback={<CarsLoader />}>
    <CarsPage {...props} />
  </Suspense>
);

export default Cars;
