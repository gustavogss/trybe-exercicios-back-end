module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};