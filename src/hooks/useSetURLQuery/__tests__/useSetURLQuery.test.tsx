import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import useSetURLQuery from '../useSetURLQuery';

describe('#useSetURLQuery', () => {
  const setup = ({ replaceExistingQuery = false } = {}) => {
    const Wrapper: React.FC = ({ children }) => (
      <Router
        history={createMemoryHistory({
          initialEntries: ['/?a=1'],
        })}
      >
        {children}
      </Router>
    );

    const { result } = renderHook(
      () => useSetURLQuery({ b: '2' }, { replaceExistingQuery }),
      {
        wrapper: Wrapper,
      },
    );

    return {
      result,
    };
  };

  it('should use setURLQuery and gets the new set value without replacing existing', () => {
    const { result } = setup();

    expect(result.current).toBe('a=1&b=2');
  });

  it('should use setURLQuery and gets the new set value with replacing existing', () => {
    const { result } = setup({ replaceExistingQuery: true });

    expect(result.current).toBe('b=2');
  });
});
