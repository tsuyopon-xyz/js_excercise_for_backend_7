const request = require('supertest');
const assert = require('power-assert');
const app = require('../../../../app');

describe('test 「GET /api/comments」', () => {
  it('returns comments in resopnse.body', async () => {
    // 詳しくはsupertestのドキュメントを参考にする
    const response = await request(app)
      .get('/api/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const comments = response.body;
    assert.equal(Array.isArray(comments), true);
    comments.forEach((comment) => {
      assert.equal(typeof comment.id === 'number', true);
      assert.equal(typeof comment.username === 'string', true);
      assert.equal(typeof comment.body === 'string', true);
      assert.equal(typeof comment.createdAt === 'string', true);
      assert.equal(typeof comment.updatedAt === 'string', true);
    });
    console.log(response);
  });
}); 