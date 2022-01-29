import {createSelector} from 'reselect';

export const isLoadingSelector = createSelector(
  state => state.app.isLoading,
  isLoading => isLoading,
);

export const isSignedInSelector = createSelector(
  state => state.app.isSignedIn,
  isSignedIn => isSignedIn,
);
