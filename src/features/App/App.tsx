import React, { memo, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import routePaths from 'shared/settings/routePaths';

const Cars = lazy(() => import(/* webpackChunkName: "Cars" */ 'pages/Cars'));
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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </main>
  </div>
);

export default memo(App);
