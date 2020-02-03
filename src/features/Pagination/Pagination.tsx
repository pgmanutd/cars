import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import { useTranslate } from 'features/Translate';

const defaultPageNumber = 1;

const getPaginationLinksAttrs = ({
  currentPage,
  totalPage,
  href,
}: {
  currentPage: number;
  totalPage: number;
  href: string;
}) => {
  const first = {
    to: `${href}${defaultPageNumber}`,
    disabled: currentPage === defaultPageNumber,
  };

  const previous = {
    to: `${href}${currentPage - 1}`,
    disabled: currentPage === defaultPageNumber,
  };

  const next = {
    to: `${href}${currentPage + 1}`,
    disabled: currentPage === totalPage,
  };

  const last = {
    to: `${href}${totalPage}`,
    disabled: currentPage === totalPage,
  };

  return {
    first,
    previous,
    next,
    last,
  };
};

export interface PaginationProps {
  currentPage?: number;
  totalPage?: number;
  href?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = defaultPageNumber,
  totalPage = defaultPageNumber,
  href = `/?${new URLSearchParams({ page: '' })}`,
  ...restProps
}) => {
  const { translate } = useTranslate();

  const { first, previous, next, last } = getPaginationLinksAttrs({
    currentPage,
    totalPage,
    href,
  });

  return (
    <Box data-testid="Pagination" {...restProps} component="section">
      <Button component={RouterLink} color="primary" {...first}>
        {translate('features.Pagination.firstLinkText')}
      </Button>
      <Button component={RouterLink} color="primary" {...previous}>
        {translate('features.Pagination.previousLinkText')}
      </Button>
      <Typography variant="body2" display="inline" color="textPrimary">
        {translate('features.Pagination.description', {
          CURRENT_PAGE: currentPage.toString(),
          TOTAL_PAGE: totalPage.toString(),
        })}
      </Typography>
      <Button component={RouterLink} color="primary" {...next}>
        {translate('features.Pagination.nextLinkText')}
      </Button>
      <Button component={RouterLink} color="primary" {...last}>
        {translate('features.Pagination.lastLinkText')}
      </Button>
    </Box>
  );
};

export default memo(Pagination);
