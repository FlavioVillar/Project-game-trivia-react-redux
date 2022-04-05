const token = (state = '', action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    console.log(action.payload);
    return action.payload;

  default:
    return state;
  }
};

export default token;
