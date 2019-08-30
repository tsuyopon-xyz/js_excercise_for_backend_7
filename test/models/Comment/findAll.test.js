const assert = require('power-assert');
const Comment = require('../../../models/Comment');

describe('Comment.findAllメソッドのテスト', () => {
  it('配列の決められたデータ構造でCommentが格納されている', () => {
    const comments = Comment.findAll();
  });
});