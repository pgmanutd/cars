import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import { useTranslate } from 'features/Translate';

import { DEFAULT_PAGE_NUMBER } from './paginationConstants';
import usePagination from './usePagination';
import { useStyles } from './paginationStyles';

export interface PaginationProps {
  currentPage?: number;
  totalPage?: number;
  basePath?: string;
  queryKey?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = DEFAULT_PAGE_NUMBER,
  totalPage = DEFAULT_PAGE_NUMBER,
  basePath = '/',
  queryKey = 'page',
  ...restProps
}) => {
  const classes = useStyles();
  const { translate } = useTranslate();

  const { first, previous, next, last } = usePagination({
    currentPage,
    totalPage,
    basePath,
    queryKey,
  });

  return (
    <Box
      data-testid="Pagination"
      {...restProps}
      component="section"
      className={classes.root}
    >
      <Button
        component={RouterLink}
        color="primary"
        className={classes.text}
        {...first}
      >
        {translate('features.Pagination.firstLinkText')}
      </Button>
      <Button
        component={RouterLink}
        color="primary"
        className={classes.text}
        {...previous}
      >
        {translate('features.Pagination.previousLinkText')}
      </Button>
      <Typography
        variant="body2"
        display="inline"
        color="textPrimary"
        className={classes.text}
      >
        {translate('features.Pagination.description', {
          CURRENT_PAGE: currentPage?.toString(),
          TOTAL_PAGE: totalPage?.toString(),
        })}
      </Typography>
      <Button
        component={RouterLink}
        color="primary"
        className={classes.text}
        {...next}
      >
        {translate('features.Pagination.nextLinkText')}
      </Button>
      <Button
        component={RouterLink}
        color="primary"
        className={classes.text}
        {...last}
      >
        {translate('features.Pagination.lastLinkText')}
      </Button>
    </Box>
  );
};

export default memo(Pagination);
