import { useState, useReducer, useEffect } from 'react';

import { FetchState, FetchActionTypes } from './types';
import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './useFetchActionTypes';

const initialState: FetchState = { data: null, isLoading: false, error: null };

const reducer = (state: FetchState, action: FetchActionTypes) => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        isLoading: true,
        data: initialState.data,
        error: initialState.error,
      };
    case FETCH_SUCCESS:
      return {
        isLoading: initialState.isLoading,
        data: action.data,
        error: initialState.error,
      };
    case FETCH_ERROR:
      return {
        data: initialState.data,
        isLoading: initialState.isLoading,
        error: action.error,
      };
    default:
      return state;
  }
};

const useFetch = ({ initialUrl }: { initialUrl: string }) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUrl = async ({ signal }: { signal: AbortSignal }) => {
      dispatch({ type: FETCH_PENDING });

      try {
        const response = await fetch(url, {
          signal,
        });
        const json = await response.json();

        dispatch({ type: FETCH_SUCCESS, data: json });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, error });
      }
    };

    const controller = new AbortController();

    fetchUrl({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [url]);

  return [state, setUrl];
};

export default useFetch;
