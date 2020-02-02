import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { HelmetProvider } from 'react-helmet-async';

import routePaths from 'constants/routePaths';

import Cars from 'pages/Cars';
import CarDetails from 'pages/CarDetails';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';

import { TranslateProvider } from 'features/Translate';
import ErrorBoundary from 'features/ErrorBoundary';

const App: React.FC = () => (
  <Box data-testid="App">
    <TranslateProvider language="en">
      <ErrorBoundary>
        <main>
          <HelmetProvider>
            <Suspense fallback={<LinearProgress />}>
              <Router>
                <Switch>
                  <Route path={routePaths.cars} exact component={Cars} />
                  <Route
                    path={routePaths.carDetails}
                    exact
                    component={CarDetails}
                  />
                  <Route
                    path={routePaths.favorites}
                    exact
                    component={Favorites}
                  />
                  <Route path={routePaths.notFound} component={NotFound} />
                </Switch>
              </Router>
            </Suspense>
          </HelmetProvider>
        </main>
      </ErrorBoundary>
    </TranslateProvider>
  </Box>
);

export default App;
