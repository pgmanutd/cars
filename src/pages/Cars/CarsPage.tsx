import React from 'react';
import { Helmet } from 'react-helmet-async';

import useQuery from 'hooks/useQuery';

const CarsPage: React.FC = () => {
  const query = useQuery();

  return (
    <section data-testid="CarsPage">
      <Helmet>
        <title>Cars</title>
      </Helmet>
      <span>{query.get('sort')}</span>
      <span>{query.get('page')}</span>
      <span>{query.get('filters.manufacturer')}</span>
      <span>{query.get('filters.color')}</span>
    </section>
  );
};

export default CarsPage;
