-------------------- Testando APIs REST com testes de Integração -----------------------

1 - Os testes de integração servem para verificar se a comunicação entre os componentes de um sistema estão ocorrendo conforme o esperado.

2 - Nossa integração partirá do recebimento do objeto da requisição ( request ), seguindo com o controlador ( controller ), o serviço ( service ) e terminando no modelo ( model ). 

Iremos apenas isolar a comunicação do model com o Banco de dados para evitarmos operações de IO.

2 - Para começar testando nossa aplicação devemos criar uma pasta tests, e instalar as bibliotecas de testes: npm i -D mocha chai sinon

3 - Depois é necessário a inicialização de um script de testes no package.json :

..
"scripts": {
    ...
    "test": "mocha ./tests/**/*$NAME*.test.js --exit",
},

--------------------- Utilizando um Mock para o Sequelize ----------------------------

1 - Nos testes de integração, devemos evitar ao máximo operações de entrada e saída. E para resolvermos isso temos três formas a adotar:

a) Utilizar um banco temporário para realização de testes - poderíamos gerar um banco de dados qualquer para fazer as operações de IO, sem afetar seu banco de dados principal:

Inclusive quando inicializamos o Sequelize pela primeira vez (na criação da estrutura) , por padrão, ele já prevê sua utilização em ambientes diferentes.

./config/config.json

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

Cada um destes ambientes pode ser acessado quando rodamos nossa aplicação (ou os comandos do Sequelize) com uma variável de ambiente chamada NODE_ENV .

NODE_ENV=teste npm start

Se não definirmos essa variável, o sequelize irá entender que o ambiente escolhido é o de desenvolvimento.

- Desvatagens:

 Ele depende que você tenha a disponibilidade de um servidor MySQL funcionando (seja remoto ou não), e isso se torna um grande impeditivoproblema quando queremos fazer testes que validem somente a API, sem depender de um banco de dados.
 
E outra, o seu script de teste também terá sempre que fazer o trabalho de resetar o banco de dados para garantir que o ambiente está limpo para uso.


b) Utilizar bibliotecas específicas para testes: 

Com o Sequelize, podemos usar uma biblioteca chamada Sequelize Test Helpers , que possui recursos avançados que podem te ajudar a criar mocks de modelos.


c) Gerar stubs simples direcionando para funções falsas: Aqui esperamos a consulta de um modelo do Sequelize , ou seja, dizemos para o Sinon , que uma certa consulta no modelo X deve, obrigatoriamente, retornar um resultado Y .

Dessa forma, podemos retornar valores estáticos ou podemos criar scripts que "simulem" o comportamento do Sequelize no nosso contexto de teste.

Para começarmos usar esse método, devemos criar nosso modelo fake dentro da pasta de test.

./tests/mock/models/Users.json

[
  {
    "id": 1,
    "username": "Saul Reixas",
    "password": "tocasaul"
  },
  {
    "id": 2,
    "username": "Kássia Lemmer",
    "password": "kelimmar"
  }
]

Dentro da pasta test, devemos também criar nosso gerenciador de modelos" em um index.js :

./tests/mock/models/index.js

const Users = require('./Users.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const User = {
  create: async (data) => mockCreate(Users, data),
  findAll: async () => Users,
};

module.exports = {
  User,
};

Assim podemos usar isso para interceptar a função verdadeira do Sequelize, substituindo pela nossa.

----------------------------- Escrevendo testes -------------------------------------

1 - Iremos testar nossa API de maneira integrada, ou seja, queremos testar que dado um valor de entrada, o mesmo será processado pelas diversas partes da API, e então, nos dar um retorno conforme estabelecido pelo nosso "contrato". 

Diferente de como fizemos antes testando cada unidade da API com os testes unitários por camada.

2 - Primeiro vamos validar a criação de um User. Então iremos construir um teste que valida a requisição GET para nossa rota /api/users : Ou seja, um teste que espera que exista, na API, a comunicação controller <-> service <-> model , onde o model é um mock que traz um conjunto de dados hardcoded . O que caracteriza um teste de integração.

3 - Estamos validando se a partir de uma requisição em uma ponta, existe o acesso (ou a tentativa de acesso) a um modelo na outra ponta. No nosso caso, se o model User é acessado em algum momento no service , e em condições normais , nos retorna aquilo que é esperado.

4 - Aqui nosso contrato espera que uma requisição GET em /api/users retorne com o status http 200 - OK e com uma lista inicial contendo dois registros de pessoas usuárias.

5 - A partir da definição do contrato. Podemos transformá-lo em teste convertendo-o para afirmações. Sendo assim, criaremos um arquivo em ./tests , chamado createUsers.test.js escrevendo o seguuinte teste:

./tests/createUsers.test.js

const chai = require('chai');

const { expect } = chai;

describe('Rota /api/users', () => {
    describe('Consulta a lista de pessoas usuárias', () => {
        let response;

        before(async () => {
            response = await minhaRequisicao();
        });

        it(
            'A requisição GET para a rota traz uma lista inicial ' +
            'contendo dois registros de pessoas usuárias',
            () => {
              expect(response.body).to.have.length(2);
            }
        );

        it('Essa requisição deve retornar código de status 200', () => {
            expect(response).to.have.status(200);
        });
    });
});

- minhaRequisicao() está sem funcionalidade e precisamos de algum recurso que nos ajude a validar nossa API. Para isso utilizaremos o plugin Chai HTTP. Que simula uma request a nossa API, sem inicializa-la manualmente. Precisamos instalá-lo:

npm install -D chai-http

Depois precisamos importar o plugin na instância do chai, no arquivo createUsers.js. Adicionado o plugin ao chai, poderemos consumir nosso server em express através dele, sem que haja a necessidade de subirmos a api manualmente. Para isso basta importarmos nossa api e então passamos ela como parâmetro ao método request do chai. 

./tests/createUsers.test.js

// const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// const { expect } = chai;

// ...


Como uma boa prática para a arquitetura da API, é fazer a separação do conjunto da definição das rotas e regras de middlewares (Em um arquivo app.js). Que vai ser consumido pelo chaiHttp do servidor que consome essas regras. O servidor continuaria em server.js:

./api/app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

/*
    Detalhe para a exportação do `app`, já que
    precisaremos dele nos testes com `chaiHttp` e
    para rodar nosso `server.js`
*/
module.exports = app;












