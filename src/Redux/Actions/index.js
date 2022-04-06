// export const TOKEN_LOGIN = 'TOKEN_LOGIN';

export const actionTokenLogin = (payload) => ({
  type: 'TOKEN_LOGIN',
  payload,
});

export const actionPlayerGravatar = (url, nickname, email) => ({
  type: 'USER_NICK_EMAIL',
  url,
  nickname,
  email,
});

export const thunkLoginAPI = () => async (dispatch) => {
  const response = 'https://opentdb.com/api_token.php?command=request';
  const token = await fetch(response);
  const data = await token.json();
  dispatch(actionTokenLogin(data.token));
};

export const thunkGravatarAPI = (md5Email, nickname, email) => async (dispatch) => {
  const url = `https://www.gravatar.com/avatar/${md5Email}`;
  dispatch(actionPlayerGravatar(url, nickname, email));
};
