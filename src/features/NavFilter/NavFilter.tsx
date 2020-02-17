import React, { memo, useState, useCallback } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import _compose from 'lodash/fp/compose';

import { QUERY_KEYS } from 'constants/appConstants';
import routePaths from 'constants/routePaths';

import appendBasePath from 'utils/appendBasePath';
import pickTargetValue from 'utils/pickTargetValue';

import useSetURLQuery from 'hooks/useSetURLQuery';

import { useTranslate } from 'features/Translate';

import { ColorQuery, ManufacturerQuery } from './types';
import NavFilterLoader from './NavFilterLoader';
import useNavFilterResponses from './useNavFilterResponses';
import { useStyles } from './navFilterStyles';

export interface NavFilterProps {
  color: ColorQuery;
  manufacturer: ManufacturerQuery;
  basePath?: string;
}

const NavFilter: React.FC<NavFilterProps> = ({
  color,
  manufacturer,
  basePath = routePaths.cars,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();

  const [currentColor, setCurrentColor] = useState(color);
  const [currentManufacturer, setCurrentManufacturer] = useState(manufacturer);

  // NOTE: Using useCallback to avoid unnecessary rerenders of Select component
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const handleCurrentColorChange = useCallback(
    _compose(setCurrentColor, pickTargetValue),
    [],
  );

  // NOTE: Using useCallback to avoid unnecessary rerenders of Select component
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const handleCurrentManufacturerChange = useCallback(
    _compose(setCurrentManufacturer, pickTargetValue),
    [],
  );

  const {
    areColorsResponseLoading,
    colorsResponseValue,
    areManufacturersResponseLoading,
    manufacturersResponseValue,
    areNavFiltersResponseLoading,
  } = useNavFilterResponses();

  const filterButtonParams = useSetURLQuery(
    {
      [QUERY_KEYS.colorFilter]: currentColor,
      [QUERY_KEYS.manufacturerFilter]: currentManufacturer,
    },
    { replaceExistingQuery: true },
  );

  if (areNavFiltersResponseLoading) {
    return (
      <NavFilterLoader
        areColorsResponseLoading={areColorsResponseLoading}
        areManufacturersResponseLoading={areManufacturersResponseLoading}
        areNavFiltersResponseLoading={areNavFiltersResponseLoading}
      />
    );
  }

  return (
    <Box
      data-testid="NavFilter"
      {...restProps}
      component="aside"
      className={classes.root}
    >
      <FormControl data-testid="NavFilterColor" className={classes.formControl}>
        <InputLabel shrink id="NavFilterColorLabel">
          {translate('features.NavFilter.colorLabel')}
        </InputLabel>
        <Select
          labelId="NavFilterColorLabel"
          id="NavFilterColorLabelSelect"
          value={currentColor}
          onChange={handleCurrentColorChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>{translate('features.NavFilter.defaultColorText')}</em>
          </MenuItem>
          {colorsResponseValue.map(colorValue => (
            <MenuItem key={colorValue} value={colorValue}>
              {colorValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        data-testid="NavFilterColorManufacturer"
        className={classes.formControl}
      >
        <InputLabel shrink id="NavFilterManufacturerLabel">
          {translate('features.NavFilter.manufacturerLabel')}
        </InputLabel>
        <Select
          labelId="NavFilterManufacturerLabel"
          id="NavFilterManufacturerLabelSelect"
          value={currentManufacturer}
          onChange={handleCurrentManufacturerChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>{translate('features.NavFilter.defaultManufacturerText')}</em>
          </MenuItem>
          {manufacturersResponseValue.map(({ name: manufacturerValue }) => (
            <MenuItem key={manufacturerValue} value={manufacturerValue}>
              {manufacturerValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className={classes.filterButtonContainer}>
        <Button
          data-testid="NavFilterButton"
          component={RouterLink}
          variant="contained"
          color="primary"
          size="large"
          to={appendBasePath(basePath, filterButtonParams)}
        >
          {translate('features.NavFilter.filterButtonText')}
        </Button>
      </Box>
    </Box>
  );
};

// NOTE: Using memo to avoid unnecessary rerenders of this component.
// Only used "memo" for components which actually accepts any props and used
// it for rendering
// https://kentcdodds.com/blog/usememo-and-usecallback
export default memo(NavFilter);
