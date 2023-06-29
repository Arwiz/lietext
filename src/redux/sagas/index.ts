// saga.js
import { call, takeEvery, put, delay, all } from 'redux-saga/effects'
import Axios from 'axios'

import { authSaga } from './auth.saga';

export const saga = function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}