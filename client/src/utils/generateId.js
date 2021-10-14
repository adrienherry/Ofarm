/* eslint-disable import/prefer-default-export */

export const generateId = (array) => {
  if (array.length === 0) return 1;
  const allId = [];
  array.forEach((el) => {
    allId.push(el.id);
  });
  const newId = Math.max(...allId) + 1;
  return newId;
};
