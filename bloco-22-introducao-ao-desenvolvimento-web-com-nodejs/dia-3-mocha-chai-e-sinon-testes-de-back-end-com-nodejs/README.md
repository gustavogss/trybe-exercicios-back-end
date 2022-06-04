--------------------------- Ferramentas de Testes ---------------------------------

1 - Mocha e Chai - são ferramentas para implementar testes no back-end. Para utiliza-las
precisarmos instalar em modo de desenvolvimento, pois elas não vão ser usadas para 
produção.

npm install -D mocha chai

------------------------------ Tipos de Testes ------------------------------------

1 - Testes unitários : Trabalham presumindo um escopo limitado a um pequeno fragmento do
 seu código com interação mínima entre recursos externos. 
 Ex: Uma função com um fim específico, como uma função que soma dois números:

 // ./funcoes/calculo/soma.js
// Aqui podemos escrever testes pensando somente o comportamento esperado para 
função `soma`

const soma = (valorA, valorB) => valorA + valorB;

module.exports = soma;

2 - Testes de integração : Trabalham presumindo a junção de múltiplos escopos 
(que tecnicamente devem possuir, cada um, seus próprios testes) com interações 
entre eles. 
Ex: Uma função de calculadora que usa funções menores que eu posso testar 
isoladamente/ de forma unitária:

// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

const { soma, subtracao, multiplicacao, divisao } = require("./calculo");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      soma(valorA, valorB);
      break;
    case "subtracao":
      subtracao(valorA, valorB);
      break;
    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;
    case "divisao":
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};

module.exports = calculadora;

// Esse contexto fica mais evidente, quando temos operações mais complexas nos 
nossos testes, como operações que envolvem leitura de arquivos e consultas no 
banco de dados para composição de informações

3 - Testes de Ponta-a-ponta : Ou Fim-a-fim, esses testes pressupõe um fluxo de 
interação completo com a aplicação, de uma ponta a outra:

 Aqui, poderíamos pensar uma API que utiliza nossa calculadora (assim como diversas 
 outras funções mais complexas) na hora de realizar uma operação de venda de produtos. 
 Esse teste é o mais completo pois pressupõe que todos os demais testes estão ou 
 serão desenvolvidos.

 --------------------------- Escrevendo testes ---------------------------------

 1 - O Mocha nos fornece duas palavras reservadas para implementação de testes o describe
 e o it. Ele substitui aqueles logs que utilizamos para descrever cada teste. E é o responsável 
 por executar nossos testes.

 O describe nos permite adicionar uma descrição para um teste específico ou um grupo de 
 testes. Já o it nos permite sinalizar exatamente o cenário de teste que estamos testando 
 naquele ponto:

 describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});

O describe aceita dois parâmetros: o primeiro é a descrição e o segundo uma função 
para executar o cenário de teste

2 - O Chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de 
dizermos o que queremos testar e então ele validará se o resultado condiz com o 
esperado.

const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');

3 - mocha + chai :

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});

4 - to e o be - nos permite escrever a nossa assertion, mas não altera a validação, 
serve apenas para deixar a leitura do testes mais legível:

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

----------------------------------- TDD --------------------------------------------

1- TDD (Test Driven Development) - Desenvolvimento Orientado a Testes - A ideia principal 
aqui é começarmos escrever o código já pensando no que está sendo testado, ou seja, 
quais os cenários que precisamos cobrir e também como nosso código precisa estar 
estruturado para que possamos testá-lo, já que códigos menos estruturados 
normalmente são mais difíceis de serem testados.

2 - Passos para o TDD:

- Antes de qualquer coisa, precisamos interpretar os requisitos, pensando nos 
comportamentos que iremos implementar e na estrutura do código: se será uma função, 
um módulo, quais os inputs, os outputs.

- Depois começamos a escrever os testes, criaremos a estrutura de describes e its.

- Depois, escrevemos as asserções. Criaremos chamadas para esse código, o que 
significa que nossos testes irão falhar.

- Depois dos testes criados, vamos a implementação do nosso código. A ideia é 
escrever os códigos pensando nos testes e, conforme vamos cobrindo os cenários, 
nossos testes que antes quebravam começam a passar.

--------------------------------------------------------------------------------

1 - Test Doubles - são objetos que fingem ser o outro objeto para fins de testes.

2 - Sinon é uma ferramenta que fornece funções para diversos tipos dos Test Doubles ou, 
Dublês de Testes.

Stubs são objetos que podemos utilizar para simular interações com dependências externas 
ao que estamos testando de fato. Para utilizarmos devemos instalar em modo de Desenvolvimento:

npm install --save-dev sinon

Para criar um stub para a função de leitura do fs:

const fs = require('fs');
const sinon = require('sinon');

sinon.stub(fs, 'readFileSync').returns('Valor a ser retornado');

Perceba que precisamos importar o módulo fs e, então, falamos para o sinon criar um 
stub para a função readFileSync que retornará 'Valor a ser retornado' , 
conforme especificamos na chamada para returns .

---------------------------------------------------------------------------------------

O ideal é sempre criarmos Tests Doubles para o escopo de cada cenário de teste. E o mocha
usa duas funções para isso: before e after - são funções que serão executadas "antes"
 e "depois" daquele "bloco" de testes, ou seja, describe.

 const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});

Perceba que antes de cada cenário de teste nós alteramos o comportamento 
do método do fs criando um stub e, depois da execução do teste, utilizamos
 a função restore() que o sinon atribui aos stubs para retornarmos o 
 comportamento padrão daquela função.

 



