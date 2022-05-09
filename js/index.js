import keyRows from './keys.json';

import Key from './models/Key';
import Keyboard from './models/Keyboard';
import InputField from './models/InputField';

import handleKeyDown from './controllers/keyDown';
import handleKeyUp from './controllers/keyUp';
import handleKeyClick from './controllers/keyClick';

import 'normalize.css';
import '../scss/index.scss';

const init = () => {
  const savedLang = localStorage.getItem('lang');

  const keys = keyRows.map((row) => row.map((key) => {
    const newKey = new Key(key.code, { en: key.en, ru: key.ru });
    return newKey;
  }));
  const keyboard = new Keyboard(keys, savedLang);
  const inputField = new InputField();

  const appEl = document.createElement('main');
  appEl.classList.add('app');

  inputField.init(appEl);
  keyboard.init(appEl);

  const descrEl = document.createElement('div');
  descrEl.classList.add('description');
  descrEl.innerHTML = `
  <p>The virtual keyboard was created in Windows OS</p>
  <p>Press Shift + Alt to change language</p>
  `;
  appEl.append(descrEl);

  document.body.append(appEl);

  window.addEventListener('keydown', (e) => handleKeyDown(e, keyboard, inputField));
  window.addEventListener('keyup', (e) => handleKeyUp(e, keyboard));

  const keyElems = document.querySelectorAll('.keyboard__key');
  keyElems.forEach((keyEl) => {
    keyEl.addEventListener('click', (e) => handleKeyClick(e, keyboard, inputField));
    keyEl.addEventListener('animationend', () => keyEl.classList.remove('key--pressed'));
  });

  window.addEventListener('unload', () => localStorage.setItem('lang', keyboard.state.lng));
};

document.addEventListener('DOMContentLoaded', init);
