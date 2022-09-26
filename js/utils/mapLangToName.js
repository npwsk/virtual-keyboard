import langs from '../langs';

const mapLangToName = (lang) => {
  switch (lang) {
    case langs.EN:
      return 'En';
    case langs.RU:
      return 'Ru';
    default:
      throw new Error(`Unknown language: "${lang}"`);
  }
};

export default mapLangToName;
