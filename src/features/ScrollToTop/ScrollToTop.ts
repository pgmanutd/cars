import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useQuery from 'hooks/useQuery';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const query = useQuery();
  const stringifiedQuery = query?.toString();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, stringifiedQuery]);

  return null;
};

export default ScrollToTop;
