import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';

import { useTranslate } from 'features/Translate';

import { useStyles } from './favoritesStyles';

const FavoritesPage: React.FC = () => {
  const classes = useStyles();
  const { translate } = useTranslate();

  return (
    <Container
      data-testid="FavoritesPage"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.Favorites.documentTitle')}</title>
      </Helmet>
    </Container>
  );
};

export default FavoritesPage;
