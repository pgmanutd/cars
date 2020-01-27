import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@testing-library/react';

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory } = {},
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
});
