const token = process.env.REACT_APP_GITHUB_TOKEN;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const fetchPlayer = username => {
  console.log(`username in fetchPlayer is ${username}`);
  return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetchPlayer failed with error: ${err}`);
    });
};

export default fetchPlayer;
