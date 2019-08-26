const comment = [];
let nextId = 1;

class Comment {
  constructor({title, body}) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = {};