import {GET_MOVIE_DETAILS, GET_POPULAR_MOVIES} from './constants';
import {put, takeLeading} from '@redux-saga/core/effects';
import api from '../../api';
import {setActiveMovieAction, setPopularMoviesAction} from './action';
import {AnyAction} from 'redux';
import {AxiosResponse} from 'axios';

/************************* GET POPULAR MOVIES *************************/
function* getPopularMoviesSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getPopularMovies();

    yield put(setPopularMoviesAction(resp.data.results));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetPopularMoviesSaga() {
  yield takeLeading(GET_POPULAR_MOVIES, getPopularMoviesSaga);
}

/************************* GET MOVIE DETAILS *************************/
function* getMovieDetails(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMovieDetails(action.id);

    yield put(setActiveMovieAction(resp.data));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMovieDetails() {
  yield takeLeading(GET_MOVIE_DETAILS, getMovieDetails);
}

/******************** EXPORT *********************/

export const movieSagas = [watchGetPopularMoviesSaga(), watchGetMovieDetails()];
