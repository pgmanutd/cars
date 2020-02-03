import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import { CAR_CARDS_FOR_LOADER_COUNT } from './carCardsConstants';
import { useStyles } from './carCardsStyles';

const CarCardsLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="CarCardsLoader" component="section">
      {Array(CAR_CARDS_FOR_LOADER_COUNT)
        .fill({})
        .map((_, index) => (
          <Grid
            data-testid="CarCardLoader"
            key={index}
            component="section"
            container
            spacing={2}
            className={classes.carContainer}
          >
            <Grid item xs={2}>
              <Skeleton height={80} width={80} variant="rect" />
            </Grid>
            <Grid item xs={10}>
              <Skeleton height={32} width="30%" />
              <Skeleton height={20} width="50%" />
              <Skeleton height={16} width="10%" />
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};

export default CarCardsLoader;
