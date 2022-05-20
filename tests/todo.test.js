/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');
const { queries } = require('../models/todoModel');

chai.use(chaiHttp);

const { expect } = chai;

describe('test todo route', () => {
  describe('test todo post method', () => {
    it('when everything goes well', async () => {
      const todo = 'my todo to do';

      const supabaseMock = {
        data: {
          id: 1,
          todo,
          finished: false,
        },
      };

      sinon.stub(queries, 'insert').resolves(supabaseMock);

      const { body, status } = await chai
        .request(app)
        .post('/todo')
        .send({ todo });

      expect(body).to.be.deep.equal(supabaseMock.data);
      expect(status).to.be.equal(201);
      queries.insert.restore();
    });

    it('when databse returns a error', async () => {
      const todo = 'my todo to do';

      const supabaseMock = {
        error: { message: 'error when insert' },
      };

      sinon.stub(queries, 'insert').resolves(supabaseMock);

      const { body } = await chai
        .request(app)
        .post('/todo')
        .send({ todo });

      expect(body).to.be.deep.equal(supabaseMock.error);
      queries.insert.restore();
    });
  });

  describe('test todo get method', () => {
    it('when everything goes well', async () => {
      const supabaseMock = {
        data: [
          {
            id: 1,
            todo: 'my todo to do',
            finished: false,
          },
        ],
      };

      sinon.stub(queries, 'getAll').resolves(supabaseMock);

      const { body, status } = await chai
        .request(app)
        .get('/todo');

      expect(body).to.be.deep.equal(supabaseMock.data);
      expect(status).to.be.equal(200);
      queries.getAll.restore();
    });

    it('when database returns an error', async () => {
      const supabaseMock = {
        error: { message: 'error when insert' },
      };

      sinon.stub(queries, 'getAll').resolves(supabaseMock);

      const { body, status } = await chai
        .request(app)
        .get('/todo');

      expect(body).to.be.deep.equal(supabaseMock.error);
      expect(status).to.be.equal(500);
      queries.getAll.restore();
    });
  });

  describe('test todo delete method', () => {
    it('when everything goes well', async () => {
      const supabaseMock = {
        data: [
          {
            id: 1,
            todo: 'my todo to do',
            finished: false,
          },
        ],
      };

      const id = 1;

      sinon.stub(queries, 'deleteTodo').resolves(supabaseMock);

      const { body, status } = await chai
        .request(app)
        .delete('/todo')
        .send({ id });

      expect(body).to.be.deep.equal(supabaseMock.data);
      expect(status).to.be.equal(200);
      queries.deleteTodo.restore();
    });
    it('when database returns an error', async () => {
      const supabaseMock = {
        error: { message: 'error when insert' },
      };

      const id = 1;

      sinon.stub(queries, 'deleteTodo').resolves(supabaseMock);

      const { body, status } = await chai
        .request(app)
        .delete('/todo')
        .send({ id });

      expect(body).to.be.deep.equal(supabaseMock.error);
      expect(status).to.be.equal(500);
      queries.deleteTodo.restore();
    });
  });
});
