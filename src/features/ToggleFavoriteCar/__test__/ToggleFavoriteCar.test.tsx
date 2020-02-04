import React from 'react';
import userEvent from '@testing-library/user-event';

import { renderWithTranslate } from 'utils/testUtils';

import ToggleFavoriteCar from '../ToggleFavoriteCar';

describe('<ToggleFavoriteCar />', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const setup = () => {
    const car = {
      stockNumber: 78924,
      manufacturerName: 'Fiat',
      modelName: 'Sedici',
      color: 'white',
      mileage: { number: 141474, unit: 'km' },
      fuelType: 'Diesel',
      pictureUrl: 'https://dummyimage.com/300/09f/fff.png',
    };
    const { renderResult } = renderWithTranslate(
      <ToggleFavoriteCar car={car} />,
    );

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should add car to local storage and show "Remove" button', () => {
    const { renderResult } = setup();

    userEvent.click(renderResult.getByText('Save'));

    expect(renderResult.getByText('Remove')).toBeInTheDocument();
  });

  it('should remove car from local storage and show "Save" button', () => {
    const { renderResult } = setup();

    userEvent.click(renderResult.getByText('Save'));
    userEvent.click(renderResult.getByText('Remove'));

    expect(renderResult.getByText('Save')).toBeInTheDocument();
  });
});
