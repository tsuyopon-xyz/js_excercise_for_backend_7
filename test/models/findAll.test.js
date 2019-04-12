const assert = require('power-assert');
const comment = require('../../models/Comment');

describe('findAllのテスト', () => {
    const comments = comment.findAll();
  it('findAllはメソッドである', () => {
    assert.equal(typeof comment.findAll, 'function');
  });
  it('commentsは配列である', () => {
      assert.equal(Array.isArray(comments), true)
  })
});
