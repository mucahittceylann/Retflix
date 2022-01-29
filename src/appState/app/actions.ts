import {SET_IS_LOADING, SET_IS_SIGNED_IN} from './constants';

export const setIsSignedInAction = (value: boolean) => {
  return {type: SET_IS_SIGNED_IN, value};
};

export const setIsLoadingAction = (value: boolean) => {
  return {type: SET_IS_LOADING, value};
};
