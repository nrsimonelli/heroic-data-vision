import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHero(params) {
  try {
    console.log('ACTION,', params);
    const response = yield axios.get('/api', params);
    yield put({ type: 'SET_HERO', payload: response.data });
  } catch (err) {
    console.log('api get request failed', err);
  }
}

function* fetchEggOne(params) {
  try {
    yield put({ type: 'SET_EGGONE', payload: params });
  } catch (err) {
    console.log('api get request EGGONE failed', err);
  }
}

function* fetchEggTwo(params) {
  try {
    yield put({ type: 'SET_EGGTWO', payload: params });
  } catch (err) {
    console.log('api get request EGGTWO failed', err);
  }
}

function* heroSaga() {
  yield takeLatest('FETCH_HERO', fetchHero);
  yield takeLatest('FETCH_EGGONE', fetchEggOne);
  yield takeLatest('FETCH_EGGTWO', fetchEggTwo);
}

export default heroSaga;
