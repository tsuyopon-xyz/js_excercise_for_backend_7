const Comment = require('../models/Comment');

module.exports = {
  getComments: (req, res) => {
    const storedComments = Comment.findAll();
    console.log(storedComments);
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
  putComment: (req, res) => {
    try {
      const parsedId = parseInt(req.params.id, 10);
      const { username, body } = req.body;

      const updatedComment = Comment.updateComment({
        id: parsedId,
        username,
        body,
      });

      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteComment: (req, res) => {
    try {
      const parsedId = parseInt(req.params.id, 10);

      const removedComment = Comment.removeComment({
        id: parsedId,
      });

      res.status(200).json(removedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
