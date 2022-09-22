import langs from '../langs';

const getPropName = (letterCase) => {
  switch (letterCase.toLowerCase()) {
    case 'upper':
      return 'caseUp';
    case 'lower':
      return 'caseDown';
    default:
      throw new Error(`Unknown letter case: "${letterCase}"`);
  }
};

const getKeyCase = ({ key, letterCase }) => {
  const prop = getPropName(letterCase);
  return Object.fromEntries(Object.values(langs).map((lng) => [lng, key[lng][prop]]));
};

export default getKeyCase;
