import React, { memo, useCallback } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import pickTargetValue from 'utils/pickTargetValue';

import { Language } from '../types';
import useTranslate from '../useTranslate';

import { useStyles } from './languageSelectorStyles';

const LanguageSelector: React.FC = props => {
  const classes = useStyles();
  const { translate, language, languages, setLanguage } = useTranslate();

  const handleLanguageChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setLanguage(pickTargetValue(event) as Language);
    },
    [setLanguage],
  );

  return (
    <FormControl
      data-testid="LanguageSelector"
      {...props}
      className={classes.formControl}
    >
      <InputLabel shrink id="LanguageSelectorLabel">
        {translate('features.LanguageSelector.languageLabel')}
      </InputLabel>
      <Select
        labelId="LanguageSelectorLabel"
        id="LanguageSelectorLabelSelect"
        value={language}
        onChange={handleLanguageChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        {languages.map(languageKey => (
          <MenuItem key={languageKey} value={languageKey}>
            <em>
              {translate<string>(
                `features.LanguageSelector.${languageKey}Language`,
              )}
            </em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(LanguageSelector);
