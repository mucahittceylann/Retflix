import {GET_POPULAR_MOVIES, SET_POPULAR_MOVIES, SIGN_UP} from './constants';

export const getPopularMoviesAction = () => {
  return {
    type: GET_POPULAR_MOVIES,
  };
};

export const setPopularMoviesAction = () => {
  return {
    type: SET_POPULAR_MOVIES,
  };
};

export function signUpAction(
  email: string,
  password: string,
  onSuccess?: any,
  onFailure?: any,
) {
  return {type: SIGN_UP, email, password, onSuccess, onFailure};
}