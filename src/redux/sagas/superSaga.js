import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHero() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/hero', config);

    yield put({ type: 'SET_HERO', payload: response.data });
  } catch (err) {
    console.log('api get request failed', err);
  }
}

function* heroSaga() {
  yield takeLatest('FETCH_HERO', fetchHero);
}

export default heroSaga;
