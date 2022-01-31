import {
  GET_MOVIE_DETAILS,
  GET_POPULAR_MOVIES,
  SET_ACTIVE_MOVIE,
  SET_POPULAR_MOVIES,
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

export const setPopularMoviesAction = (movies: object) => {
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
