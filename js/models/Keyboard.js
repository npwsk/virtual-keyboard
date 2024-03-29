import renderKeyboard from '../views/keyboard';
import { updateKey, animateKeyPress } from '../views/key';
import Observable from '../utils/Observable';

import keyCodes from '../keyCodes';

import langs from '../langs';

class Keyboard extends Observable {
  state = {
    value: '',
    capsLock: false,
    lng: langs.EN,
  };

  keys = [];

  keyElems = [];

  constructor({ keys, initLang, langList }) {
    super();

    if (initLang) {
      this.state.lng = initLang;
    }
    this.keys = keys;
    this.langs = langList;
  }

  toggleCapslock() {
    this.state.capsLock = !this.state.capsLock;
  }

  getCurrentValue() {
    return this.state.value;
  }

  getKeyByCode(keyCode) {
    return this.keys.find((key) => key.code === keyCode);
  }

  updateValue(code) {
    const key = this.getKeyByCode(code);
    const shiftKeys = this.keys.filter((k) => k.code.startsWith('Shift'));
    const isShiftPressed = shiftKeys.some((k) => k.isActive);

    let value;
    switch (code) {
      case keyCodes.CONTROL_LEFT:
      case keyCodes.CONTROL_RIGHT:
      case keyCodes.SHIFT_LEFT:
      case keyCodes.SHIFT_RIGHT:
      case keyCodes.ALT_LEFT:
      case keyCodes.ALT_RIGHT:
      case keyCodes.META_LEFT:
      case keyCodes.DELETE:
      case keyCodes.BACKSPACE:
      case keyCodes.ARROW_LEFT:
      case keyCodes.ARROW_RIGHT:
      case keyCodes.ARROW_UP:
      case keyCodes.ARROW_DOWN:
      case keyCodes.CAPSLOCK:
        value = '';
        break;
      case keyCodes.TAB:
        value = '\t';
        break;
      case keyCodes.ENTER:
        value = '\n';
        break;
      default:
        // shift without capslock
        if (!this.state.capsLock && isShiftPressed) {
          value = key.uppercase[this.state.lng];
          break;
        }
        // capslock without shift
        if (this.state.capsLock && !isShiftPressed) {
          value = key.isLetter(this.state.lng)
            ? key.uppercase[this.state.lng]
            : key.lowercase[this.state.lng];
          break;
        }
        // capslock with shift
        if (this.state.capsLock && isShiftPressed) {
          value = key.isLetter(this.state.lng)
            ? key.lowercase[this.state.lng]
            : key.uppercase[this.state.lng];
          break;
        }

        // no capslock and no shift
        value = key.lowercase[this.state.lng];
    }

    this.state = { ...this.state, value };
  }

  pressKey(keyCode) {
    if (keyCode === keyCodes.CAPSLOCK && this.state.capsLock) {
      this.setKeyActive(keyCode);
      return;
    }
    if (keyCode === keyCodes.CAPSLOCK && !this.state.capsLock) {
      this.setKeyInactive(keyCode);
      return;
    }
    const key = this.getKeyByCode(keyCode);
    if (!key) {
      return;
    }
    animateKeyPress(key);

    this.updateValue(keyCode);
  }

  setKeyActive(keyCode) {
    const key = this.getKeyByCode(keyCode);
    key.isActive = true;
    updateKey(key);
  }

  setKeyInactive(keyCode) {
    if (keyCode === keyCodes.CAPSLOCK && this.state.capsLock) {
      return;
    }
    const key = this.getKeyByCode(keyCode);
    key.isActive = false;
    updateKey(key);
  }

  getLanguage() {
    return this.state.lng;
  }

  setLanguage(lang) {
    this.state.lng = lang;
    this.updateKeys();
    this.notify({ language: this.state.lng });
  }

  updateKeys() {
    this.keys.forEach((key) => updateKey(key, this.state.lng));
  }

  setNextLanguage() {
    const allLangs = Object.values(langs);
    const currentIndex = allLangs.indexOf(this.state.lng);
    const nextIndex = (currentIndex + 1) % allLangs.length;
    this.setLanguage(allLangs[nextIndex]);
  }

  init(container) {
    const keyRows = [];

    this.keys.forEach((key) => {
      if (!keyRows[key.row]) {
        keyRows[key.row] = [];
      }
      keyRows[key.row].push(key);
    });

    renderKeyboard(keyRows, container, this.state.lng);
  }
}

export default Keyboard;
