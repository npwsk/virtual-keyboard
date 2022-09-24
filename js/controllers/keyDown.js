import keyCodes from '../keyCodes';

const handleKeyDown = (e, keyboard, input) => {
  const { code } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  if (code !== keyCodes.ARROW_UP && code !== keyCodes.ARROW_DOWN) {
    e.preventDefault();
  }

  keyboard.setKeyActive(code);
  keyboard.updateValue(code);

  if (code === keyCodes.CAPSLOCK) {
    keyboard.toggleCapslock();
  }

  if (code === keyCodes.BACKSPACE) {
    input.removePrevChar();
    return;
  }

  if (code === keyCodes.DELETE) {
    input.removeNextChar();
    return;
  }

  if (code === keyCodes.ARROW_LEFT) {
    input.moveCursorLeft();
    return;
  }

  if (code === keyCodes.ARROW_RIGHT) {
    input.moveCursorRight();
    return;
  }

  input.addCharacter(keyboard.getCurrentValue());
};

export default handleKeyDown;
