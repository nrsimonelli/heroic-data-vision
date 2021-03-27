import { all } from 'redux-saga/effects';
import heroSaga from './heroSaga';

export default function* rootSaga() {
  yield all([heroSaga()]);
}
