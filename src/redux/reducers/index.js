import { combineReducers } from 'redux';
import superReducer from './superReducer';

const rootReducer = combineReducers({
  superReducer,
});

export default rootReducer;
