import React, { memo, useState, useCallback } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link as RouterLink } from 'react-router-dom';
import _compose from 'lodash/fp/compose';

import { useTranslate } from 'features/Translate';

import { ColorQuery, ManufacturerQuery } from './types';
import { getFilterButtonHref, pickTargetValue } from './navFilterUtils';
import useNavFilterResponses from './useNavFilterResponses';
import { useStyles } from './navFilterStyles';

export interface NavFilterProps {
  selectedColor: ColorQuery;
  selectedManufacturer: ManufacturerQuery;
}

const NavFilter: React.FC<NavFilterProps> = ({
  selectedColor,
  selectedManufacturer,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();

  const [color, setColor] = useState(selectedColor);
  const [manufacturer, setManufacturer] = useState(selectedManufacturer);

  const handleColorChange = useCallback(
    _compose(setColor, pickTargetValue),
    [],
  );

  const handleManufacturerChange = useCallback(
    _compose(setManufacturer, pickTargetValue),
    [],
  );

  const {
    areColorsResponseLoading,
    colorsResponseValue,
    areManufacturersResponseLoading,
    manufacturersResponseValue,
    areNavFiltersResponseLoading,
  } = useNavFilterResponses();

  return (
    <Box
      data-testid="NavFilter"
      {...restProps}
      component="section"
      className={classes.root}
    >
      {areColorsResponseLoading ? (
        <Skeleton data-testid="NavFilterColorSkeleton" height={48} />
      ) : (
        <FormControl
          data-testid="NavFilterColor"
          className={classes.formControl}
        >
          <InputLabel shrink id="NavFilterColorLabel">
            {translate('features.NavFilter.colorLabel')}
          </InputLabel>
          <Select
            labelId="NavFilterColorLabel"
            id="NavFilterColorLabelSelect"
            value={color}
            onChange={handleColorChange}
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
      )}
      {areManufacturersResponseLoading ? (
        <Skeleton data-testid="NavFilterManufacturerSkeleton" height={48} />
      ) : (
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
            value={manufacturer}
            onChange={handleManufacturerChange}
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
      )}
      <Box className={classes.filterButtonContainer}>
        {areNavFiltersResponseLoading ? (
          <Skeleton
            data-testid="NavFilterButtonSkeleton"
            height={70}
            width={92}
          />
        ) : (
          <Button
            data-testid="NavFilterButton"
            component={RouterLink}
            variant="contained"
            color="primary"
            size="large"
            to={`${getFilterButtonHref({
              selectedColor: color,
              selectedManufacturer: manufacturer,
            })}`}
          >
            {translate('features.NavFilter.filterButtonText')}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default memo(NavFilter);
