const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const leaderBoard = async () => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: 'basketball' }),
    });
    if (!response.ok) {
      throw new Error('Error:', response.status);
    }

    const json = await response.json();
    const gameId = json.result.split(' ')[3];
    localStorage.setItem('gameId', JSON.stringify(gameId));
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
};

export default leaderBoard;
