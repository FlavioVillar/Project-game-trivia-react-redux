const INITIAL_STATE = {
  imgGravatar: 'https://www.gravatar.com/avatar/a975b85afa77aa23d9d4463c5c77c6b9',
};

const playerGravatar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_URL':
    return {
      ...state,
      imgGravatar: action.url,
    };

  default:
    return state;
  }
};

export default playerGravatar;
