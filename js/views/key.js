const createKey = (key) => {
  const { uppercase, lowercase, code } = key;

  let modifier;
  switch (code.toLowerCase()) {
    case 'tab':
    case 'backspace':
    case 'delete':
    case 'capslock':
    case 'enter':
    case 'space':
      modifier = code.toLowerCase();
      break;

    case 'shiftleft':
    case 'shiftright':
    case 'controlleft':
    case 'controlright':
    case 'metaleft':
    case 'metaright':
    case 'altleft':
    case 'altright':
      modifier = code.toLowerCase().replace(/(right|left)/g, '');
      break;

    default:
      break;
  }

  const btnEl = document.createElement('button');
  btnEl.classList.add('key');
  if (modifier) {
    btnEl.classList.add(`key--${modifier}`);
  }
  btnEl.setAttribute('data-uppercase', uppercase);
  btnEl.setAttribute('data-lowercase', lowercase);
  btnEl.setAttribute('data-code', code);

  const keyContentEl = document.createElement('div');
  keyContentEl.classList.add('key__content');

  const textTopEl = document.createElement('div');
  textTopEl.classList.add('key__text', 'key__text--up-case');
  textTopEl.textContent = uppercase;

  const textBottomEl = document.createElement('div');
  textBottomEl.classList.add('key__text', 'key__text--down-case');
  if (uppercase !== lowercase && uppercase.toLowerCase() !== lowercase) {
    textBottomEl.textContent = lowercase ?? '';
  }

  keyContentEl.append(textTopEl, textBottomEl);

  btnEl.append(keyContentEl);

  return btnEl;
};

const animateKeyPress = (key) => {
  const keyEl = document.querySelector(`[data-code=${key.code}]`);
  keyEl.classList.add('key--pressed');
};

const updateKey = (key) => {
  const keyEl = document.querySelector(`[data-code=${key.code}]`);
  if (key.isActive) {
    keyEl.classList.add('key--active');
    return;
  }
  keyEl.classList.remove('key--active');
};

export { createKey, updateKey, animateKeyPress };
