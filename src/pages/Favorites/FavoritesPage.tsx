import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import useLocalStorage from 'hooks/useLocalStorage';

import { FavoriteCars } from 'features/AddFavoriteCar/types';
import { useTranslate } from 'features/Translate';
import CarCards from 'features/CarCards';

import { useStyles } from './favoritesStyles';

const FavoritesPage: React.FC = () => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const [favoriteCars] = useLocalStorage<FavoriteCars>(
    LOCAL_STORAGE_KEYS.favoriteCars,
    {},
  );

  const cars = Object.values(favoriteCars);

  return (
    <Container
      data-testid="FavoritesPage"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.Favorites.documentTitle')}</title>
      </Helmet>
      <Typography variant="h4" gutterBottom align="center">
        {translate('pages.Favorites.headerText')}
      </Typography>
      {cars.length > 0 ? (
        <CarCards cars={cars} />
      ) : (
        <Typography variant="body2" align="center">
          {translate('pages.Favorites.noFavoriteCarsText')}
        </Typography>
      )}
    </Container>
  );
};

export default FavoritesPage;
