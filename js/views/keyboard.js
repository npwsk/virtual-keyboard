import createKey from './key';

const createKeyboard = (keyRows) => {
  const keyboardEl = document.createElement('div');
  keyboardEl.classList.add('keyboard');

  const keyboardInnerEl = document.createElement('div');
  keyboardInnerEl.classList.add('keyboard__inner');

  const rowElems = keyRows.map((row) => {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keyboard__row');
    const keyELems = row.map((key) => {
      const keyEl = createKey(key);
      keyEl.classList.add('keyboard__key');
      return keyEl;
    });
    rowEl.append(...keyELems);
    return rowEl;
  });

  keyboardInnerEl.append(...rowElems);

  keyboardEl.append(keyboardInnerEl);

  return keyboardEl;
};

const renderKeyboard = (keys, container) => {
  const keyboardEl = createKeyboard(keys);
  container.append(keyboardEl);
  return keyboardEl;
};

export default renderKeyboard;
