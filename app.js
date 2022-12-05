import getElement from './utils/getElement.js';

const URL = `https://randomuser.me/api/`;
const btn = getElement('.user-img');
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];
console.log(btns);
