import 'normalize.css';
import '../scss/index.scss';
import createKeyboard from './views/keyboard';
import createKey from './views/key';
import createInputField from './views/inputField';
import keys from './keys.json';

const init = () => {
  const rootEl = document.createElement('div');
  rootEl.classList.add('app');

  const inputEl = createInputField();

  const keyElems = keys.map((row) => row.map((key) => createKey(key.caseUp, key.caseDown, {
    code: key.code,
  })));

  const keyboardEl = createKeyboard(keyElems);

  rootEl.replaceChildren(inputEl, keyboardEl);

  document.body.append(rootEl);
};

document.addEventListener('DOMContentLoaded', init);
