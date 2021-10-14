/* eslint-disable import/prefer-default-export */

export const checkSpeciesExist = (array, name) => {
  let isExist = false;
  const elementFound = array.find((el) => el.name === name);
  if (elementFound) {
    isExist = true;
  }
  return isExist;
};
