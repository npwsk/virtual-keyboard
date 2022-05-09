import { renderInputField, updateInputField } from '../views/inputField';

class InputField {
  charsArr = [];

  inputEl = null;

  addCharacter(char) {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.removeRange(start, end);
    }
    this.charsArr.splice(start, 0, char);
    updateInputField(this.charsArr.join(''), start + 1);
  }

  removeRange(start, end) {
    this.charsArr = this.charsArr.filter((_el, i) => i < start || i >= end);
    updateInputField(this.charsArr.join(''), start);
  }

  removePrevChar() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.removeRange(start, end);
      return;
    }
    this.charsArr = this.charsArr.filter((_el, i) => i !== start - 1);
    updateInputField(this.charsArr.join(''), start - 1);
  }

  removeNextChar() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    if (start !== end) {
      this.removeRange(start, end);
      return;
    }
    this.charsArr = this.charsArr.filter((_el, i) => i !== start);
    updateInputField(this.charsArr.join(''), start);
  }

  init(container) {
    this.inputEl = renderInputField(container);
  }
}

export default InputField;
