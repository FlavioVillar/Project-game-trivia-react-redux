const INITIAL_STATE = {
  nome: '',
  email: '',
  imgGravatar: '',
};

const playerGravatar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_NICK_EMAIL':
    return {
      ...state,
      nome: action.nickname,
      email: action.email,
      imgGravatar: action.url,
    };

  default:
    return state;
  }
};

export default playerGravatar;
