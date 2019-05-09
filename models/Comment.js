const dayjs = require('dayjs');

const comments = [];

let nextId = 1;

class Comment {
  constructor({ username, body }) {
    this.id = nextId++;
    this.username = username;
    this.body = body;
    this.createdAt = dayjs().format('YYYY年MM月DD日 HH:mm:ss SSS');
    this.updatedAt = dayjs().format('YYYY年MM月DD日 HH:mm:ss SSS');
  }
}

// テスト、確認用に配列に挿入するDBの作成
for (let i = 0; i < 3; i++) {
  const comment = new Comment({
    username: 'username' + i,
    body: 'body' + i,
  });
  comments.push(comment);
}

module.exports = {
  findAll: () => {
    return comments.slice();
  },
  createComment: ({ username, body }) => {
    if (!username) {
      throw new Error('usernameは必須です');
    }
    if (!body) {
      throw new Error('bodyは必須です');
    }

    const comment = new Comment({
      username: username,
      body: body,
    });

    comments.push(comment);

    return comment;
  },
  updateComment: ({ id, username, body }) => {
    if (typeof id !== 'number' || id < 1) {
      throw new Error(
        'idに適切でない値が入っています、1以上の数字を入れてください'
      );
    }
    const comment = comments.find(comment => id === comment.id);
    if (!comment) {
      throw new Error('idと合致するCommentが見つかりません');
    }
    if (!username) {
      throw new Error('usernameは必須です');
    }
    if (!body) {
      throw new Error('bodyは必須です');
    }

    comment.username = username;
    comment.body = body;
    comment.updatedAt = dayjs().format('YYYY年MM月DD日 HH:mm:ss SSS');

    return comment;
  },
  removeComment: ({ id }) => {
    if (typeof id !== 'number' || id < 1) {
      throw new Error(
        'idに適切でない値が入っています、1以上の数字を入れてください'
      );
    }

    const target = comments.findIndex(comment => id === comment.id);
    if (target === -1) {
      throw new Error('idと合致するCommentが見つかりません');
    }
    const deletedComment = comments.splice(target, 1)[0];

    return deletedComment;
  },
};
