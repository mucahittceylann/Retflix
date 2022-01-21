import {GET_POPULAR_MOVIES} from './constants';
import {takeLeading} from '@redux-saga/core/effects';

/************************* GET POPULAR MOVIES *************************/
function* getPopularMoviesSaga() {
  try {
  } catch (err) {}
}
function* watchGetPopularMoviesSaga() {
  yield takeLeading(GET_POPULAR_MOVIES, getPopularMoviesSaga);
}

/******************** EXPORT *********************/

export const movieSagas = [watchGetPopularMoviesSaga()];
