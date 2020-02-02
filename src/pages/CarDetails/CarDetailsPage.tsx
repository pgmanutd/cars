import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { useTranslate } from 'features/Translate';

const CarDetailsPage: React.FC = () => {
  const { stockNumber } = useParams();
  const { translate } = useTranslate();

  return (
    <Box component="section" data-testid="CarDetailsPage">
      <Helmet>
        <title>{translate('pages.CarDetails.documentTitle')}</title>
      </Helmet>
      <span>{stockNumber}</span>
    </Box>
  );
};

export default CarDetailsPage;
