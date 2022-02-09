const readline = require('readline-sync');

const altura = 175;
const peso = 85;


const imc = peso / Math.pow(altura, 2).toFixed(2);

console.log(`Seu IMC é ${imc}`)

module.export = {
  altura, peso, imc
} 