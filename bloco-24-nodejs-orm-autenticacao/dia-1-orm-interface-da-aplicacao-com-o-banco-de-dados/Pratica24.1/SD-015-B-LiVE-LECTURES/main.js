const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize ({
  host: 'localhost',
  username: 'root',
  password: 12345678,
  database: 'churrascodb',
  dialect: 'mysql'
});

const Convidado = sequelize.define('Convidado', {
  name: DataTypes.STRING,
  telefone: DataTypes.STRING,  
},
{
timestamps: false,
tableName: 'convidados',
});

(async () =>  {
  Convidado.create({name: 'Gustavo', telefone: '11 1111-1111'})
})()

// (async () =>  {
//   const products = await Product.findAll();
//   console.log(products);
// })();
