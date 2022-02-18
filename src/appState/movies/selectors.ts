import {createSelector} from 'reselect';
import {RootState} from '..';
import {Movie} from '../../shared/types/movie';

export const popularMoviesSelector = createSelector(
  (state: RootState) => state.movies.popularMovies,
  popularMovies => popularMovies.slice(1),
);

export const activeMovieSelector = createSelector(
  (state: RootState) => state.movies.activeMovie,
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
  similarMovies => similarMovies.splice(0, 6),
);

export const recommendationsMoviesSelector = createSelector(
  (state: RootState) => state.movies.recommendationsMovies,
  recommendationsMovies => recommendationsMovies.splice(0, 6),
);

export const favoritesSelector = createSelector(
  (state: RootState) => state.movies.favorites,
  favorites => favorites,
);

export const mostPopularMovieSelector = createSelector(
  (state: RootState) => state.movies.popularMovies,
  (popularMovies: Movie[]) => {
    let mostPopularMovie = popularMovies[0];

    popularMovies.forEach((movie: Movie) => {
      if (movie.popularity > mostPopularMovie.popularity) {
        mostPopularMovie = movie;
      }
    });

    return mostPopularMovie;
  },
);
