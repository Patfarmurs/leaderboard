import Display from './modules/Display.js';

const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

const display = new Display();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    submit.click();
  }
  if (!name.value.trim()) {
    name.setCustomValidity('Please check input name field.');
    name.reportValidity();
  } else if (!score.value) {
    score.setCustomValidity('Please check input score field.');
    score.reportValidity();
  } else if (name.value.trim() && score.value) {
    submit.setCustomValidity('"Leaderboard score created correctly.');
    submit.reportValidity();
    name.value = '';
    score.value = '';
  }
});

refresh.addEventListener('click', () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    display.createList(arr);
  }
});
