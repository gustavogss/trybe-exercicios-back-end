const readline = require('readline-sync');

const name = readline.question('Qual seu nome?');
const email = readline.questionEMail('Qual é o seu email?');
const age = readline.questionInt('Qual sua idade?');

console.log(`Olá, ${name}! Você tem ${age} anos de idade!, e seu email é ${email}`);

