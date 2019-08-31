const assert = require('power-assert');
const Comment = require('../../../models/Comment');

describe('Comment.remove', () => {
  it('Comment.removeはメソッドである', () => {
    assert.equal(typeof Comment.remove === 'function', true);
  });

  it('メソッド実行時、引数idの値が1以上の数値でないとエラーになる', () => {
    const invalidIdList = [
      0,
      -1,
      null,
      {},
      [],
      '1'
    ];

    invalidIdList.forEach(id => {
      try {
        Comment.remove(id);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'idは必須です(1以上の数値)');
      }
    });
  });

  it('メソッド実行時、idに紐づくデータが無いとエラーになる', () => {
    const notExistedId = 9999999;
    try {
      Comment.remove(notExistedId);
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'idに該当するcommentが存在しません');
    }
  });

  it('メソッド実行時、正しいidをわたすとidに該当する既存Commentを削除して、削除したCommentを返す', () => {
    const oldComments = Comment.findAll();
    const existedId = 3;

    const removedComment = Comment.remove(existedId);
    assert.deepEqual(removedComment, {
      id: existedId,
      username: removedComment.username,
      body: removedComment.body,
      createdAt: removedComment.createdAt,
      updatedAt: removedComment.updatedAt
    });

    const currentComments = Comment.findAll();
    assert.equal(
      oldComments.length,
      currentComments.length + 1,
      'Comment.removeメソッドが成功した後はcommentsの件数が1件少なくなっているはず'
    );
  });
}); 