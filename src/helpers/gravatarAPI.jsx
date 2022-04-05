const fetchgravatarAPI = async () => {
  const response = 'https://opentdb.com/api_token.php?command=request';
  const token = await fetch(response);
  const data = await token.json();
  return data.token;
};

export default fetchgravatarAPI;
