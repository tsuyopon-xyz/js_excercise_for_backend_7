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
});
