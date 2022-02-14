import {createSelector} from 'reselect';
import {RootState} from '..';

export const popularMoviesSelector = createSelector(
  (state: RootState) => state.movies.popularMovies,
  popularMovies => popularMovies,
);

export const activeMovieSelector = createSelector(
  (state: any) => state.movies.activeMovie,
  activeMovie => activeMovie,
);

export const nowPlayingMoviesSelector = createSelector(
  (state: RootState) => state.movies.nowPlayingMovies,
  nowPlayingMovies => nowPlayingMovies,
);

export const upcomingMoviesSelector = createSelector(
  (state: RootState) => state.movies.upcomingMovies,
  upcomingMovies => upcomingMovies,
);

export const topRatedMoviesSelector = createSelector(
  (state: RootState) => state.movies.topRatedMovies,
  topRatedMovies => topRatedMovies,
);

export const similarMoviesSelector = createSelector(
  (state: RootState) => state.movies.similarMovies,
  similarMovies => similarMovies,
);
