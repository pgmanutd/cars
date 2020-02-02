import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { useTranslate } from 'features/Translate';
import CarInfo from 'features/CarInfo';

import { useStyles } from './carsDetailsStyles';

const CarDetailsPage: React.FC = () => {
  const classes = useStyles();
  const { stockNumber = '' } = useParams();
  const { translate } = useTranslate();

  return (
    <Container
      data-testid="CarDetailsPage"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.CarDetails.documentTitle')}</title>
      </Helmet>
      <CarInfo stockNumber={stockNumber} />
    </Container>
  );
};

export default CarDetailsPage;
