# NODE ASSÍNCRONO 🚀

1. O javaScript é uma linguagem single-threaded , ou seja, executa apenas uma operação de cada vez.

- Sendo assim, para que possamos escrever aplicações com boa performance e um boa experiência para o usuário, é importante sabermos como realizar operações demoradas de forma assíncrona , ou seja, fora do contexto de execução do restante do JavaScript. 

- Toda vez que precisarmos que algo seja processado em segundo plano, devemos chamar uma callback:

2. fs.reaFile - realiza a leitura de um arquivo e, quando termina, chama uma função de callback:
```
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
```
- No código acima, passamos uma função para readFile , à qual damos o nome de callback . Essa função de callback recebe dois parâmetros: o primeiro, que chamamos de err , é um erro que pode ter ocorrido durante a leitura do arquivo. Caso nenhum erro tenha ocorrido, esse parâmetro será undefined . O segundo parâmetro é, nesse caso, o conteúdo do arquivo, em forma de uma sequência de bytes, que chamamos de content . Caso ocorra um erro na leitura do arquivo, esse parâmetro será undefined.

- Primeiro, pedimos que o Node.js leia o arquivo, e passamos uma função de callback;

- Quando a leitura do arquivo é concluída ou um erro acontece, nossa função é chamada;

- Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, 
escrevemos ele no console e encerramos a execução com o return ;

- Caso nenhum erro tenha acontecido, sabemos que nosso arquivo foi lido com sucesso e, 
portanto, seu conteúdo está no segundo parâmetro, que chamamos de content 

Obs. Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks 

### PROMISSES

1. Promises - é um promessa que algo pode ser resolvido. Ela é resolvida através da função resolve, e rejeitada por meio da função reject.

- Enquanto com callbacks temos apenas uma função que recebe tanto o sucesso quanto o erro, nas Promises temos uma forma de registrar uma callback para sucesso e outra forma de registrar uma callback para erros.

- Uma grande vantagem das Promises está no fato de que podemos registrar vários callbacks de sucesso para serem executados um após o outro, sendo que o próximo callback recebe o resultado do callback anterior.

2. Tratando erros de forma síncrona:
```
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

dividirNumeros(2, 1);
```

3. Tratando erros de forma assíncrona:
```
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
```

- Sempre que precisarmos criar uma nova Promise, invocaremos o construtor através da palavra-chave new. Para esse construtor, devemos passar uma função, 
que é chamada de executor. É essa função quem vai, de fato, tentar cumprir a promessa que estamos fazendo. A função executor recebe outras duas funções como parâmetros: resolve e reject
```
const p = new Promise((resolve, reject) => {
  
});


const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}
```
- resolve e reject são os nomes das funções que a Promise passa para a função executor.

```
readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });
```

  - Os métodos assíncronos não esperam o comando atual terminar para iniciar o próximo.

  - O módulo fs para leitura síncrona de arquivos é o fs.readFileSync. 

 fs.readFileSync - é responsável por ler arquivos e trazer seu conteúdo para dentro do 
 Node.js. Por ser síncrono , ele espera a leitura do arquivo terminar para, só então, 
 atribuir o resultado à constante data 

4 - O método readFileSync recebe dois parâmetros:
- O nome do arquivo;
- Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.

- Com funções síncronas, como readFileSync , você deve tratar explicitamente os erros que puderem acontecer. Nesse exemplo, usamos um bloco try...catch para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.

- O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile. Na versão padrão do fs, a função readFile aceita um callback, que é chamado quando a leitura do arquivo termina:

5 - fs.readFile - é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.

- Sempre que precisarmos ler arquivos de forma assíncrona, podemos utilizar o método readFile do módulo ('fs').promises:
```
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
```

6. writeFile - serve para alterar o conteúdo dentro do arquivo:
```
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
```

7. Async/Await - Às vezes queremos apenas pegar um resultado, sem essa API de Promises. E utilizando o async / await, o código fica com uma sintaxe quase idêntica à sintaxe utilizada para código síncrono. Mas para utilizar esses métodos, precisamos criar uma função:
```
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()
```

- Não temos mais nenhum .then. E todo o tratamento de erros e sucesso é feito com um try ... catch , da mesma forma que fizemos quando estávamos utilizando o fs.readFileSync.

8. Promise.all - serve para rodar promessas simultaneamente. É um método da Promise que nos permite passar um array de Promises e receber de volta uma única Promise. Ela será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Esse método também nos permite utilizar um único catch, que será chamado caso qualquer uma das Promises seja rejeitada. 

```
 const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
```

- Estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.

### ATRIBUTOS ADICIONAIS UTILIZANDO MÉTODOS DE LEITURA E ESCRITA NO FS

1. Assim como no writeFile e readFile, pode ser passado um terceiro parâmetro para especificar algumas opções na leitura e escrita de arquivos.

1.1. A flag w - especifica que o arquivo deve ser aberto para escrita.

- Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes do novo conteúdo ser escrito. 

1.2. A flag 'wx' , por funciona como 'w' , mas lança um erro caso o arquivo já exista.

```
const fs = require('fs').promises;
```

- A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado

```
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {   
    console.error('err'); // Se o arquivo existir, um erro é retornado  
  });
```
  
