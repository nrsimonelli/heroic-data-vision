import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHero() {
  try {
    const response = yield axios.get('/api');
    yield put({ type: 'SET_HERO', payload: response.data });
  } catch (err) {
    console.log('api get request failed', err);
  }
}

function* heroSaga() {
  yield takeLatest('FETCH_HERO', fetchHero);
}

export default heroSaga;
