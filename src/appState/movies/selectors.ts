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
