const Comments = [];

const nextId = 1;

class Comment {
  constructor({ username, body }) {
    (this.id = nextId++),
      (this.username = username),
      (this.body = body),
      (this.createdAt = new Date()),
      (this.updatedAt = new Date());
  }
}
