import {
  GET_MOVIE_DETAILS,
  GET_MOVIES_NOW_PLAYING,
  GET_POPULAR_MOVIES,
  GET_MOVIES_UPCOMING,
  GET_MOVIES_TOP_RATED,
} from './constants';
import {put, takeLeading} from '@redux-saga/core/effects';
import api from '../../api';
import {
  setActiveMovieAction,
  setMoviesNowPlayingAction,
  setMoviesTopRatedAction,
  setMoviesUpcomingAction,
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

/************************* GET MOVIES UPCOMING *************************/
function* getMoviesUpcomingSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMoviesUpcoming();

    yield put(setMoviesUpcomingAction(resp.data.results));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMoviesUpcomingSaga() {
  yield takeLeading(GET_MOVIES_UPCOMING, getMoviesUpcomingSaga);
}

/************************* GET MOVIES TOP RATED *************************/
function* getMoviesTopRatedSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMoviesTopRated();

    yield put(setMoviesTopRatedAction(resp.data.results));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMoviesTopRatedSaga() {
  yield takeLeading(GET_MOVIES_TOP_RATED, getMoviesTopRatedSaga);
}

/******************** EXPORT *********************/

export const movieSagas = [
  watchGetPopularMoviesSaga(),
  watchGetMovieDetails(),
  watchGetMoviesNowPlayingSaga(),
  watchGetMoviesUpcomingSaga(),
  watchGetMoviesTopRatedSaga(),
];
