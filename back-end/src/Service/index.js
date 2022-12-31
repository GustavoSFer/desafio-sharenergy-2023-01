const md5 = require('md5');
const model = require('../Model');
const { generateToken } = require('../Token/token');

const login = async (userName, password) => {
  const hashPassword = md5(password);
  const user = await model.login(userName);

  return user;
};

module.exports = {
  login,
};
