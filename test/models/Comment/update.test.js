const assert = require('power-assert');
const Comment = require('../../../models/Comment');

describe('Comment.update', () => {
  it('Comment.updateはメソッドである', () => {
    assert.equal(typeof Comment.update === 'function', true);
  });

  it('メソッド実行時、引数にidプロパティ値(1以上の数値)を含むオブジェクトが無いとエラーになる', () => {
    const invalidDataList = [
      {},
      {id: 0},
      {id: -1},
      {id: null},
      {id: {}},
      {id: []},
      {id: '1'}
    ];

    invalidDataList.forEach(data => {
      try {
        Comment.update(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'idは必須です(1以上の数値)');
      }
    });
  });

  it('メソッド実行時、引数にusernameプロパティを含むオブジェクトが無いとエラーになる', () => {
    try {
      Comment.update({id: 1, body: 'body'});
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'usernameは必須です');
    }
  });

  it('メソッド実行時、引数にbodyプロパティを含むオブジェクトが無いとエラーになる', () => {
    try {
      Comment.update({id: 1, username: 'username'});
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'bodyは必須です');
    }
  });

  it('メソッド実行時、idに紐づくデータが無いとエラーになる', () => {
    const notExistedId = 9999999;
    try {
      Comment.update({
        id: notExistedId,
        username: 'username',
        body: 'body'
      });
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'idに該当するcommentが存在しません');
    }
  });

  it('メソッド実行時、正しい引数をわたすとidに該当する既存Commentを更新して、更新したCommentを返す', () => {
    const data = {
      id: 1,
      username: '更新後のusername',
      body: '更新後のbody'
    };

    const updatedComment = Comment.update(data);
    assert.deepEqual(updatedComment, {
      id: updatedComment.id,
      username: data.username,
      body: data.body,
      createdAt: updatedComment.createdAt,
      updatedAt: updatedComment.updatedAt
    });

    const currentComments = Comment.findAll();
    assert.deepEqual(currentComments[0], updatedComment);
    assert.equal(updatedComment.updatedAt > updatedComment.createdAt, true);
  });
}); 