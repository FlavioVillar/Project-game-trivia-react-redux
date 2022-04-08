export const actionTokenLogin = (payload) => ({
  type: 'TOKEN_LOGIN',
  payload,
});

export const thunkLoginAPI = () => async (dispatch) => {
  const response = 'https://opentdb.com/api_token.php?command=request';
  const token = await fetch(response);
  const data = await token.json();
  dispatch(actionTokenLogin(data.token));
};

// !
export const actionNickEmail = (nickname, email) => ({
  type: 'USER_NICK_EMAIL',
  nickname,
  email,
});
// !
export const actionPlayerGravatar = (url) => ({
  type: 'USER_URL',
  url,
});

export const thunkGravatarAPI = (md5Email) => async (dispatch) => {
  const url = `https://www.gravatar.com/avatar/${md5Email}`;
  dispatch(actionPlayerGravatar(url));
};

// !

export const actionScore = (payload) => ({
  type: 'SCORE_UPDATE',
  payload,
});
