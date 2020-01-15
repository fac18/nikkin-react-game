import { token } from process.env.REACT_APP_GITHUB_TOKEN;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const fetchPlayer = url => {
  return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getDataUser failed. ${err}`);
    });
};

export default fetchPlayer;
