import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import CarCards from 'features/CarCards';

const CarListLoader: React.FC = () => (
  <Grid data-testid="CarListLoader" component="section" container spacing={2}>
    <Grid item md={12} xs={12}>
      <Skeleton height={40} width="30%" />
    </Grid>
    <Grid item md={8} xs={12}>
      <Skeleton height={40} width="50%" />
    </Grid>
    <Grid item md={4} xs={12}>
      <Skeleton height={80} />
    </Grid>
    <Grid item md={12} xs={12}>
      <CarCards cars={[]} isLoading />
    </Grid>
    <Grid item md={2} xs={12} />
    <Grid item md={8} xs={12}>
      <Skeleton height={40} />
    </Grid>
    <Grid item md={2} xs={12} />
  </Grid>
);

export default CarListLoader;
