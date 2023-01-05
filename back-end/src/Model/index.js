const model = require('../connectionMongo');

const login = async (userName) => {
  const user = await model.findOne({ userName });

  return user;
};

const create = async (email, userName, password) => {
  const user = await model.create({ email, userName, password });

  return user;
};

const getAll = async () => {
  const users = await model.find();

  return users;
};

module.exports = {
  login,
  create,
  getAll,
};
