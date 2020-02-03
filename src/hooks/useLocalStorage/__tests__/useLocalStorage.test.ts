import { renderHook, act } from '@testing-library/react-hooks';

import useLocalStorage from '../useLocalStorage';

describe('#useLocalStorage', () => {
  const setup = () => {
    const localStorageKey = 'localStorageKey';

    const { result } = renderHook(() => useLocalStorage(localStorageKey));

    return {
      result,
      localStorageKey,
    };
  };

  it('should return null when called initially', () => {
    const { result } = setup();

    expect(result.current[0]).toBe(null);
  });

  it('should return set value', () => {
    const value = 'value';
    const { result } = setup();

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toBe(value);
  });

  it('should remove set value', () => {
    const value = 'value';
    const { result } = setup();

    act(() => {
      result.current[1](value);
      result.current[2]();
    });

    expect(result.current[0]).toBe(null);
  });
});
