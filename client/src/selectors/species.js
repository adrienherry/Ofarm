/* eslint-disable import/prefer-default-export */

export const findSpecies = (speciesList, searchedSlug) => {
  if (!speciesList[0]) return {};
  const species = speciesList.find((testedSpecies) => testedSpecies.nameSlug === searchedSlug);
  return species;
};
