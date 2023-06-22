import '../scss/styles.scss';

import leaderBoard from './module/API.js';
import postData from './module/postData.js';
import getData from './module/getData.js';

const form = document.querySelector('.form');
const list = document.getElementById('container');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refreshBtn = document.getElementById('refresh_btn');

form.addEventListener('submit', (e) => {
  const nameValue = name.value;
  const scoreValue = score.value;
  e.preventDefault();
  postData(nameValue, scoreValue);
  form.reset();
});

const refreshScores = () => {
  getData().then((data) => {
    list.innerHTML = '';
    data.result.forEach((data) => {
      const gameList = document.createElement('li');
      gameList.classList.add('text-white-50', 'bg-dark');
      gameList.innerHTML = `${data.user}: ${data.score}`;
      list.appendChild(gameList);
    });
  });
};

refreshBtn.addEventListener('click', refreshScores);

leaderBoard();

window.onload = refreshScores;
