import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './useFetchActionTypes';

export interface FetchState {
  data: null;
  isLoading: boolean;
  error: Error | null;
}

interface FetchPendingAction {
  type: typeof FETCH_PENDING;
}
interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  data: FetchState['data'];
}

interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  error: FetchState['error'];
}

export type FetchActionTypes =
  | FetchPendingAction
  | FetchSuccessAction
  | FetchErrorAction;
