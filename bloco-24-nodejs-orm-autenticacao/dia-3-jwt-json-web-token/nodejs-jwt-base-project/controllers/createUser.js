const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({username, password});

    if (!user) throw Error;

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};
