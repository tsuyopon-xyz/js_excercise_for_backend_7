const request = require('supertest');
const assert = require('power-assert');

const app = require('../../../app');

describe('test 「GET /api/comments」', () => {
  it('GETリクエストで返されたデータは適切である', async () => {
    const response = await request(app)
      .get('/api/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    const comments = response.body;
    assert.equal(Array.isArray(comments), true);
  });
});
