import { renderInputField, updateInputField } from '../views/inputField';

class InputField {
  charsArr = [];

  inputEl = null;

  focus() {
    this.inputEl.focus();
  }

  addCharacter(char) {
    if (char.length === 0) {
      this.focus();
      return;
    }
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
    updateInputField(this.charsArr.join(''), Math.max(start - 1, 0));
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

  moveCursorLeft() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    const newPos = start !== end ? start : start - 1;
    updateInputField(this.charsArr.join(''), Math.max(newPos, 0));
  }

  moveCursorRight() {
    const start = this.inputEl.selectionStart;
    const end = this.inputEl.selectionEnd;
    const newPos = start !== end ? start : start + 1;
    updateInputField(this.charsArr.join(''), Math.min(newPos, this.charsArr.length));
  }

  init(container) {
    this.inputEl = renderInputField(container);
  }
}

export default InputField;
