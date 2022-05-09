const createInputField = () => {
  const inputEl = document.createElement('textarea');
  inputEl.classList.add('input-field');
  return inputEl;
};

const updateInputField = (value, cursorPos) => {
  const inputEl = document.querySelector('.input-field');
  inputEl.value = value;
  inputEl.setSelectionRange(cursorPos, cursorPos);
  inputEl.focus();
};

const renderInputField = (container) => {
  const inputEl = createInputField();
  container.append(inputEl);
  return inputEl;
};

export { createInputField, renderInputField, updateInputField };
