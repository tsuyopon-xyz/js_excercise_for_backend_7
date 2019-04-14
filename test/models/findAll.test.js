const assert = require('power-assert');
const Comment = require('../../models/Comment');

describe('comment.findAllのテスト', () => {
  const comments = Comment.findAll();
  it('findAllはメソッドである', () => {
    assert.equal(typeof Comment.findAll, 'function');
  });
  it('commentsは配列である', () => {
    assert.equal(Array.isArray(comments), true);
  });
  it('commentsには適切にデータが格納されている', () => {
    comments.forEach(comment => {
      assert.deepEqual(comment, {
        id: comment.id,
        username: comment.username,
        body: comment.body,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
      });
    });
  });
});
