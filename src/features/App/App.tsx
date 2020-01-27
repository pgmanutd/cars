import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import routePaths from 'constants/routePaths';

const Cars = lazy(() => import(/* webpackChunkName: "Cars" */ 'pages/Cars'));
const CarsDetails = lazy(() =>
  import(/* webpackChunkName: "CarsDetails" */ 'pages/CarsDetails'),
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ 'pages/NotFound'),
);

const App: React.FC = props => (
  <div data-testid="App" {...props}>
    <main>
      <Suspense fallback={<LinearProgress />}>
        <Router>
          <Switch>
            <Route path={routePaths.cars} exact component={Cars} />
            <Route path={routePaths.carDetails} exact component={CarsDetails} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </main>
  </div>
);

export default App;
