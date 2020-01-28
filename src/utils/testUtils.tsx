import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@testing-library/react';

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { path?: string; route?: string; history?: MemoryHistory } = {},
) => ({
  ...render(
    <Router history={history}>
      <Route
        path={path}
        render={routeProps => React.cloneElement(ui, { ...routeProps })}
      />
    </Router>,
  ),
  history,
});
