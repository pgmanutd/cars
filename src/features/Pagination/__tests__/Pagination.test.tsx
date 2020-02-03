import React from 'react';

import { renderWithProviders } from 'utils/testUtils';

import Pagination, { PaginationProps } from '../Pagination';

describe('<Pagination />', () => {
  const setup = ({ currentPage, totalPage }: PaginationProps) => {
    const { renderResult } = renderWithProviders(
      <Pagination currentPage={currentPage} totalPage={totalPage} />,
    );

    return {
      renderResult,
    };
  };

  test.each`
    currentPage | totalPage
    ${1}        | ${1}
    ${1}        | ${3}
    ${2}        | ${3}
    ${3}        | ${3}
  `(
    'should render the component and matches it against stored snapshot for currentPage: $currentPage, totalPage: $totalPage',
    ({ currentPage, totalPage }) => {
      const { renderResult } = setup({ currentPage, totalPage });

      expect(renderResult.asFragment()).toMatchSnapshot();
    },
  );
});
