import keyRows from './keys.json';

import Key from './models/Key';
import Keyboard from './models/Keyboard';
import createInputField from './views/inputField';

import handleKeyDown from './controllers/keyDown';
import handleKeyUp from './controllers/keyUp';

import 'normalize.css';
import '../scss/index.scss';

const init = () => {
  const keys = keyRows.map((row) => row.map((key) => new Key(key.caseUp, key.caseDown, key.code)));
  const keyboard = new Keyboard(keys);

  const appEl = document.createElement('main');
  appEl.classList.add('app');

  const inputEl = createInputField();

  appEl.replaceChildren(inputEl);

  keyboard.init(appEl);

  document.body.append(appEl);

  // TODO: find another way to check if delay is needed before removing active class
  const timer = {
    keyUp: null,
  };

  window.addEventListener('keydown', (e) => handleKeyDown(e, keyboard, timer));
  window.addEventListener('keyup', (e) => handleKeyUp(e, keyboard, timer));
};

document.addEventListener('DOMContentLoaded', init);
