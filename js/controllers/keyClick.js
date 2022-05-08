const handleKeyClick = (e, keyboard, inputField) => {
  // update keyboardState
  const { code } = e.currentTarget.dataset;
  // if (code === keyCodes.CAPSLOCK) {
  // TODO ???
  // }
  keyboard.pressKey(code);
  inputField.updateValue(keyboard);
  inputField.focus();
};

export default handleKeyClick;
