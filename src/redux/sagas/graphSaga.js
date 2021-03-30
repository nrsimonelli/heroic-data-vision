import { put, takeLatest } from 'redux-saga/effects';

function* fetchRadar() {
  try {
    yield put({ type: 'SET_RADAR' });
  } catch (err) {
    console.log('err in graphSaga', err);
  }
}

function* fetchBar() {
  try {
    yield put({ type: 'SET_BAR' });
  } catch (err) {
    console.log('err in graphSaga', err);
  }
}

function* fetchLine() {
  try {
    yield put({ type: 'SET_LINE' });
  } catch (err) {
    console.log('err in graphSaga', err);
  }
}

function* graphSaga() {
  yield takeLatest('FETCH_BAR', fetchBar);
  yield takeLatest('FETCH_RADAR', fetchRadar);
  yield takeLatest('FETCH_LINE', fetchLine);
}

export default graphSaga;
