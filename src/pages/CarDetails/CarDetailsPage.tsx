import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const CarDetailsPage: React.FC = () => {
  const { stockNumber } = useParams();

  return (
    <section data-testid="CarDetailsPage">
      <Helmet>
        <title>Car Details</title>
      </Helmet>
      <span>{stockNumber}</span>
    </section>
  );
};

export default CarDetailsPage;
