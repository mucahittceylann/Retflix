import {createSelector} from 'reselect';
import {RootState} from '..';

export const userSelector = createSelector(
  (state: RootState) => state.users.user,
  user => user,
);
