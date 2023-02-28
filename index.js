const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

addBtn.addEventListener('click', () => {
  const task = input.value;
  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    list.appendChild(listItem);
    input.value = '';
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const task = input.value;
    if (task !== '') {
      const listItem = document.createElement('li');
      listItem.innerText = task;
      list.appendChild(listItem);
      input.value = '';
    }
  }
});
