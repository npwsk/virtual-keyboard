import langs from '../langs';

const mapLangToName = (lang) => {
  switch (lang) {
    case langs.EN:
      return 'English';
    case langs.RU:
      return 'Russian';
    default:
      throw new Error(`Unknown language: "${lang}"`);
  }
};

export default mapLangToName;
