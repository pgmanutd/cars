import appendBasePath from 'utils/appendBasePath';

import useSetURLQuery from 'hooks/useSetURLQuery';

import { DEFAULT_PAGE_NUMBER } from './paginationConstants';

const usePagination = ({
  currentPage,
  totalPage,
  basePath,
  queryKey,
}: {
  currentPage: number;
  totalPage: number;
  basePath: string;
  queryKey: string;
}) => {
  const firstLink = useSetURLQuery({
    [queryKey]: DEFAULT_PAGE_NUMBER?.toString(),
  });
  const previousLink = useSetURLQuery({
    [queryKey]: (currentPage - 1)?.toString(),
  });
  const nextLink = useSetURLQuery({
    [queryKey]: (currentPage + 1)?.toString(),
  });
  const lastLink = useSetURLQuery({
    [queryKey]: totalPage?.toString(),
  });

  const first = {
    to: appendBasePath(basePath, firstLink),
    disabled: currentPage === DEFAULT_PAGE_NUMBER,
  };

  const previous = {
    to: appendBasePath(basePath, previousLink),
    disabled: currentPage === DEFAULT_PAGE_NUMBER,
  };

  const next = {
    to: appendBasePath(basePath, nextLink),
    disabled: currentPage === totalPage,
  };

  const last = {
    to: appendBasePath(basePath, lastLink),
    disabled: currentPage === totalPage,
  };

  return {
    first,
    previous,
    next,
    last,
  };
};

export default usePagination;
