const createInputField = () => {
  const inputEl = document.createElement('textarea');
  inputEl.classList.add('input-field');
  return inputEl;
};

const updateInputField = (value) => {
  const inputEl = document.querySelector('.input-field');
  inputEl.value = value;
};

const renderInputField = (container) => {
  const inputEl = createInputField();
  container.append(inputEl);
  return inputEl;
};

export { createInputField, renderInputField, updateInputField };
