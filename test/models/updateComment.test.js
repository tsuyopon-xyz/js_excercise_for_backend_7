const assert = require('power-assert');
const Comment = require('../../models/Comment');

describe('Comment.updateCommentのテスト', () => {
  it('Comment.updateCommentはメソッドである', () => {
    assert.equal(typeof Comment.updateComment, 'function');
  });
  it('idの引数に不正な値が入っていた場合エラーが返される', () => {
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
        Comment.updateComment(id);
        assert.fail();
      } catch (error) {
        assert.equal(
          error.message,
          'idに適切でない値が入っています、1以上の数字を入れてください'
        );
      }
    });
  });
  it('idのプロパティ値と合致するCommentがない場合エラーが返される', () => {
    const invalidId = { id: 9999999999 };

    try {
      Comment.updateComment(invalidId);
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'idと合致するCommentが見つかりません');
    }
  });
  it('usernameの引数に値が入ってない場合エラーが返される', () => {
    const data = { id: 1, body: 'test body' };

    try {
      Comment.updateComment(data);
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'usernameは必須です');
    }
  });
  it('bodyの引数に値が入ってない場合エラーが返される', () => {
    const data = { id: 1, username: 'test user' };

    try {
      Comment.updateComment(data);
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'bodyは必須です');
    }
  });
  it('適切なデータを渡した際、指定したidと合致するcommentのusernameとbodyが変更され、返される', () => {
    const data = { id: 1, username: 'update user', body: 'update body' };

    const changedComment = Comment.updateComment(data);
    assert.deepEqual(changedComment, {
      id: data.id,
      username: data.username,
      body: data.body,
      createdAt: changedComment.createdAt,
      updatedAt: changedComment.updatedAt,
    });
    assert.equal(changedComment.updatedAt > changedComment.createdAt, true); // 変更された日時の方と作成された日時が違うかのテスト

    const currentComments = Comment.findAll();
    assert.deepEqual(currentComments[0], changedComment); // 変更したコメントと同じID値の配列に組み込まれているコメントは同じかテスト
  });
});
