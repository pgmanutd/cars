import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { QUERY_VALUES } from 'constants/appConstants';

import useQuery from 'hooks/useQuery';

import { useTranslate } from 'features/Translate';
import NavFilter from 'features/NavFilter';

import { useStyles } from './carsPageStyles';

const CarsPage: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const { translate } = useTranslate();

  const selectedColor = query.get(QUERY_VALUES.colorFilter) || '';
  const selectedManufacturer = query.get(QUERY_VALUES.manufacturerFilter) || '';

  return (
    <Container
      data-testid="CarsPage"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.Cars.documentTitle')}</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <NavFilter
            selectedColor={selectedColor}
            selectedManufacturer={selectedManufacturer}
          />
        </Grid>
        <Grid item xs={8}>
          {selectedColor} {selectedManufacturer}
        </Grid>
      </Grid>
      <span>{query.get(QUERY_VALUES.sort)}</span>
      <span>{query.get(QUERY_VALUES.page)}</span>
    </Container>
  );
};

export default CarsPage;
