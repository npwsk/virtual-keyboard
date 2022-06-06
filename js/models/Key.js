import langs from '../langs';

class Key {
  uppercase = {};

  lowercase = {};

  code;

  constructor(code, lngs) {
    this.code = code;
    this.uppercase[langs.EN] = lngs[langs.EN]?.caseUp;
    this.uppercase[langs.RU] = lngs[langs.RU]?.caseUp;
    this.lowercase[langs.EN] = lngs[langs.EN]?.caseDown;
    this.lowercase[langs.RU] = lngs[langs.RU]?.caseDown;
  }
}

export default Key;
