import renderKeyboard from '../views/keyboard';
import { updateKey, animateKeyPress } from '../views/key';

import keyCodes from '../keyCodes';

class Keyboard {
  state = {
    value: '',
    capsLock: false,
  };

  keys = [];

  keyElems = [];

  constructor(keys) {
    keys.forEach((row, i) => row.forEach((key) => {
      this.keys.push({ ...key, row: i, isActive: false });
    }));
  }

  getKeyByCode(keyCode) {
    return this.keys.find((key) => key.code === keyCode);
  }

  updateValue(key) {
    const { code } = key;

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
        value = this.state.capsLock ? key.uppercase : key.lowercase;
    }

    this.state = { ...this.state, value };
  }

  pressKey(keyCode) {
    const key = this.getKeyByCode(keyCode);
    if (!key) {
      return;
    }
    animateKeyPress(key);

    this.updateValue(key);
  }

  setKeyActive(keyCode) {
    const key = this.getKeyByCode(keyCode);
    key.isActive = true;
    updateKey(key);
    this.updateValue(key);
  }

  setKeyInactive(keyCode) {
    const key = this.getKeyByCode(keyCode);
    key.isActive = false;
    updateKey(key);
  }

  init(container) {
    const keyRows = [];

    this.keys.forEach((key) => {
      if (!keyRows[key.row]) {
        keyRows[key.row] = [];
      }
      keyRows[key.row].push(key);
    });

    renderKeyboard(keyRows, container);
  }
}

export default Keyboard;
