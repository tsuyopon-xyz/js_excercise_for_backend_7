const Comment = require('../models/Comment');

module.exports = {
  getComments: (req, res) => {
    const storedComments = Comment.findAll();

    res.status(200).json(storedComments);
  },
  postComment: (req, res) => {
    try {
      const { username, body } = req.body;
      const createdComment = Comment.createComment({ username, body });

      res.status(200).json(createdComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
