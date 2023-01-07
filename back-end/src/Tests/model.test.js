/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const model = require('../connectionMongo');
const modelfind = require('../Model');
const { dataDb, createUser } = require('./Mock');

describe('Model', () => {
  beforeEach(() => sinon.restore());

  describe('Login', () => {
    const userName = 'userNameTeste';
    it('Realizando login com usuário', async () => {
      sinon.stub(model, 'findOne').resolves(dataDb[0]);
      const data = await modelfind.login(userName);
      expect(data).to.be.equal(dataDb[0]);
    });

    it('Criando novo usuario', async () => {
      const email = 'gustavo@gmail.com';
      const password = 'gustavo123';
      sinon.stub(model, 'create').resolves(createUser[0]);
      const create = await model.create(email, userName, password);
      expect(create).to.be.equal(createUser[0]);
    });
  });
});
