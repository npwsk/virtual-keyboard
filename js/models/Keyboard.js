import renderKeyboard from '../views/keyboard';
import { updateKey } from '../views/key';

import { CAPSLOCK } from '../keyCodes';

class Keyboard {
  state = {
    lastKeyCode: null,
    capsLock: false,
  };

  keys = [];

  keyElems = [];

  constructor(keys) {
    this.keys = keys;
  }

  updateKey(keyCode, isActive, capsLock = false) {
    const key = this.keyElems.find((k) => k.dataset.code === keyCode);
    if (!key) {
      return;
    }

    if (keyCode === CAPSLOCK) {
      this.state.capsLock = !capsLock;
    }

    this.state = { ...this.state, lastKeyCode: keyCode };
    updateKey(key, isActive);
  }

  init(container) {
    const keyboardEl = renderKeyboard(this.keys, container);

    this.keyElems = Array.from(keyboardEl.querySelectorAll('.key'));
  }
}

export default Keyboard;
