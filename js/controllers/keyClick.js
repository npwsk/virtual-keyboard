import keyCodes from '../keyCodes';

const handleKeyClick = (e, keyboard, inputField) => {
  const { code } = e.currentTarget.dataset;

  if (code === keyCodes.CAPSLOCK) {
    keyboard.toggleCapslock();

    if (keyboard.state.capsLock) {
      keyboard.setKeyActive(code);
    } else {
      keyboard.setKeyInactive(code);
    }
    inputField.focus();
    return;
  }

  keyboard.pressKey(code);

  if (code === keyCodes.BACKSPACE) {
    inputField.removePrevChar();
    return;
  }

  if (code === keyCodes.DELETE) {
    inputField.removeNextChar();
    return;
  }

  inputField.addCharacter(keyboard.getCurrentValue());
};

export default handleKeyClick;
