import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

const Cars: React.FC = () => (
  <section data-testid="Cars">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cars</title>
    </Helmet>
  </section>
);

export default memo(Cars);
