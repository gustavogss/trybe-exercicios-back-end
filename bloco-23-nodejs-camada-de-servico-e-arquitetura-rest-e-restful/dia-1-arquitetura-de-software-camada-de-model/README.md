Arquitetura de Software - é a organização de um sistema de software, seus componentes, 
relacionamentos, responsabilidades, e quais camadas possui.

Regras de negócio - são os códigos que controlam o comportamento das aplicações.

Na Arquitetura MSC temos três tipos de camadas:

- Camada de Modelo (M): Onde iremos executar as operações do banco de dados, como criar 
 e executar queries.

- Camada de Serviço (S): Onde estruturaremos as nossas regras de negócio, geralmente é 
quem chama os métodos definidos na camada de modelo.

- Camada de Controladores (C): Interface mais próxima da pessoa usuária ou de uma 
requisição, vai processar e chamar as devidas funções da camada de serviço.

Obs.: Algumas vezes a camada de Controladores pode se comunicar direto com a camada de 
Modelo, dispensando o uso da camada de Serviço, principalmente em situações em que não 
temos uma regra de negócio tão complexa. 
Mas cuidado, isso deve ser usado apenas em casos específicos, e uma vez que um endpoint 
exija o uso de uma camada de Serviço, o ideal é que todos os outros também utilizem essa
 camada, para que a arquitetura seja respeitada e a aplicação não se torne "bagunçada".


----------------------------------- CAMADA MODEL ------------------------------------

MODEL - é a camada onde manipulamos e definimos a estrutura dos nossos dados. Todo 
 aos dados deve passar por essa camada. É responsável por abstrair completamente os 
 detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar 
 e manipular esses dados. Por exemplo, é responsabilidade da camada de models estabelecer
  uma conexão com o banco de dados.

O model se encarrega de fazer o mapeamento dos dados armazenados para as entidades 
existentes no domínio do seu negócio.

A camada Model deve ser desacoplada das outras camadas da aplicação para não haver 
conflitos.

- Exemplo de um model:

// userModel.js

 const db = require('./db'); // Arquivo que representa a conexão com o banco

    async function getUser (username) {
        return db.findOne({ username })
        .then(result => result || null);
    }
    

 - Criado o arquivo Model, podemos utiliza-lo em qualquer lugar:

    // cli.js

    const readline = require('readline-sync');
    const userModel = require('./userModel');

    async function start() {
        const username = readline.question('Digite seu nome de usuário');
        const user = await userModel.getUser(username);

        if (!user) {
            return console.log('Usuário não encontrado');
        }

        console.log('Aqui estão os dados do usuário:');
        console.log(user);
    }

    start();
    
    
  - Podemos utilizar esse model em um middleware também: 

    // getUserMiddleware.js

    const userModel = require('./userModel');

    asyc function getUserMiddleware (req, res, next) {
        const { username } = req.body;

    try {
          const user = await userModel.getUser(username);

            if (!user) {
                return res.status(404).json({ message: 'user não encontrado' });
            }

            return res.status(200).json(user);
        }catch(e){
            res.status(500).json({message: `Algo deu errado :(`});
        }
    }


- Obs. Dessa forma, caso nossos usuários passem a estar armazenados em outro lugar, como 
num arquivo, ou num outro banco de dados, nós só precisaremos alterar o arquivo userModel.js e, automaticamente, tudo volta a funcionar.


----------------------------------- MODEL COM MYSQL ------------------------------------

1 - Criar o banco com as tabelas e dados

2 - Criar a pasta do arquivo, e executar o comando: npm init -y

3 - Instalar o mysql na pasta do projeto: npm install mysql2

4 - Instalar o express e body-parser: npm install express body-parser

5 - Instalar o nodemon com modo de desenvolvimento: npm install nodemon -D

6 - Depois de tudo instalado, entra no vscode, e criar a pasta module com o arquivo
 connection.js para fazer a conexão com bd.

/model/connection.js

const mysql = require('mysql2/promisse');

const connection = mysql.createPool({
  user: 'root',
  password: '12345678',
  host: 'localhost',
  database: 'model_example',
  port: 3364,
});

module.exports = connection;

O metodo createPool serve para manter uma conexão do banco de dados ativa.

Para criar nossa camada model:

const connection = require("./connnection");

const getAll = async () => {
  const result = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors"
  );
  return result;
};
module.exports = {
  getAll,
};




 




















