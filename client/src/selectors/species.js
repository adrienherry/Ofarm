/* eslint-disable import/prefer-default-export */

export const findSpecies = (speciesList, searchedSlug) => {
  const species = speciesList.find((testedSpecies) => testedSpecies.nameSlug === searchedSlug);
  return species;
};
