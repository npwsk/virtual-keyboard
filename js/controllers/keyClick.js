const handleKeyClick = (e, keyboard, inputField) => {
  // update keyboardState
  const { code } = e.currentTarget.dataset;
  keyboard.updateKey(code, true);
  inputField.updateValue(keyboard);
  keyboard.updateKey(code, false);
  inputField.focus();
};

export default handleKeyClick;
