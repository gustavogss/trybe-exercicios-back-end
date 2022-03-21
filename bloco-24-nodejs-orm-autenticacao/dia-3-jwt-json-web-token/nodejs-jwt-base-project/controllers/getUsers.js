const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
