import {createSelector} from 'reselect';

export const moviesSelector = createSelector(
  state => state.movies,
  movies => movies,
);
