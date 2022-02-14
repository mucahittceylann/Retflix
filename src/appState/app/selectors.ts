import {createSelector} from 'reselect';
import {RootState} from '../index';

export const isLoadingSelector = createSelector(
  (state: RootState) => state.app.isLoading,
  isLoading => isLoading,
);

export const isSignedInSelector = createSelector(
  (state: RootState) => state.app.isSignedIn,
  isSignedIn => isSignedIn,
);
