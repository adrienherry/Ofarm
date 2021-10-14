const filterSpecies = (array, id) => {
  const filteredSpecies = array.filter((el) => el.id !== id);
  return filteredSpecies;
};

export default filterSpecies;
