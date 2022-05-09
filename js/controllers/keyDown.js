import keyCodes from '../keyCodes';

const handleKeyDown = (e, keyboard, input) => {
  const { code } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  e.preventDefault();

  if (code === keyCodes.CAPSLOCK) {
    keyboard.toggleCapslock();
  }

  keyboard.setKeyActive(code);
  keyboard.updateValue(code);
  input.updateValue(keyboard);
};

export default handleKeyDown;
