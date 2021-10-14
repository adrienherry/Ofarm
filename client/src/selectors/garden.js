/* eslint-disable import/prefer-default-export */

export const findGarden = (gardenList, searchedSlug) => {
  const garden = gardenList.find((testedGarden) => testedGarden.nameSlug === searchedSlug);
  return garden;
};
