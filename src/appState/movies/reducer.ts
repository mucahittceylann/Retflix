import {
  initialState,
  SET_ACTIVE_MOVIE,
  SET_MOVIES_NOW_PLAYING,
  SET_MOVIES_SIMILAR,
  SET_MOVIES_TOP_RATED,
  SET_MOVIES_UPCOMING,
  SET_POPULAR_MOVIES,
} from './constants';
import update from 'immutability-helper';

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return update(state, {
        popularMovies: {$set: action.movies},
      });
    case SET_ACTIVE_MOVIE: {
      return update(state, {
        activeMovie: {$set: action.movie},
      });
    }
    case SET_MOVIES_NOW_PLAYING: {
      return update(state, {
        nowPlayingMovies: {$set: action.movies},
      });
    }
    case SET_MOVIES_UPCOMING: {
      return update(state, {
        upcomingMovies: {$set: action.movies},
      });
    }
    case SET_MOVIES_TOP_RATED: {
      return update(state, {
        topRatedMovies: {$set: action.movies},
      });
    }
    case SET_MOVIES_SIMILAR: {
      return update(state, {
        similarMovies: {$set: action.movies},
      });
    }
    default:
      return state;
  }
};
