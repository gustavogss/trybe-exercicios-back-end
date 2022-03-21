Esse projeto é uma API base para ser utilizada na [aula sobre JWT](https://app.betrybe.com/course/back-end/autenticacao-e-upload-de-arquivos/nodejs-jwt-json-web-token/acf1c24f-d531-4cf0-be9b-2384e37799d7/) do curso de NodeJS da Trybe.

## Baixando o projeto

No seu terminal, cmd, power shell ou bash execute os seguintes comandos:

- `git clone git@github.com:tryber/nodejs-jwt-base-project.git`
- `cd nodejs-jwt-base-project`
- `npm i`

## Preparando o ambiente

- Faça uma cópia do arquivo `.env.example`, criando um arquivo `.env` com as suas credenciais SQL;
- No seu terminal, execute o comando `npm start`;
  - Esse comando vai, automaticamente, rodar o script de `prestart`, que inicializará o banco com o `sequelize`.
- O comando acima irá criar o banco de dados `jwt_exercises_dev` e povoar as tabelas `Users` e `Posts`.

## Estrutura base do projeto

Abaixo, está a estrutura base do projeto. Ele implementa uma API em NodeJS e Express que permite criar usuários, listar posts e fazer login. O projeto base contém uma autenticação simples. Durante a aula, é mostrado como adicionar à API autenticação via JWT.
 
```
├── README.md
├── api
│  ├── routes.js
│  └── server.js
├── config
│  └── config.js
├── controllers
│  ├── createUser.js
│  ├── getUsers.js  
│  ├── login.js
│  └── posts.js
├── migrations
│  ├── users.js
│  └── posts.js  
├── models
│  ├── index.js
│  ├── Post.js
│  └── User.js
├── seeders
│  ├── users.js
│  └── posts.js
├── .env.example
├── package-lock.json
└── package.json
```

### Modelos

Modelos são responsáveis por fazer o mapeamento entre as entidades que sua aplicação manipula e a camada de dados. Contêm todas as interações responsáveis por ler e escrever dados no seu banco de dados.

Estão organizados dentro da pasta `models`.

### Migrations

Migrations são responsáveis por criar e/ou restaurar as alterações no banco de dados.

Estão organizados dentro da pasta `migrations` e há uma migration para cada tabela no banco de dados. No exemplo, existem as tabelas `Users` e `Posts`.

### Seeders

Seeders são responsáveis por povoar os dados das tabelas do banco de dados.

Estão organizadas dentro da pasta `seeders`. No exemplo, existem seeders para as tabelas `Users` e `Posts`.

### Controllers

Controllers são as funções utilizadas como callbacks na definição de rotas.
Eles são responsáveis por lidar com as requisições que chegam nas diferentes rotas de sua aplicação e criando a resposta que será enviada para o cliente. Normalmente, interagem com um ou mais modelos para ler/escrever dados do banco de dados.

A API possui quatro controllers:

  - `createUser.js`: Lida com a criação de novo usuários.

  - `getUsers.js`: Encontra os usuários cadastrados.
  
  - `login.js`: Responsável pela lógica de login.

  - `posts.js`: Encontra os posts de um usuário.
 
### `api/routes.js`

Esse é um arquivo que concentra os controllers do projeto.
 
### `api/server.js`

Aqui é onde é criado de fato a API com o Express. Também é onde todas as rotas são configuradas.

### `.env.example` -> `.env`

Este arquivo é responsável por guardar os dados sensíveis do servidor. Este arquivo deve ser editado com as credencias MySQL da pessoa desenvolvedora. Neste exemplo, está sendo utilizado o usuário `root` com senha inexistente.
**⚠️ O arquivo `.env` arquivo não deve ser commitado na esmagadora parte das vezes, pois armazena dados sensíveis. **
**⚠️ Lembre-se de editar este arquivo com as suas credencias.**
