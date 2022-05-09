const handleKeyDown = (e, keyboard, input) => {
  if (e.repeat) {
    return;
  }
  const { code } = e;

  keyboard.updateKey(code, true);
  input.updateValue(keyboard);
};

export default handleKeyDown;
