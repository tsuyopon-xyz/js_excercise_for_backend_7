const requestHelper = require('../../../helper/requestHelper');
const assert = require('power-assert');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200,
  });
  return response;
};

const putComment = async (code, data) => {
  const response = await requestHelper
    .request({
      method: 'put',
      endPoint: '/api/comments/:id',
      statusCode: code,
    })
    .send(data);
  return response;
};

describe('TEST 「PUT api/comments/:id」', () => {
  it('適切でないidを送ると400エラーが返る', async () => {
    const data = {
      id: null,
      username: 'test user',
      body: 'test body',
    };

    const response = await putComment(400, data);

    assert.deepEqual(response.body, {
      message: 'idに適切でない値が入っています、1以上の数字を入れてください',
    });
  });
  it('送られたidと紐つくコメントがないと400エラーが返る', async () => {
    const data = {
      id: 999999999999,
      username: 'test user',
      body: 'test body',
    };

    const response = await putComment(400, data);

    assert.deepEqual(response.body, {
      message: 'idと合致するCommentが見つかりません',
    });
  });
  it('usernameを送らなかった場合400エラーが返る', async () => {
    const data = {
      id: 2,
      body: 'test body',
    };

    const response = await putComment(400, data);

    assert.deepEqual(response.body, {
      message: 'usernameは必須です',
    });
  });
  it('bodyを送らなかった場合400エラーが返る', async () => {
    const data = {
      id: 2,
      username: 'test user',
    };

    const response = await putComment(400, data);

    assert.deepEqual(response.body, {
      message: 'bodyは必須です',
    });
  });
  it('適切なデータを送った場合、idと紐つくコメント一件のusernameとbodyが変更され返ってくる、なお配列内にあったidと紐つくコメンは変更されたコメントに上書きされる', async () => {
    const oldComment = await getComments();

    const data = {
      id: 2,
      username: 'test updating user',
      body: 'test updating body',
    };

    const response = await putComment(200, data);

    const comment = response.body;
    assert.deepEqual(comment, {
      id: data.id,
      username: data.username,
      body: data.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    });

    assert.equal(oldComment[1] === comment, false);
  });
});
