// saga.js
import { call, takeEvery, put, delay } from 'redux-saga/effects'
import Axios from 'axios'


export function* fetchLoginSaga() {
    try {
    yield delay(1000); // Delay for 1000 milliseconds
    // Dispatch the LOGIN_SUCCESS action
    yield put({ type: 'auth/LOGIN_SUCCESS' , payload:{ user: { name: 'arvind', phone: '8447175029'} , isLoggedIn: true}});
        // yield put({ type: 'LOGIN_FETCH' })
        console.log('Fetching function called with');
  } catch (e) {
    yield put({ type: 'auth/LOGIN_FAILED' })
  }
}

export const authSaga =  function* authSaga() {
  yield takeEvery('auth/LOGIN_FETCH', fetchLoginSaga)
}