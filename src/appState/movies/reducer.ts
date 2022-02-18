import {
  DELETE_FROM_FAVORITES,
  initialState,
  SAVE_TO_FAVORITES,
  SET_ACTIVE_MOVIE,
  SET_FAVORITES,
  SET_MOVIES_NOW_PLAYING,
  SET_MOVIES_RECOMMENDATIONS,
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
    case SAVE_TO_FAVORITES: {
      return update(state, {
        favorites: {$push: [action.movie]},
      });
    }
    case SET_MOVIES_RECOMMENDATIONS: {
      return update(state, {
        recommendationsMovies: {$set: action.movies},
      });
    }
    case SET_FAVORITES:
      return update(state, {
        favorites: {$set: action.movies},
      });

    case DELETE_FROM_FAVORITES:
      const foundIndex = state.favorites.findIndex(
        movie => movie.id === action.movie.id,
      );
      return update(state, {
        favorites: {$splice: [[foundIndex, 1]]},
      });
    default:
      return state;
  }
};
