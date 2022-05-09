const handleKeyDown = (e, keyboard, input) => {
  const { code } = e;

  if (!keyboard.getKeyByCode(code)) {
    return;
  }

  e.preventDefault();

  keyboard.setKeyActive(code);
  input.updateValue(keyboard);
};

export default handleKeyDown;
