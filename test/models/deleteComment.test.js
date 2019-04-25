const assert = require('power-assert');
const Comment = require('../../models/Comment');

describe('Comment.deleteCommentのテスト', () => {
  it('Comment.deleteCommentはメソッドである', () => {
    assert.strictEqual(typeof Comment.deleteComment, 'function');
  });
  it('idの引数に不正な値が入っていた場合、エラーが返る', () => {
    const invalidIdList = [
      { id: 0 },
      { id: -1 },
      { id: null },
      { id: {} },
      { id: [] },
      { id: '1' },
    ];

    invalidIdList.forEach(id => {
      try {
        Comment.deleteComment(id);
        assert.fail();
      } catch (error) {
        assert.strictEqual(
          error.message,
          'idに適切でない値が入っています、1以上の数字を入れてください'
        );
      }
    });
  });
  it('idのプロパティ値と合致するCommentがない場合、エラーが返る', () => {
    const invalidId = { id: 999999999 };

    try {
      Comment.deleteComment(invalidId);
      assert.fail();
    } catch (error) {
      assert.strictEqual(error.message, 'idと合致するCommentが見つかりません');
    }
  });
  it('適切なid値を送った場合、idと合致するComment一件が削除され、返される', () => {});
  const validId = { id: 1 };

  const comment = Comment.deleteComment(validId);
  assert.deepStrictEqual(comment, {
    id: validId.id,
    username: comment.username,
    body: comment.body,
    createdAt: comment.createdAt,
    updatadAt: comment.updatadAt,
  });
});
