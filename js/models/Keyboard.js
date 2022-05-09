import renderKeyboard from '../views/keyboard';
import { updateKey, animateKeyPress } from '../views/key';

import keyCodes from '../keyCodes';

import langs from '../langs';

class Keyboard {
  state = {
    value: '',
    capsLock: false,
    lng: langs.EN,
  };

  keys = [];

  keyElems = [];

  constructor(keys, lang) {
    if (lang) {
      this.state.lng = lang;
    }
    keys.forEach((row, i) => row.forEach((key) => {
      this.keys.push({ ...key, row: i, isActive: false });
    }));
  }

  getKeyByCode(keyCode) {
    return this.keys.find((key) => key.code === keyCode);
  }

  updateValue(code) {
    const key = this.getKeyByCode(code);
    const shiftKeys = this.keys.filter((k) => k.code.startsWith('Shift'));

    let value;
    switch (code) {
      case keyCodes.CONTROL_LEFT:
      case keyCodes.CONTROL_RIGHT:
      case keyCodes.SHIFT_LEFT:
      case keyCodes.SHIFT_RIGHT:
      case keyCodes.ALT_LEFT:
      case keyCodes.ALT_RIGHT:
      case keyCodes.META_LEFT:
        value = '';
        break;
      case keyCodes.TAB:
        value = '\t';
        break;
      case keyCodes.ENTER:
        value = '\n';
        break;
      case keyCodes.DELETE:
        // TODO
        value = '';
        break;
      case keyCodes.BACKSPACE:
        // TODO
        value = '';
        break;
      case keyCodes.ARROW_LEFT:
        // TODO
        value = '';
        break;
      case keyCodes.ARROW_RIGHT:
        // TODO
        value = '';
        break;
      case keyCodes.ARROW_UP:
        // TODO
        value = '';
        break;
      case keyCodes.ARROW_DOWN:
        // TODO
        value = '';
        break;
      case keyCodes.CAPSLOCK:
        this.state.capsLock = !this.state.capsLock;
        value = '';
        break;
      default:
        if (this.state.capsLock || shiftKeys.some((k) => k.isActive)) {
          value = key.uppercase[this.state.lng];
        } else {
          value = key.lowercase[this.state.lng];
        }
    }

    this.state = { ...this.state, value };
  }

  pressKey(keyCode) {
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
    const key = this.getKeyByCode(keyCode);
    key.isActive = false;
    updateKey(key);
  }

  switchLanguage() {
    this.state.lng = this.state.lng === langs.EN ? langs.RU : langs.EN;

    this.keys.forEach((key) => updateKey(key, this.state.lng));
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
