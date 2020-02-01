import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Typography from '@material-ui/core/Typography';

import routePaths from 'constants/routePaths';

import { useTranslate } from 'features/Translate';

const NotFound: React.FC = () => {
  const { translate } = useTranslate();

  return (
    <section data-testid="NotFound">
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
        <Link to={routePaths.cars}>
          {translate('pages.NotFound.redirect.link')}
        </Link>
        .
      </Typography>
    </section>
  );
};

export default NotFound;
