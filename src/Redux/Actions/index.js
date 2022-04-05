export const USER_LOGIN = 'USER_LOGIN';

export const actionLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const thunkLoginAPI = () => async (dispatch) => {
  const response = 'https://opentdb.com/api_token.php?command=request';
  const token = await fetch(response);
  const data = await token.json();
  dispatch(actionLogin(data.token));
};

// const fetchgravatarAPI = async () => {
//   const response = 'https://opentdb.com/api_token.php?command=request';
//   const token = await fetch(response);
//   const data = await token.json();
//   return data.token;
// };
