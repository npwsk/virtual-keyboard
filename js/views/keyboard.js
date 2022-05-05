const createKeyboard = (buttons) => {
  const keyboardEl = document.createElement('div');
  keyboardEl.classList.add('keyboard');

  const rowElems = buttons.map((btnsRow) => {
    const rowEl = document.createElement('div');
    rowEl.classList.add('keyboard__row');
    btnsRow.map((btn) => btn.classList.add('keyboard__key'));
    rowEl.append(...btnsRow);
    return rowEl;
  });

  keyboardEl.append(...rowElems);

  return keyboardEl;
};

export default createKeyboard;
