import { LOGIN, CANCEL_LOGiN } from './constants';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

// Individual exports for testing


function* handleDone() {
  yield put(goBack());
}

export function* doLoginSaga() {
  // Wait for the login action to happen, then intercept
  yield* takeLatest(LOGIN, handleDone);
}


export function* cancelSaga() {
  // Wait for the login action to happen, then intercept
  yield* takeLatest(CANCEL_LOGiN, handleDone);
}



// function* handleLogin() {
//   yield put(goBack());
// }

// export function* doLoginSaga() {
//   // Wait for the login action to happen, then intercept
//   yield* takeLatest(LOGIN, handleLogin);
// }



// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga,
];
