import {createSelector} from 'reselect';

export const isLoadingSelector = createSelector(
  state => state.app.isLoading,
  isLoading => isLoading,
);
