const postData = async (name, score) => {
  const id = JSON.parse(localStorage.getItem('gameId'));
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    },
  ).then((res) => res.json());
  return response;
};

export default postData;
