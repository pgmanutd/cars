import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import useQuery from '../useQuery';

describe('#useQuery', () => {
  const setup = () => {
    const queryKey = 'sort';
    const queryValue = 'asc';
    const Wrapper: React.FC = ({ children }) => (
      <Router
        history={createMemoryHistory({
          initialEntries: [`/?${queryKey}=${queryValue}`],
        })}
      >
        {children}
      </Router>
    );

    const { result } = renderHook(() => useQuery(), { wrapper: Wrapper });

    return {
      result,
      queryKey,
      queryValue,
    };
  };

  it('should use query and gets its value', () => {
    const { result, queryKey, queryValue } = setup();

    expect(result.current.get(queryKey)).toBe(queryValue);
  });
});
