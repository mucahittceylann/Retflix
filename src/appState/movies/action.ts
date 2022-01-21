import {GET_POPULAR_MOVIES, SET_POPULAR_MOVIES} from './constants';

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
