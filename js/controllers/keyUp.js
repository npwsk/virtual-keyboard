const TRANSITION_TIME = 200;

const handleKeyUp = (e, keyboard, timer) => {
  if (e.repeat) {
    return;
  }

  const { code } = e;
  const delta = Date.now() - timer.keyUp;

  if (delta >= TRANSITION_TIME) {
    keyboard.updateKey(code, false);
    return;
  }

  setTimeout(() => keyboard.updateKey(code, false), delta);
};

export default handleKeyUp;
