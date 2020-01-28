import React from 'react';
import { Helmet } from 'react-helmet-async';

const FavoritesPage: React.FC = () => (
  <section data-testid="FavoritesPage">
    <Helmet>
      <title>Favorites</title>
    </Helmet>
  </section>
);

export default FavoritesPage;
