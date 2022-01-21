import {createSelector} from 'reselect';

export const userSelector = createSelector(
  state => state.users.user,
  user => user,
);
