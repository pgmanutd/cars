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
              <Skeleton height={85} width={100} variant="rect" />
            </Grid>
            <Grid item xs={5}>
              <Skeleton height={32} width="80%" />
              <Skeleton height={20} width="80%" />
              <Skeleton height={16} width="30%" />
            </Grid>
            <Grid item xs={5}>
              <Skeleton height={150} variant="rect" />
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};

export default CarCardsLoader;
