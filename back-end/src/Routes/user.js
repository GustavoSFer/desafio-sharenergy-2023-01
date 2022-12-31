const { Router } = require('express');
const controller = require('../Controller');

const route = Router();

route.post('/', controller.login);
route.post('/create', controller.create);
route.get('/', controller.getAll);

module.exports = route;
