const { Router } = require('express');
const controller = require('../Controller');

const route = Router();

route.post('/', controller.login);
route.post('/create', controller.create);

module.exports = route;
