import keyCodes from '../keyCodes';

const handleKeyDown = (e, keyboard, input) => {
  const { code } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  e.preventDefault();

  keyboard.setKeyActive(code);
  keyboard.updateValue(code);

  if (code === keyCodes.CAPSLOCK) {
    keyboard.toggleCapslock();
  }

  if (code === keyCodes.BACKSPACE) {
    input.removePrevChar();
  }

  input.addCharacter(keyboard.getCurrentValue());
  input.focus();
};

export default handleKeyDown;
