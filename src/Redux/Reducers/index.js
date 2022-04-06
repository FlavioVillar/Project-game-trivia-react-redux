import { combineReducers } from 'redux';
import token from './token';
import triviaReducer from './trivia';
import playerGravatar from './gravatar';

const rootReducer = combineReducers({
  token,
  triviaReducer,
  playerGravatar,

});

export default rootReducer;
