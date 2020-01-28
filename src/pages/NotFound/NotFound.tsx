import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';

import routePaths from 'constants/routePaths';

const NotFound: React.FC = () => (
  <section data-testid="NotFound">
    <Helmet>
      <title>404 - Not Found</title>
    </Helmet>
    <Typography variant="h4" gutterBottom>
      404 - Not Found
    </Typography>
    <Typography variant="body1" gutterBottom>
      Sorry, the page you are looking for does not exist.
    </Typography>
    <Typography variant="body1" gutterBottom>
      You can always go back to the <Link to={routePaths.cars}>homepage</Link>.
    </Typography>
  </section>
);

export default NotFound;
