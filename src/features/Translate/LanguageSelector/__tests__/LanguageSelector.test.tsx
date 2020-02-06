import React from 'react';
import userEvent from '@testing-library/user-event';

import { LOCAL_STORAGE_KEYS } from 'constants/appConstants';

import { renderWithTranslate } from 'utils/testUtils';

import LanguageSelector from '../LanguageSelector';

describe('<LanguageSelector />', () => {
  const setup = () => {
    const { renderResult } = renderWithTranslate(<LanguageSelector />);

    return {
      renderResult,
    };
  };

  it('should render the component and matches it against stored snapshot', () => {
    const { renderResult } = setup();

    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should add selected language to localstorage when "German" item in dropdown is clicked', () => {
    const { renderResult } = setup();

    userEvent.click(renderResult.getByText('English'));
    userEvent.click(renderResult.getByText('German'));

    expect(localStorage.getItem(LOCAL_STORAGE_KEYS.language)).toBe('"de"');
  });
});
