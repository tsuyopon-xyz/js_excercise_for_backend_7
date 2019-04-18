const requestHelper = require('supertest');

const app = require('../app');

module.exports = {
  request: ({ method, endPoint, statusCode }) => {
    return requestHelper(app)
      [method](endPoint)
      .expect('Content-Type', /json/)
      .expect(statusCode);
  },
};
