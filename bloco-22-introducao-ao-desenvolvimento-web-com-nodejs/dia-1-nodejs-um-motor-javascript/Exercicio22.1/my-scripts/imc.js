const readline = require('readline-sync');

const altura = readline.questionFloat('Qual é a sua altura: ');
const peso = readline.questionFloat('Qual é o seu peso: ');


const imc = peso / Math.pow(altura, 2).toFixed(2);

console.log(`Seu IMC é ${imc}`)

module.export = {
  altura, peso, imc
} 