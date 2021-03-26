import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchData() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api', config);

    yield put({ type: 'SET_DATA', payload: response.data });
  } catch (err) {
    console.log('api get request failed', err);
  }
}

function* superSaga() {
  yield takeLatest('FETCH_DATA', fetchData);
}

export default superSaga;
