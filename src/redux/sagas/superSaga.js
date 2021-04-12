import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllSuper() {
  try {
    const response = yield axios.get('/api/super');
    yield put({ type: 'SET_ALL', payload: response.data });
  } catch (err) {
    console.log('super get request failed', err);
  }
}

function* superSaga() {
  yield takeLatest('FETCH_ALL', fetchAllSuper);
}

export default superSaga;
