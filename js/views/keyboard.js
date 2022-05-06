const createKeyboard = (buttons) => {
  const keyboardEl = document.createElement('div');
  keyboardEl.classList.add('keyboard');

  const keyboardInnerEl = document.createElement('div');
  keyboardInnerEl.classList.add('keyboard__inner');

  const rowElems = buttons.map((btnsRow) => {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keyboard__row');
    btnsRow.map((btn) => btn.classList.add('keyboard__key'));
    rowEl.append(...btnsRow);
    return rowEl;
  });

  keyboardInnerEl.append(...rowElems);

  keyboardEl.append(keyboardInnerEl);

  return keyboardEl;
};

export default createKeyboard;
