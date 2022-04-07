export const actionTokenLogin = (payload) => ({
  type: 'TOKEN_LOGIN',
  payload,
});
// action para pedir o token no login.

export const actionPlayerGravatar = (url, nickname, email) => ({
  type: 'USER_NICK_EMAIL',
  url,
  nickname,
  email,
});
// action para gravatar, que pega o avatar do usuario.

export const thunkLoginAPI = () => async (dispatch) => {
  const response = 'https://opentdb.com/api_token.php?command=request';
  const token = await fetch(response);
  const data = await token.json();
  dispatch(actionTokenLogin(data.token));
};
// função para pegar o token e passar para o reducer por action e redux-thunk.

export const thunkGravatarAPI = (md5Email, nickname, email) => async (dispatch) => {
  const url = `https://www.gravatar.com/avatar/${md5Email}`;
  dispatch(actionPlayerGravatar(url, nickname, email));
};
// função para pegar o gravatar e passar para o reducer por action e redux-thunk.
