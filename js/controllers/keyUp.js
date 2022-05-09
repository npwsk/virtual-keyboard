const TRANSITION_TIME = 200;

const handleKeyUp = (e, keyboard) => {
  if (e.repeat) {
    return;
  }

  const { code, altKey, shiftKey } = e;

  if ((shiftKey && code.startsWith('Alt')) || (altKey && code.startsWith('Shift'))) {
    keyboard.switchLanguage();
  }

  setTimeout(() => keyboard.setKeyInactive(code), TRANSITION_TIME);
};

export default handleKeyUp;
