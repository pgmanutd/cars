import { renderHook } from '@testing-library/react-hooks';

import useFetch from '../useFetch';

describe('#useFetch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const setup = ({ url }: { url: string }) => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ initialUrl: url }),
    );

    return {
      result,
      waitForNextUpdate,
    };
  };

  it('should use fetch and gets the success response', async () => {
    const url = '/some-url';
    const successResponse = { key: 'response' };

    fetchMock
      .doMockOnceIf(url)
      .mockResponseOnce(JSON.stringify(successResponse));

    const { result, waitForNextUpdate } = setup({ url });

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      data: successResponse,
      error: null,
      isLoading: false,
    });
  });

  it('should use fetch and gets the failed response', async () => {
    const url = '/some-url';
    const errorResponse = new Error('Some error');

    fetchMock.doMockOnceIf(url).mockRejectOnce(errorResponse);

    const { result, waitForNextUpdate } = setup({
      url,
    });

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      data: null,
      error: errorResponse,
      isLoading: false,
    });
  });
});
