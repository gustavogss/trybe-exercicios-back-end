-------------------  ORM ( mapeamento objeto-relacional )----------------------------

1 - ORM - é uma maneira de alterar e interagir com um banco de dados através de código JavaScript.

Utilizar um ORM na camada de Model facilita a manutenção e extensão de códigos.

A Sequelize é uma lib ORM nativa do Node que abstraem as funções do banco de dados e oculta a parte de sua complexidade. É compatível com o PostgreSQL, MariaDB, MySQL, SQLite e Microsoft SQL Server.

Mapeamento objeto-relacional ou ORM ( Object Relational Mapper ) é uma técnica/camada de mapeamento que permite fazer um mapeamento estrutural entre as entidades do banco e os objetos que as representam no código JavaScript. O mapeamento objeto-relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados.

--------------------------------------- SEQUELIZE -------------------------------------

1 - A maioria dos métodos fornecidos pelo Sequelize são assíncronos e, portanto, retornam Promises. Podemos usar then , catch, async e await, para tratar os retornos.

2 -  Boilerplates : trechos de código que podem ser reutilizados em muitos lugares com pouca ou nenhuma alteração.

3 - Usando o Sequelize, você pode evitar a criação de queries SQL para criar as tabelas em vez de um script SQL separado. Com isso, o seu código se torna mais legível , extensível e de fácil manutenção . Além disso, por meio do mapeamento por objetos relacionais ( Active Record ), é possível criar as relações e associações entre as tabelas com o próprio JavaScript. E ainda, é possível migrar seu database para outro banco de dados sem precisar reescrever todo o código (por exemplo: mudar de MySQL para o SQL server).

4 - Etapas de implementação do Sequelize: Instalação-> Inicialização-> Connectar com o BD -> Camada Model -> Migrations -> Operators.


5 -Para usar o sequelize precisamos do arquivo index dentro da camada Model que será gerado automaticamente, ele é muito importante para estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado.

---------------------------------- MODEL -----------------------------------------

1 - Os models são a essência do Sequelize. São abstrações que representam uma linha na tabela no BD e informa ao Sequelize várias coisas sobre: a entidade, como o nome e atributos (colunas) que ela possui (e seus tipos de dados).

2 - O model pode ser definido de duas formas:

 - Chamando pela função sequelize.define(modelName, attributes, options)

 - Estendendo Model como uma classe e chamando init(attributes, options)
 
 3 - A segunda forma é a padrão para utilização do sequelize, gerada automaticamente quando utilizado os comandos do CLI, e é utilizada em um paradigma Orientado a Objetos. Além de gerar o model, ele também gera uma migration que irá criar a tabela no banco de dados. 
 
Por exemplo para criar um model usando classes temos o comando: 

 npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string 
  
 -  O parâmetro --name se refere ao nome da tabela, no singular, pois se refere a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript;
 
 - O parâmetro --attributes se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo model.js gerado e na migration equivalente a este model.
  
Queremos criar uma tabela Users , que contém dados de vários usuários . O que fazemos primeiro é gerar um model que irá representar uma Instância de usuário , ou uma linha na tabela Users no nosso banco :
 
 npx sequelize model:generate --name User --attributes fullName:string
 
- Depois de rodar este comando, foi criado um arquivo user.js na pasta model, e na pasta migration foi criado o arquivo 20210310124202-create-user.js (os números, no início do nome do arquivo, significam a data e a hora de criação dele, seguindo o formato yyyy-MM-dd:hh:mm:ss ). 

models/user.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


4 -Como não trabalharemos com classes agora substituíremos o comando para:

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;

- Adicionamos uma nova coluna email no nosso model. Agora, temos o nosso model e migration criados. O nome do arquivo model fica user.js , e o nome da função model User, já na migration a tabela foi nomeada como Users.





