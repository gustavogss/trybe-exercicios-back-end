const readline = require("readline-sync");

const altura = readline.questionFloat("Qual é a sua altura: ");
const peso = readline.questionInt("Qual é o seu peso:");

const imc = peso / Math.pow(altura, 2);

switch (imc){
  case (imc < 18.5):
    console.log(`Seu IMC é ${imc} - Você está abaixo do peso (magreza)`);
    break;
  case (18.5 > imc && imc < 24.9):
    console.log(`Seu IMC é ${imc} - Você está no peso normal`);
    break;
  case (25.0 > imc && imc  < 29.9):
    console.log(`Seu IMC é ${imc} - Você está acima do peso (sobrepeso)`);
    break;
  case (30.0 > imc && imc  < 34.9):
    console.log(`Seu IMC é ${imc} - Você está com Obesidade grau I`);
    break;
  case (35.0 > imc && imc  < 39.9):
    console.log(`Seu IMC é ${imc} - Você está com Obesidade grau II`);
    break;
  default:
    console.log(`Seu IMC é ${imc} - Você está com Obesidade graus III e IV`);
}

module.export = {
  altura,
  peso,
  imc,
};
