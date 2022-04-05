import { combineReducers } from 'redux';
import loginReducer from './login';
import triviaReducer from './trivia';

const rootReducer = combineReducers({
  loginReducer,
  triviaReducer,

});

export default rootReducer;
