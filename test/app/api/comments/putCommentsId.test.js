const assert = require('power-assert');
const requestHelper = require('../../../helper/requestHelper');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200
  });

  return response.body;
};

const VALID_ID = 1;
const INVALID_ID = 9999999999;

describe('test 「PUT /api/comments/:id」', () => {
  it('idが不正な場合はエラーになる', async () => {
    const putData = {
      username: 'test username',
      body: 'test body'
    };

    const response = await requestHelper.request({
      method: 'put',
      endPoint: `/api/comments/${INVALID_ID}`,
      statusCode: 400
    }).send(putData);

    assert.deepEqual(response.body, {
      message: 'idに該当するcommentが存在しません'
    });
  });

  it('usernameを送らなかったらエラーになる', async () => {
    const putData = {
      body: 'test body'
    };

    const response = await requestHelper.request({
      method: 'put',
      endPoint: `/api/comments/${VALID_ID}`,
      statusCode: 400
    }).send(putData);

    assert.deepEqual(response.body, {
      message: 'usernameは必須です'
    });
  });

  it('bobyを送らなかったらエラーになる', async () => {
    const putData = {
      username: 'test username'
    };

    const response = await requestHelper.request({
      method: 'put',
      endPoint: `/api/comments/${VALID_ID}`,
      statusCode: 400
    }).send(putData);

    assert.deepEqual(response.body, {
      message: 'bodyは必須です'
    });
  });

  it('不備なくデータを送信したら成功する', async () => {
    const oldComments = await getComments();

    const putData = {
      username: 'test username',
      body: 'test body'
    };

    const response = await requestHelper.request({
      method: 'put',
      endPoint: `/api/comments/${VALID_ID}`,
      statusCode: 200
    }).send(putData);

    const updatedTodo = response.body;
    assert.deepEqual(updatedTodo, {
      id: VALID_ID,
      username: putData.username,
      body: putData.body,
      createdAt: updatedTodo.createdAt,
      updatedAt: updatedTodo.updatedAt
    });

    const currentComments = await getComments();
    assert.notDeepEqual(
      oldComments,
      currentComments,
      '更新前後で「id:1」のデータは一致しないはず'
    );
  });
}); 