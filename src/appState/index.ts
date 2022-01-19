import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {movieReducer} from './movies/reducer';
import {movieSagas} from '../appState/movies/sagas';
import {all} from 'redux-saga/effects';

function* allSagas() {
  yield all([...movieSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducer = combineReducers({
  movies: movieReducer,
});

export const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(allSagas);
