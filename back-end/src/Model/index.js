const model = require('../connectionMongo');

const login = async (userName) => {
  const user = await model.findOne({ userName });

  return user;
};

const create = async (userName, password) => {
  const user = await model.create({ userName, password });

  return user;
};

module.exports = {
  login,
  create,
};
