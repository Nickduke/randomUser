import getElement from './utils/getElement.js';
import getUser from './utils./fetchUser.js';

const btn = getElement('.btn');
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const showUser = async () => {
  const person = await getUser();
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
