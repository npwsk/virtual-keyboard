const createKey = (textTop, textBottom, options = {}) => {
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

  const edgesContainer = document.createElement('div');
  edgesContainer.classList.add('key__edges');
  const edgeModifiers = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const edgeElems = edgeModifiers.map((modif) => {
    const edgeEl = document.createElement('div');
    edgeEl.classList.add('key__edge', `key__edge--${modif}`);
    return edgeEl;
  });
  edgesContainer.append(...edgeElems);

  const keyTopEl = document.createElement('div');
  keyTopEl.classList.add('key__top');

  const colorEl = document.createElement('div');
  colorEl.classList.add('key__color');

  const textTopEl = document.createElement('div');
  textTopEl.classList.add('key__text', 'key__text--top');
  textTopEl.textContent = textTop;

  const textBottomEl = document.createElement('div');
  textBottomEl.classList.add('key__text', 'key__text--bottom');
  if (textTop !== textBottom) {
    textBottomEl.textContent = textBottom ?? '';
  }

  btnEl.append(edgesContainer, keyTopEl, colorEl, textTopEl, textBottomEl);

  return btnEl;
};

export default createKey;
