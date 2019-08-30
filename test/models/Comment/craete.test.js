const assert = require('power-assert');
const Comment = require('../../../models/Comment');

describe('Comment.create', () => {
  it('Comment.createはメソッドである', () => {
    assert.equal(typeof Comment.create === 'function', true);
  });

  it('メソッド実行時、引数にusernameプロパティを含むオブジェクトが無いとエラーになる', () => {
    const dataList = [
      {}, // empty data
      { body: '詳細文' } // no username
    ];
    dataList.forEach(data => {
      try {
        Comment.create(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'usernameは必須です');
      }
    });
  });

  it('メソッド実行時、引数にbodyプロパティを含むオブジェクトが無いとエラーになる', () => {
    try {
      Comment.create({username: 'ユーザー名'});
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'bodyは必須です');
    }
  });

  it('メソッド実行時、正しい引数をわたすと新規にCommentデータ作成して、作成したCommentを返す', () => {
    const oldComments = Comment.findAll();
    const data = {
      username: 'dummy username',
      body: 'dummy body'
    };

    const createdComment = Comment.create(data);
    assert.deepEqual(createdComment, {
      id: createdComment.id,
      username: data.username,
      body: data.body,
      createdAt: createdComment.createdAt,
      updatedAt: createdComment.updatedAt
    });

    const currentComments = Comment.findAll();
    assert.equal(oldComments.length + 1, currentComments.length);

  });
}); 