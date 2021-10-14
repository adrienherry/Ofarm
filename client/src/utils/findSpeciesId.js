const findSpeciesId = (array, name) => {
  const element = array.find((el) => el.name === name);
  return element;
};

export default findSpeciesId;
