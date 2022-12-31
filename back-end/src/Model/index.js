const model = require('../connectionMongo');

const login = async (userName) => {
  const user = await model.findOne({ userName });

  return user;
};

module.exports = {
  login,
};
