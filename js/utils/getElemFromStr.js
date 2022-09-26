const getElemFromStr = (str) => {
  const tempElem = document.createElement('div');
  tempElem.innerHTML = str; //  TODO: sanitize recieved string
  return tempElem.firstElementChild;
};

export default getElemFromStr;
