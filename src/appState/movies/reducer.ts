import {initialState, SET_ACTIVE_MOVIE, SET_POPULAR_MOVIES} from './constants';
import update from 'immutability-helper';

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      state.popularMovies = action.movies;
      return {...state};
    case SET_ACTIVE_MOVIE: {
      return update(state, {
        activeMovie: {$set: action.movie},
      });
    }
    default:
      return state;
  }
};
