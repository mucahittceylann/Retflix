import {SET_USER, SIGN_IN, SIGN_OUT, SIGN_UP} from './constants';

export function signUpAction(
  email: string,
  password: string,
  onSuccess?: any,
  onFailure?: any,
) {
  return {type: SIGN_UP, email, password, onSuccess, onFailure};
}

export function signInAction(
  email: string,
  password: string,
  onSuccess?: any,
  onFailure?: any,
) {
  return {
    type: SIGN_IN,
    email,
    password,
    onSuccess,
    onFailure,
  };
}

export function setUserAction(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function signOutAction(onSuccess?: () => void, onFailure?: () => void) {
  return {type: SIGN_OUT, onSuccess, onFailure};
}
