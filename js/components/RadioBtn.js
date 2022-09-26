class RadioBtn {
  #container = document.createElement('div');

  #radio = document.createElement('input');

  #labelText;

  #onChange;

  constructor({
    name, value, id, labelText, onChange,
  }) {
    this.#radio.type = 'radio';
    this.#radio.name = name;
    this.#radio.value = value;
    this.#radio.id = id;
    this.#labelText = labelText;
    this.#onChange = onChange;
  }

  setActive() {
    this.#radio.checked = true;
  }

  getLang() {
    return this.#radio.value;
  }

  init() {
    const label = document.createElement('label');
    label.setAttribute('for', this.#radio.id);
    label.textContent = this.#labelText;

    this.#radio.addEventListener('change', (e) => this.#onChange(e.target.value));

    this.#container.classList.add('radio-btn');
    this.#container.append(this.#radio, label);
    return this.#container;
  }
}

export default RadioBtn;
