export const GET_POPULAR_MOVIES = '@MOVIE_GET_POPULAR_MOVIES';
export const SET_POPULAR_MOVIES = '@MOVIE_SET_POPULAR_MOVIES';
export const GET_MOVIE_DETAILS = '@MOVIE_GET_MOVIE_DETAILS';
export const SET_ACTIVE_MOVIE = '@MOVIE_SET_ACTIVE_MOVIE';
export const GET_MOVIES_NOW_PLAYING = '@MOVIE_MOVIES_NOW_PLAYING';
export const SET_MOVIES_NOW_PLAYING = '@MOVIE_SET_MOVIE_LATEST';

export const initialState = {
  activeMovie: {},
  nowPlayingMovies: [],
  popularMovies: [],
};
