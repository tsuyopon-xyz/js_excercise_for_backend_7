const assert = require('power-assert');
const Comment = require('../../models/Comment');

describe('Comment.createCommentメソッドの作成', () => {
  it('Comment.createCommentはメソッドである', () => {
    assert.equal(typeof Comment.createComment, 'function');
  });
  it('usernameの引数に値が入ってない場合エラーが返される', () => {
    const dataList = [{}, { body: 'test body' }];

    dataList.forEach(data => {
      try {
        Comment.createComment(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'usernameは必須です');
      }
    });
  });
  it('bodyの引数に値が入ってない場合エラーが返される', () => {
    try {
      Comment.createComment({ username: 'test username' });
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'bodyは必須です');
    }
  });
  it('適切なデータを渡した際、新規にコメントを1件作成して、そのコメント一件を返す、配列には新たなコメントが1件入っている', () => {
    const oldComments = Comment.findAll();
    const data = {
      username: 'test username',
      body: 'test body',
    };

    const newComment = Comment.createComment(data);
    assert.deepEqual(newComment, {
      id: newComment.id,
      username: data.username,
      body: data.body,
      createdAt: newComment.createdAt,
      updatedAt: newComment.updatedAt,
    });

    const currentComments = Comment.findAll();
    assert.equal(oldComments.length + 1, currentComments.length);
  });
});
