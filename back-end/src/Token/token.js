const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('./secret.txt', 'utf-8');

const generateToken = (payload) => {
  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  const validToken = jwt.verify(token, secret);
  return validToken;
};

const decodeToken = (token) => {
  const decoded = jwt.decode(token, secret);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
  decodeToken,
};
