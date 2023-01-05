const service = require('../Service');

const login = async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await service.login(userName, password);
  if (user.code) return next(user);

  return res.status(200).json(user);
};

const create = async (req, res, next) => {
  const { email, userName, password } = req.body;
  const user = await service.create(email, userName, password);
  if (user.code) return next(user);

  return res.status(200).json(user);
};

const getAll = async (req, res) => {
  const users = await service.getAll();

  return res.status(200).json(users);
};

module.exports = {
  login,
  create,
  getAll,
};
