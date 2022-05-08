import { renderInputField, updateInputField } from '../views/inputField';

class InputField {
  value = '';

  inputEl = null;

  focus() {
    this.inputEl.focus();
  }

  updateValue(keyboard) {
    this.value += keyboard.state.value;
    updateInputField(this.inputEl, this.value);
  }

  init(container) {
    this.inputEl = renderInputField(container);
  }
}

export default InputField;
