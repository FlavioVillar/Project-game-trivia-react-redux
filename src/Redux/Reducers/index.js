import { combineReducers } from 'redux';
import token from './login';
import triviaReducer from './trivia';

const rootReducer = combineReducers({
  token,
  triviaReducer,

});

export default rootReducer;
