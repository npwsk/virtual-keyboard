const checkCharIsLetter = (char) => {
  if (char.length !== 1) {
    return false;
  }
  return char.toUpperCase() !== char.toLowerCase();
};

export default checkCharIsLetter;
