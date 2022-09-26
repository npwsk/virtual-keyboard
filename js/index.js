import Key from './models/Key';
import Keyboard from './models/Keyboard';
import InputField from './models/InputField';
import SideBar from './components/SideBar';

import handleKeyDown from './controllers/keyDown';
import handleKeyUp from './controllers/keyUp';
import handleKeyClick from './controllers/keyClick';

import keyRows from './keys.json';
import langs from './langs';
import { getKeyCase } from './utils';

import 'normalize.css';
import '../scss/index.scss';

const init = () => {
  const initLang = localStorage.getItem('lang');

  const langList = Object.values(langs);

  const keys = keyRows.flatMap((row, i) => row.map(
    (key) => new Key({
      code: key.code,
      caseUp: getKeyCase({ key, letterCase: 'upper' }),
      caseDown: getKeyCase({ key, letterCase: 'lower' }),
      row: i,
    }),
  ));

  const keyboard = new Keyboard({
    keys,
    initLang,
    langList,
  });

  const inputField = new InputField();

  const sideBar = new SideBar({
    languages: Object.values(langs),
    onLangChange: (lang) => keyboard.setLanguage(lang),
  });

  keyboard.addObserver(sideBar);

  const appEl = document.createElement('main');
  appEl.classList.add('app');

  inputField.init(appEl);
  keyboard.init(appEl);

  const sideBarElem = sideBar.init({
    initLang: keyboard.getLanguage(),
  });

  appEl.append(sideBarElem);

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
