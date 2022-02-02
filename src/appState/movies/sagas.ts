import {
  GET_MOVIE_DETAILS,
  GET_MOVIES_NOW_PLAYING,
  GET_POPULAR_MOVIES,
} from './constants';
import {put, takeLeading} from '@redux-saga/core/effects';
import api from '../../api';
import {
  setActiveMovieAction,
  setMoviesNowPlayingAction,
  setPopularMoviesAction,
} from './action';
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
function* getMovieDetailsSaga(action: AnyAction) {
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
  yield takeLeading(GET_MOVIE_DETAILS, getMovieDetailsSaga);
}

/************************* GET MOVIES NOW PLAYING *************************/
function* getMoviesNowPlayingSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMoviesNowPlaying();

    yield put(setMoviesNowPlayingAction(resp.data.results));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMoviesNowPlayingSaga() {
  yield takeLeading(GET_MOVIES_NOW_PLAYING, getMoviesNowPlayingSaga);
}

/******************** EXPORT *********************/

export const movieSagas = [
  watchGetPopularMoviesSaga(),
  watchGetMovieDetails(),
  watchGetMoviesNowPlayingSaga(),
];
