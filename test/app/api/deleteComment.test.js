const assert = require('power-assert');
const requestHelper = require('../../../helper/requestHelper');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200,
  });
  return response.body;
};

getComments;

const deleteComment = async (id, code) => {
  const response = await requestHelper.request({
    method: 'delete',
    endPoint: `/api/comments/${id}`,
    statusCode: code,
  });
  return response;
};

describe('TEST 「DELETE api/comments/:id」', () => {
  it('適切でないid値を送るとエラーが返る', async () => {
    const response = await deleteComment(0, 400);

    assert.deepStrictEqual(response.body, {
      message: 'idに適切でない値が入っています、1以上の数字を入れてください',
    });
  });
  it('idの値と合致するCommentがない場合エラーが返る', async () => {
    const response = await deleteComment(9999999, 400);

    assert.deepStrictEqual(response.body, {
      message: 'idと合致するCommentが見つかりません',
    });
  });
});
