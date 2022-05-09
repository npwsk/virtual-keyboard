const TRANSITION_TIME = 200;

const handleKeyUp = (e, keyboard) => {
  if (e.repeat) {
    return;
  }

  const { code } = e;

  setTimeout(() => keyboard.setKeyInactive(code), TRANSITION_TIME);
};

export default handleKeyUp;
