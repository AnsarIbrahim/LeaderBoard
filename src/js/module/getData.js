const getData = async () => {
  const id = JSON.parse(localStorage.getItem('gameId'));
  const refreshData = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
  );

  const refreshJsonData = await refreshData.json();
  return refreshJsonData;
};

export default getData;
