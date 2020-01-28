import React from 'react';
import { Helmet } from 'react-helmet-async';

const CarsPage: React.FC = () => (
  <section data-testid="CarsPage">
    <Helmet>
      <title>Cars</title>
    </Helmet>
  </section>
);

export default CarsPage;
