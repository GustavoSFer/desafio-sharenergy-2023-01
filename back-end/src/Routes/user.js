const { Router } = require('express');
const controller = require('../Controller');

const route = Router();

route.get('/', controller.login);

module.exports = route;
