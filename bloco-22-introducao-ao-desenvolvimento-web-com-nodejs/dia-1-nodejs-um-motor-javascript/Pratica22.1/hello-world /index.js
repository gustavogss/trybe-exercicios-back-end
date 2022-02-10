const readline = require('readline-sync');

const name = readline.question('Qual seu nome?');
const email = readline.questionEMail('Qual é o seu email?');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!, e seu email é ${email}`);

// console.log('Hello, world!');