const createInputField = () => {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.classList.add('input-field');
  return inputEl;
};

export default createInputField;
