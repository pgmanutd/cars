import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useTranslate } from 'features/Translate';

const FavoritesPage: React.FC = () => {
  const { translate } = useTranslate();

  return (
    <section data-testid="FavoritesPage">
      <Helmet>
        <title>{translate('pages.Favorites.documentTitle')}</title>
      </Helmet>
    </section>
  );
};

export default FavoritesPage;
