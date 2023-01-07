/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const model = require('../connectionMongo');
const modelfind = require('../Model');
const { dataDb } = require('./Mock');

describe('Model', () => {
  beforeEach(() => sinon.restore());

  describe('Login', () => {
    const userName = 'userNameTeste';
    it('Realizando login com usuário', async () => {
      sinon.stub(model, 'findOne').resolves(dataDb[0]);
      const data = await modelfind.login(userName);
      expect(data).to.be.equal(dataDb[0]);
    });
  });
});
