import getElemFromStr from '../utils/getElemFromStr';
import mapLangToName from '../utils/mapLangToName';
import RadioBtn from './RadioBtn';

class SideBar {
  #container = document.createElement('div');

  #langControls = [];

  constructor({ languages, onLangChange }) {
    this.#langControls = languages.map(
      (lang) => new RadioBtn({
        name: 'lang',
        value: lang,
        id: `${lang}-radio`,
        labelText: mapLangToName(lang),
        onChange: onLangChange,
      }),
    );
  }

  changeLang(lang) {
    const targetControl = this.#langControls.find((control) => control.getLang() === lang);
    targetControl.setActive();
  }

  init({ initLang }) {
    const descriptionEl = getElemFromStr(`
    <div class="description">
      <p>The virtual keyboard was created in Windows OS</p>
      <p>Press Shift + Alt to change language</p>
    </div>
    `);

    this.changeLang(initLang);

    const controlElems = this.#langControls.map((control) => control.init());

    const controlsGroup = document.createElement('div');
    controlsGroup.append(...controlElems);

    this.#container.classList.add('side-bar');
    this.#container.append(descriptionEl, controlsGroup);

    return this.#container;
  }

  update(state) {
    if (Object.prototype.hasOwnProperty.call(state, 'language')) {
      this.changeLang(state.language);
    }
  }
}

export default SideBar;
