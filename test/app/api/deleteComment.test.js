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
  it('適切なid値を送ると、idと合致するCommentが返ってくる、また該当のCommentは配列内から削除される', async () => {
    const oldComments = await getComments();

    const validId = 4;
    const response = await deleteComment(validId, 200);
    const comment = response.body;

    assert.deepStrictEqual(comment, {
      id: validId,
      username: comment.username,
      body: comment.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    });

    const currentComments = await getComments();

    assert.strictEqual(oldComments.length, currentComments.length + 1);
  });
});
