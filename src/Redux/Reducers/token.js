const token = (state = '', action) => {
  switch (action.type) {
  case 'TOKEN_LOGIN':
    return action.payload;

  default:
    return state;
  }
};

export default token;
