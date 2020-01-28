import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import useQuery from 'hooks/useQuery';

const CarDetailsPage: React.FC = () => {
  const { stockNumber } = useParams();
  const query = useQuery();

  return (
    <section data-testid="CarDetailsPage">
      <Helmet>
        <title>CarDetailsPage</title>
      </Helmet>
      <span>{stockNumber}</span>
      <span>{query.get('sort')}</span>
      <span>{query.get('page')}</span>
      <span>{query.get('filters.manufacturer')}</span>
      <span>{query.get('filters.color')}</span>
    </section>
  );
};

export default CarDetailsPage;
