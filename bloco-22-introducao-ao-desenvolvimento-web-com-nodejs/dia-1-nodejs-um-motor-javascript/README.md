
# INTRODUÇÃO AO NODEJS

1. Node.js surgiu do V8, que é a ferramenta do Google Chrome que ler e executar as instruções em JavaScript, ou seja, interpreta o código, é um runtime, ou seja, o NodeJs é um runtime do Javascript.

2. Runtime, engine ou interpretador é o software responsável por interpretar o código.

- Toda leitura e escrita que o Node realiza, tanto no disco quanto na rede, é feita de forma não bloqueante, ou seja, quando o servidor recebe uma requisição e precisa, buscar dados no banco de dados, as demais requisições não precisam esperar que a primeira termine para que possam ser atendidas. O Node.js realiza todas as suas operações de entrada e saída de dados de forma assíncrona , utilizando processamento concorrente.

3. O Node possui módulos independentes com escopo próprio, variavéis, fuunções, classes.

4. O Node possui três tipos de módulos: internos, locais e de terceiros.

4.1. Módulos internos (ou core modules ) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime:

- fs : Fornece uma API para interagir com o sistema de arquivos de forma geral;

- url : Provê utilitários para ler e manipular URLs;

- querystring : Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;

- util : Oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

4.2. Módulos locais são aqueles definidos juntamente à nossa aplicação. Representam funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes. Podem ser publicados no NPM para que outras pessoas possam baixá-los e utilizá-los.

4.3. Módulos de terceiros são aqueles criados por outras pessoas e disponibilizados para uso através do npm. 

- Resumindo os módulos podem ser internos (que vêm com o Node.js), locais (criados por nós na nossa máquina) ou de terceiros (baixados do NPM)

- Também podemos criar nossos próprios módulos.

5. NPM é a de linha de comando que realiza o gerenciamento dos pacotes NodeJS.

- Para utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo / pacote para o contexto atual no qual estamos.

6. Existem dois sistemas de módulos difundidos na comunidade JavaScript:

6.1. Módulos ES6 - os módulos são importados utlizando o import e exportados utlizando o export.
  
- O Node.js não possui suporte a módulos ES6 por padrão, sendo necessário o uso de transpiladores, como o Babel, ou supersets da linguagem, como o TypeScript, para  que esse recurso esteja disponível.

6.2. Módulos CommonJS - é o sistema de módulos implementado pelo Node.js nativamente. 
 
 - Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports
```
const brl = 5.37;
module.exports = brl;
```
7. Um módulo possui um escopo isolado, ou seja, suas funções, variáveis, classes e demais definições existem somente dentro do módulo. 

- O module.exports pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins:

```
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};
```

8. Com o module.exports estamos exportando tanto o valor brl quanto a função usdToBrl que converte um valor real em dolar

9. O Node já procura por arquivos terminados em .js ou .json e os considera como módulos.


### IMPORTANDO MÓDULOS

1 - Módulo Local - Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo require('./meuModulo')

- Para importarmos vários modulos de uma só vez, precisamos de um arquivo index.js:

```
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
```

- Para importarmos e utilizarmos o módulo meuModulo , basta passar o caminho da pasta como argumento para a função require:

```
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');1

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
```

2. Módulos Internos - Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require:

```
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');
```

3. Módulos de Terceiros - são importados passando seu nome como parâmetro para a função require, da mesma forma que os módulos internos. A diferença é que, como eles não são nativos, precisamos primeiramente instalá-los na pasta do projeto em que queremos utilizá-los.

- O Node procura por um módulo na pasta node_modules, caso não encontre passa para uma pasta superior, até encontrar.

### CLI DO NPM

1. O CLI do npm é uma ferramenta oficial que nos auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. 

2. Publicar um pacote como público no npm é gratuito e não há um limite de pacotes que se pode publicar. Existem, no entanto, taxas de 
assinaturas, caso desejemos hospedar pacotes de forma privada, ou seja, pacotes sob os quais só nós temos o controle de acesso.

3. npm init - nos permite criar, de forma rápida e simplificada, um novo pacote Node.js na pasta onde é executado. E o npm init -y criar
 um pacote com todos os valores padrão.

4. npm run - faz com que o npm execute um determinado script configurado no package.json.

5. Para ter um script chamado lint que execute a ferramenta de linter a nossa chave scripts fica assim:

```
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

- Para executar esse comando: npm run lint

6. npm start - age como um "atalho" para o comando npm run start , uma vez que sua função é executar o script start definido no package.json 

Por exemplo, se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js , é comum
criarmos o seguinte script:

```
{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}
```

7. npm install - responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote.

8. Formas de utilizar o npm install: 

- npm install <nome do pacote> : Baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json;

- npm install -D <nome do pacote> : Baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json 
, indicando que o pacote em questão não é necessário para executar a aplicação, mas é necessário para desenvolvimento, ou seja, 
para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies 
podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.

- npm install : Baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json . Sempre deve 
ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.

9. Todo pacote Node.js deve ter um arquivo index.js 

10. Pipelines são scripts que chamam outros scripts.

### MODULO REDLINESYC 

 1. O readline-sync é um módulo de terceiros, que serve para ler arquivos. Para podermos utilizar devemos instalá-lo em nosso projeto node, e depois importá-lo.

```
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
```
 
- A função question interpreta a resposta como uma string comum, ao passo que a função questionInt converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.
