import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';

import { useStyles } from './carsDetailsStyles';

const CarDetailsLoader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container
      data-testid="CarDetailsLoader"
      component="section"
      className={classes.root}
    >
      <Skeleton variant="rect" height={400} />
    </Container>
  );
};

export default CarDetailsLoader;
