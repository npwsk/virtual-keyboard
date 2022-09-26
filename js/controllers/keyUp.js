const TRANSITION_TIME = 200;

const handleKeyUp = (e, keyboard) => {
  if (e.repeat) {
    return;
  }

  const { code, altKey, shiftKey } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  if ((shiftKey && code.startsWith('Alt')) || (altKey && code.startsWith('Shift'))) {
    keyboard.setNextLanguage();
  }

  setTimeout(() => keyboard.setKeyInactive(code), TRANSITION_TIME);
};

export default handleKeyUp;
