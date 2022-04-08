const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SCORE_UPDATE':
    return {
      ...state,
      score: action.payload,
      assertions: state.assertions + 1,
    };

  case 'USER_NICK_EMAIL':
    return {
      ...state,
      nome: action.nickname,
      email: action.email,
    };

  default:
    return state;
  }
};

export default player;
