import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { HelmetProvider } from 'react-helmet-async';

import routePaths from 'constants/routePaths';

import ScrollToTop from 'features/ScrollToTop';

import Cars from 'pages/Cars';
import CarDetails from 'pages/CarDetails';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';

import { useStyles } from './mainLayoutStyles';

const MainLayout: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Box
      data-testid="MainLayout"
      {...props}
      component="main"
      className={classes.root}
    >
      <HelmetProvider>
        <Suspense fallback={<LinearProgress />}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path={routePaths.cars} exact component={Cars} />
              <Route
                path={routePaths.carDetails.path}
                exact
                component={CarDetails}
              />
              <Route path={routePaths.favorites} exact component={Favorites} />
              <Route path={routePaths.notFound} component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
      </HelmetProvider>
    </Box>
  );
};

export default MainLayout;
