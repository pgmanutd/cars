import React from 'react';
import { wait } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils';

import App from '../App';

jest.mock('features/Translate/translations/en.json', () => ({}));

describe('<App />', () => {
  const setup = () => {
    const { renderResult } = renderWithProviders(<App />);

    return {
      renderResult,
    };
  };

  it('should render <CarsPage /> initially', async () => {
    const { renderResult } = setup();

    await wait(() =>
      expect(renderResult.getByTestId('CarsPage')).toBeInTheDocument(),
    );
  });
});
