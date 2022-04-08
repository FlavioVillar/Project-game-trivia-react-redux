import { combineReducers } from 'redux';
import token from './token';
import player from './player';
import playerGravatar from './gravatar';

const rootReducer = combineReducers({
  token,
  player,
  playerGravatar,
});

export default rootReducer;
