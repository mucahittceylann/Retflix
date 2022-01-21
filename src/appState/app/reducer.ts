import {initialState, SET_IS_LOADING} from './constants';
import update from 'immutability-helper';

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return update(state, {
        isLoading: {$set: action.value},
      });

    default:
      return state;
  }
};
