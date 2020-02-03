import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const CarInfoLoader: React.FC = () => (
  <Grid data-testid="CarInfoLoader" component="section" container spacing={4}>
    <Grid item xs={12}>
      <Skeleton
        data-testid="CarInfoImageSkeleton"
        variant="rect"
        height={200}
      />
    </Grid>
    <Grid item xs={7}>
      <Skeleton height={100} width="70%" />
      <Skeleton height={50} />
      <Skeleton variant="rect" height={100} />
    </Grid>
    <Grid item xs={5}>
      <Skeleton height={250} />
    </Grid>
  </Grid>
);

export default CarInfoLoader;
