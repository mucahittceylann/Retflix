import {
  GET_MOVIE_DETAILS,
  GET_POPULAR_MOVIES,
  SET_ACTIVE_MOVIE,
  SET_POPULAR_MOVIES,
  GET_MOVIES_NOW_PLAYING,
  SET_MOVIES_NOW_PLAYING,
} from './constants';

export const getPopularMoviesAction = (
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_POPULAR_MOVIES,
    onSuccess,
    onFailure,
  };
};

export const setPopularMoviesAction = (movies: Array<object>) => {
  return {
    type: SET_POPULAR_MOVIES,
    movies,
  };
};

export const getMovieDetailsAction = (
  id: number,
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIE_DETAILS,
    id,
    onSuccess,
    onFailure,
  };
};

export const setActiveMovieAction = (movie: object) => {
  return {
    type: SET_ACTIVE_MOVIE,
    movie,
  };
};

export const getMoviesNowPlayingAction = (
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIES_NOW_PLAYING,
    onSuccess,
    onFailure,
  };
};

export const setMoviesNowPlayingAction = (movies: Array<object>) => {
  return {
    type: SET_MOVIES_NOW_PLAYING,
    movies,
  };
};
