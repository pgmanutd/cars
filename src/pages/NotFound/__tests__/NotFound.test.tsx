import React from 'react';
import { wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import routePaths from 'constants/routePaths';

import { renderWithProviders } from 'utils/testUtils';

import NotFound from '../NotFound';

describe('<NotFound />', () => {
  const setup = () => {
    const { renderResult, ...rest } = renderWithProviders(<NotFound />, {
      routerConfig: {
        path: routePaths.notFound,
      },
    });

    return {
      renderResult,
      ...rest,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should render document title "404 - Not Found"', async () => {
    setup();

    await wait(() => expect(document.title).toEqual('404 - Not Found'));
  });

  it('should set url to some invalid route', () => {
    const invalidRoute = '/invalid/route';
    const { history } = setup();

    history.push(invalidRoute);

    expect(history.location.pathname).toEqual(invalidRoute);
  });

  it('should redirect to cars page when "homepage" link is clicked', () => {
    const { renderResult, history } = setup();

    userEvent.click(renderResult.getByText('homepage'));

    expect(history.location.pathname).toEqual(routePaths.cars);
  });
});
