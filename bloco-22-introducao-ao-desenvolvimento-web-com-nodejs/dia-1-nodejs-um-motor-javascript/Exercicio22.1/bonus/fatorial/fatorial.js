const readline = require('readline-sync');

function realizaFatoracao(x) {
  
  return [0, 1].includes(x)
    
    ? 1
   
    : x * realizaFatoracao(x - 1); // Uma função que chama a si mesma é chamada de função **recursiva**
}

function realizaCalculo() {
  const x = readline.questionInt('Qual é o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();