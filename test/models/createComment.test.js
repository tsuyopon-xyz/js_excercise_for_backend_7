const assert = require('power-assert');
const Comment = require('../../models/Comment');

assert;
Comment;
describe('Comment.createCommentメソッドの作成', () => {
  it('Comment.createCommentはメソッドである', () => {
    assert.equal(typeof Comment.createComment, 'function');
  });
  it('usernameにプロパティ値が入ってない場合エラーが返される', () => {
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
});
