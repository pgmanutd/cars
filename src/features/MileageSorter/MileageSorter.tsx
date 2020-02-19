import React, { useCallback } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';

import routePaths from 'constants/routePaths';
import { QUERY_KEYS } from 'constants/appConstants';

import appendBasePath from 'utils/appendBasePath';
import pickTargetValue from 'utils/pickTargetValue';

import useSetURLQuery from 'hooks/useSetURLQuery';

import { useTranslate } from 'features/Translate';

import { SortQuery } from './types';
import { useStyles } from './mileageSorterStyles';

export interface MileageSorterProps {
  sort: SortQuery;
  basePath?: string;
}

const MileageSorter: React.FC<MileageSorterProps> = ({
  sort,
  basePath = routePaths.cars,
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();
  const history = useHistory();

  const sortParams = useSetURLQuery({
    [QUERY_KEYS.sort]: sort,
  });

  // NOTE: Using useCallback to avoid unnecessary rerenders of Select component
  // https://kentcdodds.com/blog/usememo-and-usecallback
  const handleSortChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      const updatedSortParams = new URLSearchParams(sortParams);

      updatedSortParams.set(QUERY_KEYS.sort, pickTargetValue(event) as string);

      history.push(appendBasePath(basePath, updatedSortParams?.toString()));
    },
    [history, sortParams, basePath],
  );

  return (
    <FormControl
      data-testid="MileageSorter"
      {...restProps}
      className={classes.formControl}
    >
      <InputLabel shrink id="MileageSorterLabel">
        {translate('features.MileageSorter.sortLabel')}
      </InputLabel>
      <Select
        labelId="MileageSorterLabel"
        id="MileageSorterLabelSelect"
        value={sort}
        onChange={handleSortChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>{translate('features.MileageSorter.sortDefaultValue')}</em>
        </MenuItem>
        <MenuItem value="asc">
          <em>{translate('features.MileageSorter.sortMileageAsc')}</em>
        </MenuItem>
        <MenuItem value="des">
          <em>{translate('features.MileageSorter.sortMileageDesc')}</em>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default MileageSorter;
