const Comment = require('../models/Comment');

module.exports = {
  getComment: (req, res) => {
    const storedComments = Comment.findAll();

    res.status(200).json(storedComments);
  },
};
