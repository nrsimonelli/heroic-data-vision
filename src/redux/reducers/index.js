import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import eggOneReducer from './eggOneReducer';
import eggTwoReducer from './eggTwoReducer';
import graphTypeReducer from './graphTypeReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  heroReducer,
  eggOneReducer,
  eggTwoReducer,
  graphTypeReducer,
  searchReducer,
});

export default rootReducer;
