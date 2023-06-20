import '../scss/styles.scss';

const listDetails = () => {
  const listData = [
    {
      Name: 'Name',
      Score: 100,
    },
    {
      Name: 'Name',
      Score: 20,
    },
    {
      Name: 'Name',
      Score: 50,
    },
    {
      Name: 'Name',
      Score: 78,
    },
    {
      Name: 'Name',
      Score: 125,
    },
    {
      Name: 'Name',
      Score: 77,
    },
    {
      Name: 'Name',
      Score: 42,
    },
  ];

  const listContainer = document.getElementById('listContainer');
  const ul = document.querySelector('.list');

  listData.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.Name}: ${item.Score}`;
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
};
listDetails();
