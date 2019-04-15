const daysjs = require('dayjs');

const comments = [];

let nextId = 1;

class Comment {
  constructor({ username, body }) {
    this.id = nextId++;
    this.username = username;
    this.body = body;
    this.createdAt = daysjs().format('YYYY年MM月DD日 HH:mm:ss');
    this.updatedAt = daysjs().format('YYYY年MM月DD日 HH:mm:ss');
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
    return comments;
  },
  createComment: ({ username, body }) => {
    if (!username) {
      throw new Error('usernameは必須です');
    }

    const comment = new Comment({
      username: username,
      body: body,
    });

    comments.push(comment);
  },
};
