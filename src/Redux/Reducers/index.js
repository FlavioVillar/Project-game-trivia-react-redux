import { combineReducers } from 'redux';
import token from './token';
import player from './score';
import playerGravatar from './gravatar';
import timer from './time';

const rootReducer = combineReducers({
  token,
  player,
  playerGravatar,
  timer,

});

export default rootReducer;
