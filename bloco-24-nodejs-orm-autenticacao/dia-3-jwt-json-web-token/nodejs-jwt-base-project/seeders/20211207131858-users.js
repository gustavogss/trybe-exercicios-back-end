module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        username: 'Raul Seixas',
        password: 'tocaraul',
      },
      {
        id: 2,
        username: 'Cássia Eller',
        password: 'relicario',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
