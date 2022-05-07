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

  const keyRowElems = keys.map((row) => row.map((key) => createKey(key.caseUp, key.caseDown, {
    code: key.code,
  })));

  const keyboardEl = createKeyboard(keyRowElems);

  rootEl.replaceChildren(inputEl, keyboardEl);

  document.body.append(rootEl);

  window.addEventListener('keydown', (e) => {
    const keyEl = keyRowElems.flat().find((el) => el.dataset.code === e.code);
    if (keyEl) {
      keyEl.classList.add('key--active');
    }
  });

  window.addEventListener('keyup', (e) => {
    const keyEl = keyRowElems.flat().find((el) => el.dataset.code === e.code);
    if (keyEl) {
      keyEl.classList.remove('key--active');
    }
  });
};

document.addEventListener('DOMContentLoaded', init);
