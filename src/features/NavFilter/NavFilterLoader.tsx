import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './navFilterStyles';

export interface NavFilterLoaderProps {
  areColorsResponseLoading: boolean;
  areManufacturersResponseLoading: boolean;
  areNavFiltersResponseLoading: boolean;
}

const NavFilterLoader: React.FC<NavFilterLoaderProps> = ({
  areColorsResponseLoading,
  areManufacturersResponseLoading,
  areNavFiltersResponseLoading,
}) => {
  const classes = useStyles();

  return (
    <Box
      data-testid="NavFilterLoader"
      component="aside"
      className={classes.root}
    >
      {areColorsResponseLoading && (
        <Skeleton data-testid="NavFilterColorSkeleton" height={48} />
      )}
      {areManufacturersResponseLoading && (
        <Skeleton data-testid="NavFilterManufacturerSkeleton" height={48} />
      )}
      <Box className={classes.filterButtonContainer}>
        {areNavFiltersResponseLoading && (
          <Skeleton
            data-testid="NavFilterButtonSkeleton"
            height={70}
            width={92}
          />
        )}
      </Box>
    </Box>
  );
};

export default NavFilterLoader;
