import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {movieReducer} from './movies/reducer';
import {userReducer} from './users/reducer';
import {movieSagas} from './movies/sagas';
import {all} from 'redux-saga/effects';
import {userSagas} from './users/sagas';
import {appReducer} from './app/reducer';

function* allSagas() {
  yield all([...movieSagas, ...userSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducer = combineReducers({
  movies: movieReducer,
  users: userReducer,
  app: appReducer,
});

export const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(allSagas);
