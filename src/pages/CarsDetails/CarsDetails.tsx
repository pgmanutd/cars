import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import useQuery from 'hooks/useQuery';

const CarsDetails: React.FC = () => {
  const { stockNumber } = useParams();
  const query = useQuery();

  console.log(
    stockNumber,
    query.get('filters.manufacturer'),
    query.get('filters.color'),
    query.get('sort'),
    query.get('page'),
  );

  return (
    <section data-testid="CarsDetails">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CarsDetails</title>
      </Helmet>
    </section>
  );
};

export default CarsDetails;
