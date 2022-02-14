import {SIGN_IN, SIGN_OUT, SIGN_UP} from './constants';
import {delay, put, takeLeading} from '@redux-saga/core/effects';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AnyAction} from 'redux';
import {Alert} from 'react-native';
import {setIsLoadingAction} from '../app/actions';

/************************* SIGN IN *************************/
function* signInSaga(action: any) {
  try {
    yield put(setIsLoadingAction(true));
    yield delay(1000);
    auth()
      .signInWithEmailAndPassword(action.email, action.password)
      .then((authResponse: FirebaseAuthTypes.UserCredential) => {
        action.onSuccess(authResponse.user);
      })
      .catch(error => {
        action.onFailure(error);
      });
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setIsLoadingAction(false));
  }
}
function* watchSignInSaga() {
  yield takeLeading(SIGN_IN, signInSaga);
}

/************************* SIGN UP *************************/
function* signUpSaga(action: any) {
  try {
    yield put(setIsLoadingAction(true));
    yield delay(1000);
    auth()
      .createUserWithEmailAndPassword(action.email, action.password)
      .then((authResponse: FirebaseAuthTypes.UserCredential) => {
        action.onSuccess(authResponse.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email Already In Use');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid Email');
        }
        action.onFailure(error);
      });
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setIsLoadingAction(false));
  }
}
function* watchSignUpSaga() {
  yield takeLeading(SIGN_UP, signUpSaga);
}

/************************* SIGN OUT *************************/
function* signOutSaga(action: AnyAction) {
  try {
    auth().signOut();
    action.onSuccess && action.onSuccess();
  } catch (err) {}
}
function* watchSignOutSaga() {
  yield takeLeading(SIGN_OUT, signOutSaga);
}

/******************** EXPORT *********************/

export const userSagas = [
  watchSignInSaga(),
  watchSignUpSaga(),
  watchSignOutSaga(),
];
