const handleKeyDown = (e, keyboard, input, timer) => {
  if (e.repeat) {
    return;
  }
  const { code } = e;
  // eslint-disable-next-line no-param-reassign
  timer.keyUp = Date.now();

  keyboard.updateKey(code, true);
  input.updateValue(keyboard);
};

export default handleKeyDown;
