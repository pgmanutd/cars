import React, { lazy, Suspense } from 'react';

import FavoritesLoader from './FavoritesLoader';

const FavoritesPage = lazy(() =>
  import(/* webpackChunkName: "FavoritesPage" */ './FavoritesPage'),
);

const Favorites: React.FC = (props) => (
  <Suspense fallback={<FavoritesLoader />}>
    <FavoritesPage {...props} />
  </Suspense>
);

export default Favorites;
