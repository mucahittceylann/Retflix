import {createSelector} from 'reselect';

export const popularMoviesSelector = createSelector(
  state => state.movies.popularMovies,
  popularMovies => popularMovies,
);

export const activeMovieSelector = createSelector(
  state => state.movies.activeMovie,
  activeMovie => activeMovie,
);

export const nowPlayingMoviesSelector = createSelector(
  state => state.movies.nowPlayingMovies,
  nowPlayingMovies => nowPlayingMovies,
);

export const upcomingMoviesSelector = createSelector(
  state => state.movies.upcomingMovies,
  upcomingMovies => upcomingMovies,
);

export const topRatedMoviesSelector = createSelector(
  state => state.movies.topRatedMovies,
  topRatedMovies => topRatedMovies,
);
