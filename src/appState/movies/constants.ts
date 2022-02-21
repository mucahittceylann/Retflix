import {Movie} from '../../shared/types/movie';

export const GET_POPULAR_MOVIES = '@MOVIE_GET_POPULAR_MOVIES';
export const SET_POPULAR_MOVIES = '@MOVIE_SET_POPULAR_MOVIES';
export const GET_MOVIE_DETAILS = '@MOVIE_GET_MOVIE_DETAILS';
export const SET_ACTIVE_MOVIE = '@MOVIE_SET_ACTIVE_MOVIE';
export const GET_MOVIES_NOW_PLAYING = '@MOVIE_MOVIES_NOW_PLAYING';
export const SET_MOVIES_NOW_PLAYING = '@MOVIE_SET_MOVIES_NOW_PLAYING';
export const GET_MOVIES_UPCOMING = '@MOVIE_GET_MOVIES_UPCOMING';
export const SET_MOVIES_UPCOMING = '@MOVIE_SET_MOVIES_UPCOMING';
export const GET_MOVIES_TOP_RATED = '@MOVIE_GET_MOVIES_TOP_RATED';
export const SET_MOVIES_TOP_RATED = '@MOVIE_SET_MOVIES_TOP_RATED';
export const GET_MOVIES_SIMILAR = '@MOVIE_GET_MOVIES_SIMILAR';
export const SET_MOVIES_SIMILAR = '@MOVIE_SET_MOVIES_SIMILAR';
export const GET_MOVIES_RECOMMENDATIONS = '@MOVIE_GET_MOVIES_RECOMMENDATIONS';
export const SET_MOVIES_RECOMMENDATIONS = '@MOVIE_SET_MOVIES_RECOMMENDATIONS';
export const SAVE_TO_FAVORITES = '@MOVIE_SAVE_TO_FAVORITES';
export const SAVE_TO_LIKED = '@MOVIE_SAVE_TO_LIKED';
export const SAVE_TO_LIKED_MOVIES = '@MOVIE_SAVE_TO_LIKED_MOVIES';
export const DELETE_FROM_FAVORITES = '@MOVIE_DELETE_FROM_FAVORITES';
export const DELETE_FROM_LIKED = '@MOVIE_DELETE_FROM_LIKED';
export const GET_FAVORITES = '@MOVIE_GET_FAVORITES';
export const SET_FAVORITES = '@MOVIE_SET_FAVORITES';
export const GET_LIKED = '@MOVIE_GET_LIKED';
export const SET_LIKED = '@MOVIE_SET_LIKED';

export const initialState: MovieState = {
  activeMovie: undefined,
  nowPlayingMovies: [],
  popularMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  similarMovies: [],
  recommendationsMovies: [],
  favorites: [],
  likedMovies: [],
};

export interface MovieState {
  activeMovie?: Movie;
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  similarMovies: Movie[];
  recommendationsMovies: Movie[];
  favorites: Movie[];
  likedMovies: Movie[];
}
