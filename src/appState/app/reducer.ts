import {initialState, SET_IS_LOADING, SET_IS_SIGNED_IN} from './constants';
import update from 'immutability-helper';

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return update(state, {
        isLoading: {$set: action.value},
      });
    case SET_IS_SIGNED_IN:
      return update(state, {
        isSignedIn: {$set: action.value},
      });

    default:
      return state;
  }
};
