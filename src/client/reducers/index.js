import { combineReducers } from 'redux';
import carReducer from './cars';
import filterReducer from './filter';

const rootReducer = combineReducers({
  cars: carReducer,
  filter: filterReducer
});

export default rootReducer;
