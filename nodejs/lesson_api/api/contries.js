const api = require("../helpers/api");

/**
 * @param {Strong} str - contry name
 */
const name = (str, callback) => {
  const name = str.replace('/', '')
  const path = "name/" + name;
  return api.get(path, res => callback(res));
};

module.exports = {
  name
};
