const Comments = require('../models/Comment');

module.exports = {
  getComment: (req, res) => {
    const storedComments = Comments.findAll();

    res.status(200).json(storedComments);
  },
};
