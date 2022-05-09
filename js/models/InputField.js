import { renderInputField, updateInputField } from '../views/inputField';

class InputField {
  value = '';

  charsArr = [];

  inputEl = null;

  focus() {
    this.inputEl.focus();
  }

  addCharacter(char) {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.removePrevChar();
    }
    this.charsArr.splice(start, 0, char);
    updateInputField(this.charsArr.join(''), start + 1);
  }

  removePrevChar() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.charsArr = this.charsArr.filter((_el, i) => i < start || i >= end);
      updateInputField(this.charsArr.join(''), start - 1);
      return;
    }
    this.charsArr = this.charsArr.filter((_el, i) => i !== start - 1);
    updateInputField(this.charsArr.join(''), start - 1);
  }

  init(container) {
    this.inputEl = renderInputField(container);
  }
}

export default InputField;
