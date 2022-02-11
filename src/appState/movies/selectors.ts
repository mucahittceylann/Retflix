import {createSelector} from 'reselect';

export const popularMoviesSelector = createSelector(
  (state: any) => state.movies.popularMovies,
  popularMovies => popularMovies,
);

export const activeMovieSelector = createSelector(
  (state: any) => state.movies.activeMovie,
  activeMovie => activeMovie,
);

export const nowPlayingMoviesSelector = createSelector(
  (state: any) => state.movies.nowPlayingMovies,
  nowPlayingMovies => nowPlayingMovies,
);

export const upcomingMoviesSelector = createSelector(
  (state: any) => state.movies.upcomingMovies,
  upcomingMovies => upcomingMovies,
);

export const topRatedMoviesSelector = createSelector(
  (state: any) => state.movies.topRatedMovies,
  topRatedMovies => topRatedMovies,
);

export const similarMoviesSelector = createSelector(
  (state: any) => state.movies.similarMovies,
  similarMovies => similarMovies,
);
