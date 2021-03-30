import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import eggOneReducer from './eggOneReducer';
import eggTwoReducer from './eggTwoReducer';
import graphTypeReducer from './graphTypeReducer';

const rootReducer = combineReducers({
  heroReducer,
  eggOneReducer,
  eggTwoReducer,
  graphTypeReducer,
});

export default rootReducer;
