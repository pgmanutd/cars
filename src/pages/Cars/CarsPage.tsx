import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { QUERY_KEYS, DEFAULT_QUERY_VALUES } from 'constants/appConstants';

import useQuery from 'hooks/useQuery';

import { useTranslate } from 'features/Translate';
import NavFilter from 'features/NavFilter';
import CarList from 'features/CarList';

import { useStyles } from './carsPageStyles';

const CarsPage: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const { translate } = useTranslate();

  const sort = query.get(QUERY_KEYS.sort) || DEFAULT_QUERY_VALUES.sort;
  const page = query.get(QUERY_KEYS.page) || DEFAULT_QUERY_VALUES.page;
  const color =
    query.get(QUERY_KEYS.colorFilter) || DEFAULT_QUERY_VALUES.colorFilter;
  const manufacturer =
    query.get(QUERY_KEYS.manufacturerFilter) ||
    DEFAULT_QUERY_VALUES.manufacturerFilter;

  return (
    <Container
      data-testid="CarsPage"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.Cars.documentTitle')}</title>
      </Helmet>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box className={classes.navFilterContainer}>
            <NavFilter color={color} manufacturer={manufacturer} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <CarList
            sort={sort}
            page={page}
            color={color}
            manufacturer={manufacturer}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsPage;
