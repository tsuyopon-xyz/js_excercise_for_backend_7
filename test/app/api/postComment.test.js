const requestHelper = require('../../../helper/requestHelper');
const assert = require('power-assert');

describe('test 「POST /api/comments」', () => {
  it('usernameを送らなかった場合400エラーが返る', async () => {
    const data = { body: 'test body' };

    const response = await requestHelper
      .request({
        method: 'post',
        endPoint: '/api/comments',
        statusCode: 400,
      })
      .send(data);

    assert.deepEqual(response.body, { message: 'usernameは必須です' });
  });
  it('bodyを送らなかった場合400エラーが返る', async () => {
    const data = { username: 'test user' };

    const response = await requestHelper
      .request({
        method: 'post',
        endPoint: '/api/comments',
        statusCode: 400,
      })
      .send(data);

    assert.deepEqual(response.body, { message: 'bodyは必須です' });
  });
  it('適切なデータを送った場合、新規作成されたコメントが一件返ってくる', async () => {
    const data = { username: 'user', body: 'body' };

    const response = await requestHelper
      .request({
        method: 'post',
        endPoint: '/api/comments',
        statusCode: 200,
      })
      .send(data);

    const comment = response.body;
    assert.deepEqual(comment, {
      id: comment.id,
      username: data.username,
      body: data.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    });
  });
});
