const requestHelper = require('../../../helper/requestHelper');
const assert = require('power-assert');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200,
  });

  return response.body;
};

const requestComment = async (code, data) => {
  const response = await requestHelper
    .request({
      method: 'post',
      endPoint: '/api/comments',
      statusCode: code,
    })
    .send(data);
  return response;
};

describe('test 「POST /api/comments」', () => {
  it('usernameを送らなかった場合400エラーが返る', async () => {
    const data = { body: 'test body' };

    const response = await requestComment(400, data);

    assert.deepEqual(response.body, { message: 'usernameは必須です' });
  });
  it('bodyを送らなかった場合400エラーが返る', async () => {
    const data = { username: 'test user' };

    const response = await requestComment(400, data);

    assert.deepEqual(response.body, { message: 'bodyは必須です' });
  });
  it('適切なデータを送った場合、新規作成されたコメントが一件返ってくる、また配列内には新規作成されたコメントが一件格納されている', async () => {
    const oldComments = await getComments();

    const data = { username: 'user', body: 'body' };

    const response = await requestComment(200, data);

    const comment = response.body;
    assert.deepEqual(comment, {
      id: comment.id,
      username: data.username,
      body: data.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    });

    const currentComments = await getComments();

    assert.equal(oldComments.length + 1, currentComments.length);
  });
});
