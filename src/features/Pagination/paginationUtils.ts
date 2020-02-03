import { DEFAULT_PAGE_NUMBER } from './paginationConstants';

export const getPaginationLinksAttrs = ({
  currentPage,
  totalPage,
  href,
}: {
  currentPage: number;
  totalPage: number;
  href: string;
}) => {
  const first = {
    to: `${href}${DEFAULT_PAGE_NUMBER}`,
    disabled: currentPage === DEFAULT_PAGE_NUMBER,
  };

  const previous = {
    to: `${href}${currentPage - 1}`,
    disabled: currentPage === DEFAULT_PAGE_NUMBER,
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
