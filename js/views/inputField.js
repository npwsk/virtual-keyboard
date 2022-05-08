const createInputField = () => {
  const inputEl = document.createElement('textarea');
  inputEl.classList.add('input-field');
  return inputEl;
};

const updateInputField = (inputEl, value) => {
  // eslint-disable-next-line no-param-reassign
  inputEl.value = value;
};

const renderInputField = (container) => {
  const inputEl = createInputField();
  container.append(inputEl);
  return inputEl;
};

export { createInputField, renderInputField, updateInputField };
