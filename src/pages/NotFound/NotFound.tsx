import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import routePaths from 'constants/routePaths';

import { useTranslate } from 'features/Translate';

const NotFound: React.FC = () => {
  const { translate } = useTranslate();

  return (
    <Box component="section" data-testid="NotFound">
      <Helmet>
        <title>{translate('pages.NotFound.documentTitle')}</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        {translate('pages.NotFound.headerText')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {translate('pages.NotFound.bodyText')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {translate('pages.NotFound.redirect.text')}{' '}
        <Link href={routePaths.cars}>
          {translate('pages.NotFound.redirect.link')}
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default NotFound;
