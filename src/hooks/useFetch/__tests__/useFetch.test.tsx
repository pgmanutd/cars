import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { FetchMock } from '@react-mock/fetch';

import useFetch from '../useFetch';

describe('#useQuery', () => {
  const setup = ({ hasError = false } = {}) => {
    const url = '/some-url';
    const successResponse = { key: 'response' };
    const errorResponse = new Error('Some error');
    const Wrapper: React.FC = ({ children }) => (
      <FetchMock
        mocks={[
          {
            matcher: url,
            method: 'GET',
            response: hasError ? { throws: errorResponse } : successResponse,
          },
        ]}
      >
        {children}
      </FetchMock>
    );

    const { result, waitForNextUpdate } = renderHook(
      () => useFetch({ initialUrl: url }),
      {
        wrapper: Wrapper,
      },
    );

    return {
      result,
      waitForNextUpdate,
      successResponse,
      errorResponse,
    };
  };

  it('should use fetch and gets the success response', async () => {
    const { result, waitForNextUpdate, successResponse } = setup();

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      data: successResponse,
      error: null,
      isLoading: false,
    });
  });

  it('should use fetch and gets the failed response', async () => {
    const { result, waitForNextUpdate, errorResponse } = setup({
      hasError: true,
    });

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      data: null,
      error: errorResponse,
      isLoading: false,
    });
  });
});
