const assert = require('power-assert');
const Comment = require('../../models/Comment');

describe('Comment.updateCommentのテスト', () => {
  it('Comment.updateCommentはメソッドである', () => {
    assert.equal(typeof Comment.updateComment, 'function');
  });
});
