import {SET_IS_LOADING} from './constants';

export const setIsLoadingAction = (value: boolean) => {
  return {type: SET_IS_LOADING, value};
};
