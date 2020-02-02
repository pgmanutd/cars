import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import routePaths from 'constants/routePaths';

import { useTranslate } from 'features/Translate';
import AppLogo from 'features/AppLogo';

import { useStyles } from './notFoundStyles';

const NotFound: React.FC = () => {
  const classes = useStyles();
  const { translate } = useTranslate();

  return (
    <Container
      data-testid="NotFound"
      component="section"
      className={classes.root}
    >
      <Helmet>
        <title>{translate('pages.NotFound.documentTitle')}</title>
      </Helmet>
      <Box className={classes.appLogoContainer}>
        <AppLogo />
      </Box>
      <Typography variant="h4" gutterBottom>
        {translate('pages.NotFound.headerText')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {translate('pages.NotFound.bodyText')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {translate('pages.NotFound.redirect.text')}{' '}
        <Link component={RouterLink} to={routePaths.cars} color="textSecondary">
          {translate('pages.NotFound.redirect.link')}
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default NotFound;
