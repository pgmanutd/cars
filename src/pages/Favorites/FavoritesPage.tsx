import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';

import { useTranslate } from 'features/Translate';

const FavoritesPage: React.FC = () => {
  const { translate } = useTranslate();

  return (
    <Box component="section" data-testid="FavoritesPage">
      <Helmet>
        <title>{translate('pages.Favorites.documentTitle')}</title>
      </Helmet>
    </Box>
  );
};

export default FavoritesPage;
