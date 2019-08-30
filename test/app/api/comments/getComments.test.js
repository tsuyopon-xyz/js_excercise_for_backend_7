const assert = require('power-assert');
const requestHelper = require('../../../helper/requestHelper');

describe('test 「GET /api/comments」', () => {
  it('returns comments in resopnse.body', async () => {
    const response = await requestHelper.request({
      method: 'get',
      endPoint: '/api/comments',
      statusCode: 200
    });

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