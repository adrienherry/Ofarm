// eslint-disable-next-line no-unused-vars
export default (store) => (next) => (action) => {
  console.log('DEBUG:', action);
  next(action);
};
