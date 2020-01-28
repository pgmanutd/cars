import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { HelmetProvider } from 'react-helmet-async';

import routePaths from 'constants/routePaths';

import Cars from 'pages/Cars';
import CarDetails from 'pages/CarDetails';
import Favorites from 'pages/Favorites';

const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ 'pages/NotFound'),
);

const App: React.FC = props => (
  <div data-testid="App" {...props}>
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
              <Route path={routePaths.favorites} exact component={Favorites} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
      </HelmetProvider>
    </main>
  </div>
);

export default App;
