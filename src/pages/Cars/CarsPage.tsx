import React from 'react';
import { Helmet } from 'react-helmet-async';

import useQuery from 'hooks/useQuery';

import { useTranslate } from 'features/Translate';

const CarsPage: React.FC = () => {
  const query = useQuery();
  const { translate } = useTranslate();

  return (
    <section data-testid="CarsPage">
      <Helmet>
        <title>{translate('pages.Cars.documentTitle')}</title>
      </Helmet>
      <span>{query.get('sort')}</span>
      <span>{query.get('page')}</span>
      <span>{query.get('filters.manufacturer')}</span>
      <span>{query.get('filters.color')}</span>
    </section>
  );
};

export default CarsPage;
