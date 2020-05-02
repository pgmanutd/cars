import React from 'react';
import { Route } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import ScrollToTop from '../ScrollToTop';

describe('<ScrollToTop />', () => {
  beforeEach(() => {
    spyOn(window, 'scrollTo');
  });

  const setup = () => {
    const initialRoute = routePaths.cars;

    const { renderResult, history } = renderWithProviders(
      <>
        <ScrollToTop />
        <Route path={routePaths.notFound}>
          <div data-testid="NotFound">Not Found</div>
        </Route>
        <Route path={initialRoute}>
          <div data-testid="NotFound">Page</div>
        </Route>
      </>,
      {
        routerConfig: {
          route: initialRoute,
        },
      },
    );

    return {
      renderResult,
      history,
    };
  };

  it('calls the scrollTo method on window when the location path is modified', async () => {
    const { history } = setup();

    history.push(routePaths.notFound);

    await waitFor(() => expect(window.scrollTo).toHaveBeenCalledTimes(2));
  });
});
