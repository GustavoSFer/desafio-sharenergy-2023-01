const error = (err, _req, res, _next) => {
  console.log(_next);
  res.status(err.code).json({ message: err.message });
};

module.exports = error;
