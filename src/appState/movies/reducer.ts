import {initialState, SET_POPULAR_MOVIES} from './constants';

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      state.movies = action.movies;
      return {...state};

    default:
      return state;
  }
};
