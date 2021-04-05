import { put, takeLatest } from 'redux-saga/effects';

function* searchOn() {
  try {
    yield put({ type: 'SET_SEARCH' });
  } catch (err) {
    console.log('err in search saga', err);
  }
}

function* searchOff() {
  try {
    yield put({ type: 'CLEAR_SEARCH' });
  } catch (err) {
    console.log('err in search saga', err);
  }
}

function* searchSaga() {
  yield takeLatest('SET_SEARCH', searchOn);
  yield takeLatest('CLEAR_SEARCH', searchOff);
}

export default searchSaga;
