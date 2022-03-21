const { Post } = require('../models');

module.exports = async (_req, res) => {
  const posts = await Post.findAll({ attributes: { exclude: 'id' } });
  res.status(200).json({ mockPosts: posts });
};
