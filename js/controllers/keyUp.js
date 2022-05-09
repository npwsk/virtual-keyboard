const TRANSITION_TIME = 200;

const handleKeyUp = (e, keyboard) => {
  if (e.repeat) {
    return;
  }

  const { code } = e;

  setTimeout(() => keyboard.updateKey(code, false), TRANSITION_TIME);
};

export default handleKeyUp;
