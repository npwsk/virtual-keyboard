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
  const keys = keyRows.map((row) => row.map((key) => new Key(key.caseUp, key.caseDown, key.code)));
  const keyboard = new Keyboard(keys);
  const inputField = new InputField();

  const appEl = document.createElement('main');
  appEl.classList.add('app');

  inputField.init(appEl);
  keyboard.init(appEl);

  document.body.append(appEl);

  // TODO: find another way to check if delay is needed before removing active class
  const timer = {
    keyUp: null,
  };

  window.addEventListener('keydown', (e) => handleKeyDown(e, keyboard, inputField, timer));
  window.addEventListener('keyup', (e) => handleKeyUp(e, keyboard, timer));

  keyboard.keyElems.forEach((key) => {
    key.addEventListener('click', (e) => handleKeyClick(e, keyboard, inputField));
    key.addEventListener('animationend', () => key.classList.remove('key--pressed'));
  });
};

document.addEventListener('DOMContentLoaded', init);
