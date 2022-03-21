module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Posts',
      [{
        id: 1,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
      },
      {
        id: 2,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
      },
      {
        id: 3,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
      },
      {
        id: 4,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};