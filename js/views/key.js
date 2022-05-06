const createKey = (textUpCase, textDownCase, options = {}) => {
  const { code } = options;
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

  const keyContentEl = document.createElement('div');
  keyContentEl.classList.add('key__content');

  const textTopEl = document.createElement('div');
  textTopEl.classList.add('key__text', 'key__text--up-case');
  textTopEl.textContent = textUpCase;

  const textBottomEl = document.createElement('div');
  textBottomEl.classList.add('key__text', 'key__text--down-case');
  if (textUpCase !== textDownCase) {
    textBottomEl.textContent = textDownCase ?? '';
  }

  keyContentEl.append(textTopEl, textBottomEl);

  btnEl.append(keyContentEl);

  return btnEl;
};

export default createKey;
