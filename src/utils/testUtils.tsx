import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

import { TranslateProvider } from 'features/Translate';

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    routerConfig: {
      path = '/',
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] }),
    },
  }: {
    routerConfig: { path?: string; route?: string; history?: MemoryHistory };
  } = { routerConfig: {} },
) => ({
  renderResult: render(
    <TranslateProvider>
      <HelmetProvider>
        <Router history={history}>
          <Route
            path={path}
            render={routeProps => React.cloneElement(ui, { ...routeProps })}
          />
        </Router>
      </HelmetProvider>
    </TranslateProvider>,
  ),
  history,
});

export const renderWithTranslate = (ui: React.ReactElement) => ({
  renderResult: render(<TranslateProvider>{ui}</TranslateProvider>),
});
