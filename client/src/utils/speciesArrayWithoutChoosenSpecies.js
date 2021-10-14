/* eslint-disable import/prefer-default-export */

export const speciesArrayWithoutChoosenSpecies = (array, value) => {
  const newArray = array.filter((el) => el.name !== value);
  return newArray;
};
