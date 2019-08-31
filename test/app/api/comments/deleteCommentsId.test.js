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

describe('test 「DELETE /api/comments/:id」', () => {
  it('idが不正な場合はエラーになる', async () => {
    const response = await requestHelper.request({
      method: 'delete',
      endPoint: `/api/comments/${INVALID_ID}`,
      statusCode: 400
    });

    assert.deepEqual(response.body, {
      message: 'idに該当するcommentが存在しません'
    });
  });

  it('存在するIDを送信したら成功する', async () => {
    const oldComments = await getComments();

    const response = await requestHelper.request({
      method: 'delete',
      endPoint: `/api/comments/${VALID_ID}`,
      statusCode: 200
    });

    const deletedComment = response.body;
    assert.deepEqual(deletedComment, {
      id: VALID_ID,
      username: deletedComment.username,
      body: deletedComment.body,
      createdAt: deletedComment.createdAt,
      updatedAt: deletedComment.updatedAt
    });

    const currentComments = await getComments();
    assert.equal(
      oldComments.length,
      currentComments.length + 1,
      '削除後はデータが1件減っている'
    );
    assert.deepEqual(
      deletedComment,
      oldComments[0],
      `削除前の1件目のデータは、ID:${VALID_ID}のデータである`
    );
    assert.notDeepEqual(
      deletedComment,
      currentComments[0],
      `削除後の1件目のデータは、ID:${VALID_ID}のデータではない`
    );
  });
}); 