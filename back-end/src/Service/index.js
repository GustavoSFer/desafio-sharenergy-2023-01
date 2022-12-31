const md5 = require('md5');
const model = require('../Model');
const { generateToken } = require('../Token/token');

const login = async (userName, password) => {
  const hashPassword = md5(password);
  const user = await model.login(userName);

  if (user == null) return { code: 404, message: 'user not exist' };

  if (user.password !== hashPassword) return { code: 404, message: 'Incorrect E-mail or password' };

  // eslint-disable-next-line no-underscore-dangle
  delete user._doc.password;
  const token = generateToken({ user });

  // eslint-disable-next-line no-underscore-dangle
  return { ...user._doc, token };
};

const create = async (userName, password) => {
  const hashPassword = md5(password);
  await model.create(userName, hashPassword);

  const token = generateToken({ userName });

  return { userName, token };
};

module.exports = {
  login,
  create,
};
