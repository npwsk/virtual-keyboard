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
    this.keys = keys;
  }

  updateValue(keyEl) {
    const { code } = keyEl.dataset;

    let value;
    switch (code) {
      case keyCodes.CONTROL_LEFT:
      case keyCodes.CONTROL_RIGHT:
      case keyCodes.SHIFT_LEFT:
      case keyCodes.SHIFT_RIGHT:
      case keyCodes.META_RIGHT:
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
        value = this.state.capsLock ? keyEl.dataset.uppercase : keyEl.dataset.lowercase;
    }

    this.state = { ...this.state, value };
  }

  pressKey(keyCode) {
    const keyEl = this.keyElems.find((k) => k.dataset.code === keyCode);
    if (!keyEl) {
      return;
    }
    animateKeyPress(keyEl);

    this.updateValue(keyEl);
  }

  updateKey(keyCode, isActive) {
    const keyEl = this.keyElems.find((k) => k.dataset.code === keyCode);
    if (!keyEl) {
      return;
    }

    if (!isActive && !this.state.capsLock) {
      updateKey(keyEl, isActive);
      return;
    }

    updateKey(keyEl, isActive);
    this.updateValue(keyEl);
  }

  init(container) {
    const keyboardEl = renderKeyboard(this.keys, container);

    this.keyElems = Array.from(keyboardEl.querySelectorAll('.key'));
  }
}

export default Keyboard;
