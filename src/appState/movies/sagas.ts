import {
  GET_FAVORITES,
  GET_MOVIE_DETAILS,
  GET_MOVIES_NOW_PLAYING,
  GET_MOVIES_RECOMMENDATIONS,
  GET_MOVIES_SIMILAR,
  GET_MOVIES_TOP_RATED,
  GET_MOVIES_UPCOMING,
  GET_POPULAR_MOVIES,
} from './constants';
import {put, takeLeading} from '@redux-saga/core/effects';
import api from '../../api';
import {
  setActiveMovieAction,
  setMoviesNowPlayingAction,
  setMoviesRecommendationsAction,
  setMoviesSimilarAction,
  setMoviesTopRatedAction,
  setMoviesUpcomingAction,
  setPopularMoviesAction,
} from './action';
import {AnyAction} from 'redux';
import {AxiosResponse} from 'axios';
import {setIsLoadingAction} from '../app/actions';
import firestore from '@react-native-firebase/firestore';
import {Movie} from '../../shared/types/movie';

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

/************************* GET FAVORITE MOVIES *************************/
function* getFavoriteMovies(action: AnyAction) {
  try {
    const movies: Movie[] = [];
    const getFavorites = async () => {
      await firestore()
        .collection('movieList')
        .get()
        .then(res => {
          res.docs.forEach(item => {
            //@ts-ignore
            movies.push(item.data());
          });
        });
    };

    getFavorites().then(() => {
      action.onSuccess && action.onSuccess(movies);
    });
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetFavoriteMovies() {
  yield takeLeading(GET_FAVORITES, getFavoriteMovies);
}

/************************* GET MOVIE DETAILS *************************/
function* getMovieDetailsSaga(action: AnyAction) {
  try {
    yield put(setIsLoadingAction(true));
    const resp: AxiosResponse = yield api.getMovieDetails(action.id);

    yield put(setActiveMovieAction(resp.data));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  } finally {
    yield put(setIsLoadingAction(false));
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

/************************* GET MOVIES SIMILAR *************************/
function* getMoviesSimilarSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMoviesSimilar(action.id);

    yield put(setMoviesSimilarAction(resp.data.results));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMoviesSimilarSaga() {
  yield takeLeading(GET_MOVIES_SIMILAR, getMoviesSimilarSaga);
}

/************************* GET MOVIES RECOMMENDATIONS *************************/
function* getMoviesRecommendationsSaga(action: AnyAction) {
  try {
    const resp: AxiosResponse = yield api.getMoviesRecommendations(action.id);

    yield put(setMoviesRecommendationsAction(resp.data.results));

    action.onSucces && action.onSuccess();
  } catch (err) {
    console.log(err);
    action.onFailure && action.onFailure();
  }
}
function* watchGetMoviesRecommendationsSaga() {
  yield takeLeading(GET_MOVIES_RECOMMENDATIONS, getMoviesRecommendationsSaga);
}

/******************** EXPORT *********************/

export const movieSagas = [
  watchGetPopularMoviesSaga(),
  watchGetMovieDetails(),
  watchGetMoviesNowPlayingSaga(),
  watchGetMoviesUpcomingSaga(),
  watchGetMoviesTopRatedSaga(),
  watchGetMoviesSimilarSaga(),
  watchGetMoviesRecommendationsSaga(),
  watchGetFavoriteMovies(),
];
