import apiPaths from 'constants/apiPaths';

import useFetch from 'hooks/useFetch';

import {
  ColorsResponse,
  ManufacturersResponse,
  Colors,
  Manufacturers,
} from './types';

const useNavFilterResponses = () => {
  const [colorsResponse] = useFetch<ColorsResponse>({
    initialUrl: apiPaths.colors(),
  });

  // NOTE: Not handling error case as of now. Showing skeleton instead in case of error.
  const areColorsResponseLoading =
    colorsResponse.isLoading || !colorsResponse.data || colorsResponse.error;
  const colorsResponseValue = colorsResponse.data?.colors ?? ([] as Colors);

  const [manufacturersResponse] = useFetch<ManufacturersResponse>({
    initialUrl: apiPaths.manufacturers(),
  });

  const areManufacturersResponseLoading =
    manufacturersResponse.isLoading ||
    !manufacturersResponse.data ||
    manufacturersResponse.error;
  const manufacturersResponseValue =
    manufacturersResponse.data?.manufacturers ?? ([] as Manufacturers);

  const areNavFiltersResponseLoading = !!(
    areColorsResponseLoading || areManufacturersResponseLoading
  );

  return {
    areColorsResponseLoading,
    colorsResponseValue,
    areManufacturersResponseLoading,
    manufacturersResponseValue,
    areNavFiltersResponseLoading,
  };
};

export default useNavFilterResponses;
