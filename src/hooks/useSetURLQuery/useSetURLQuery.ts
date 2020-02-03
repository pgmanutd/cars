import useQuery from 'hooks/useQuery';

const useSetURLQuery = (
  newQuery: { [key: string]: string },
  { replaceExistingQuery = false } = {},
) => {
  const query = useQuery();
  const params = new URLSearchParams(replaceExistingQuery ? undefined : query);

  Object.keys(newQuery).forEach(newQueryKey => {
    params.set(newQueryKey, newQuery[newQueryKey]);
  });

  return params?.toString();
};

export default useSetURLQuery;
