const handleKeyDown = (e, keyboard, input) => {
  const { code, altKey, shiftKey } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  e.preventDefault();

  keyboard.setKeyActive(code);
  input.updateValue(keyboard);

  if (altKey && shiftKey && (code.startsWith('Shift') || code.startsWith('Alt'))) {
    keyboard.switchLanguage();
  }
};

export default handleKeyDown;
