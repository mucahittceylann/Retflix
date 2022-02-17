import {
  GET_MOVIE_DETAILS,
  GET_MOVIES_NOW_PLAYING,
  GET_MOVIES_RECOMMENDATIONS,
  GET_MOVIES_SIMILAR,
  GET_MOVIES_TOP_RATED,
  GET_MOVIES_UPCOMING,
  GET_POPULAR_MOVIES,
  SET_ACTIVE_MOVIE,
  SET_MOVIES_NOW_PLAYING,
  SET_MOVIES_RECOMMENDATIONS,
  SET_MOVIES_SIMILAR,
  SET_MOVIES_TOP_RATED,
  SET_MOVIES_UPCOMING,
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

export const getMoviesUpcomingAction = (
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIES_UPCOMING,
    onSuccess,
    onFailure,
  };
};

export const setMoviesUpcomingAction = (movies: Array<object>) => {
  return {
    type: SET_MOVIES_UPCOMING,
    movies,
  };
};

export const getMoviesTopRatedAction = (
  onSucces?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIES_TOP_RATED,
    onSucces,
    onFailure,
  };
};

export const setMoviesTopRatedAction = (movies: Array<object>) => {
  return {
    type: SET_MOVIES_TOP_RATED,
    movies,
  };
};

export const getMoviesSimilarAction = (
  id: number,
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIES_SIMILAR,
    id,
    onSuccess,
    onFailure,
  };
};

export const setMoviesSimilarAction = (movies: Array<object>) => {
  return {
    type: SET_MOVIES_SIMILAR,
    movies,
  };
};

export const getMoviesRecommendationsAction = (
  id: number,
  onSucces?: () => void,
  onFailure?: () => void,
) => {
  return {
    type: GET_MOVIES_RECOMMENDATIONS,
    id,
    onSucces,
    onFailure,
  };
};

export const setMoviesRecommendationsAction = (movies: Array<object>) => {
  return {
    type: SET_MOVIES_RECOMMENDATIONS,
    movies,
  };
};
