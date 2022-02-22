-------------------------- TESTES NAS CAMADAS MSC - APIs REST ---------------------------------

1 - O TDD (Desenvolvimento guiado por testes) - é é um processo de desenvolvimento de software 
que visa o feedback rápido e a garantia do funcionamento da aplicação de acordo com o que foi 
definido.

2 - Ciclo TDD para os testes APIs REST:

- Escrever o teste que irá falhar;

- Implementar o suficiente para que o teste passe;

- Refatorar a lógica necessária sem mudar o comportamento.

3 - Tipos de teste: unitário e de integração.

* Testes Unitários (Unit Tests) - são testes de baixo nível, com foco em pequenas partes do software 
e tendem a ser mais rápidos, pois testam apenas partes isoladas do software.

No nosso caso podemos utilizá-lo para testar cada camada MSC de nossa API REST.

Por exemplo: Testando uma API REST MSC que permitir a realização de inserção e consulta de filmes 
no banco de dados:

a) Requisitos:

- A API deverá permitir a inserção de filmes no banco de dados:

Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento;

Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID;

- A API deverá permitir a consulta de todos os filmes, e retornar um array com os detalhes dos 
filmes.

* Antes de começarmos, primeiramente devemos estruturar a nossa API com o modelo MSC:


└── controllers
│   └── movieController.js
└── services
│   └── movieService.js
└── models
│   └── movieModel.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js


Obs. Para cada camada, temos um arquivo de test.

Depois iniciaremos o npm:

npm init -y

E instalaremos as dependências da nossa API REST:

npm install express body-parser mysql2

Depois instalaremos as libs de test:

npm install -D mocha chai sinon

E por último, vamos adicionar o script de teste no package.json:

...
  "scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit"
  },
...

O --exit força o encerramento do processo do mocha ao final dos testes

Obs. Podemos executar todos os testes contidos numa pasta utilizando o comando 
mocha <suaPastaDeTestes> --recursive , assim como podemos também definir um padrão de 
 de teste, como mocha .<suaPastaDeTestes>/**/*.test.js , que executará todos os arquivos 
 com final test.js dentro da sua pasta de testes.

 Aqui utilizaremos o: mocha ./tests/**/*$NAME*.test.js

 Dessa forma, podemos executar o comando npm test para validar todos os nossos testes, 
 ou, utilizar uma variável de ambiente NAME para definir um arquivo específico: 
 NAME=nomeDoArquivo npm test.


 ---------------------- INICIANDO OS TESTES UNITÁRIOS DA API REST -------------------------


Aqui começaremos pela camada MODEL, mas poderíamos começar por qualquer parte, já que estaremos 
fazendo testes unitários.

1 - A camada MODEL - é responsável pela estrutura dos dados e seu armazenamento, sendo assim 
iremos testar a comunicação com o BD e suas operações de escrita e leitura:

* Requisitos:

- A API deverá permitir a inserção de filmes no banco de dados:

Deve registrar então: nome, direção e ano de lançamento, e ao inserir um novo filme, o 
endpoint deverá responder com o ID.

Observações:

- Insere um novo filme no DB:
  * Quando é inserido com sucesso: retorna um array e o array está vazio;

  * Quando existir filmes criados: retorna um array, array não está vazio, possui itens do tipo
   objeto e tais itens possuem as propriedades: "id", "title", "releaseYear" e "directedBy"

- Escrevendo os testes no arquivo: tests/models/movieModel.test.js

const { expect } = require('chai'); //importando a lib chai

const MoviesModel = {
  create: () => {}
};

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

2 - Implementação de acordo com os testes escritos:

- Vamos criar o nosso arquivo de conexão com banco: models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'model_example'});

module.exports = connection;


- Criaremos o método para criar os filmes: models/movieModel.js

const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};

- Refatorar os testes: tests/models/movieModel.test.js

const sinon = require('sinon');

const connection = require('../../models/connection');

      before(async () => {
        const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

        sinon.stub(connection, 'execute').resolves(execute);
      });

      // Restauraremos a função `execute` original após os testes.
      after(async () => {
        connection.execute.restore();
      });




