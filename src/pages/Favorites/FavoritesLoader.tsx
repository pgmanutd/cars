import React from 'react';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './favoritesStyles';

const FavoritesLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container
      data-testid="FavoritesLoader"
      component="section"
      className={classes.root}
    >
      <Skeleton variant="rect" height={400} />
    </Container>
  );
};

export default FavoritesLoader;
