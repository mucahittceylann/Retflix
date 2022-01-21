import {initialState, SET_USER} from '../users/constants';

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER:
      console.log('reducer user ' + JSON.stringify(action.user));
      state.user = action.user;
      return {...state};
    default:
      return state;
  }
}
