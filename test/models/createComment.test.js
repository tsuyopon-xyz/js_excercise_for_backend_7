const assert = require('power-assert');
const Comment = require('../../models/Comment');

assert;
Comment;
describe('Comment.createCommentメソッドの作成', () => {
  it('Comment.createCommentはメソッドである', () => {
    assert.equal(typeof Comment.createComment, 'function');
  });
});
