import {createSelector} from 'reselect';

export const userSelector = createSelector(
  (state: any) => state.users.user,
  user => user,
);
