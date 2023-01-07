import './style.css';
import { fetchData, sendData } from './modules/Leaderboard.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('submit');

refresh.addEventListener('click', fetchData);
form.addEventListener('submit', sendData);
window.addEventListener('load', fetchData);