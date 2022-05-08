class Key {
  uppercase;

  lowercase;

  code;

  constructor(caseUp, caseDown, code) {
    this.uppercase = caseUp;
    this.lowercase = caseDown;
    this.code = code;
  }
}

export default Key;
