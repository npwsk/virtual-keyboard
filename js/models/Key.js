import langs from '../langs';
import { checkCharIsLetter } from '../utils';

class Key {
  uppercase = {};

  lowercase = {};

  code;

  row;

  isActive = false;

  constructor({
    code, caseUp, caseDown, row,
  }) {
    this.code = code;
    this.uppercase = caseUp;
    this.lowercase = caseDown;
    this.row = row;
  }

  isLetter(lang) {
    switch (lang) {
      case langs.EN:
        return checkCharIsLetter(this.uppercase[langs.EN]);
      case langs.RU:
        return checkCharIsLetter(this.uppercase[langs.RU]);
      default:
        return false;
    }
  }
}

export default Key;
