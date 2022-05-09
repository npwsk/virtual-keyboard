import { renderInputField, updateInputField } from '../views/inputField';

class InputField {
  value = '';

  inputEl = null;

  focus() {
    this.inputEl.focus();
  }

  addCharacter(char) {
    this.value += char;
    updateInputField(this.value);
  }

  removePrevChar() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.value = this.value
        .split('')
        .filter((_el, i) => i < start || i >= end)
        .join('');
      updateInputField(this.value);
      this.inputEl.setSelectionRange(start, start);
      return;
    }
    this.value = this.value
      .split('')
      .filter((_el, i) => i !== start - 1)
      .join('');
    updateInputField(this.value);
    this.inputEl.setSelectionRange(start - 1, start - 1);
  }

  init(container) {
    this.inputEl = renderInputField(container);
  }
}

export default InputField;
