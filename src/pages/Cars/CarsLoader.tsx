import React from 'react';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './carsPageStyles';

const CarsLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container
      data-testid="CarsLoader"
      component="section"
      className={classes.root}
    >
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <Skeleton variant="rect" height={200} />
        </Grid>
        <Grid item md={8} xs={12}>
          <Skeleton variant="rect" height={400} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsLoader;
