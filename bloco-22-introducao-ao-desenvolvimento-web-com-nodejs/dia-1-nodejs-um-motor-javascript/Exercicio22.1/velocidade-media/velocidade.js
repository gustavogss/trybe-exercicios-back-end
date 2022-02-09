const readline = require('readline-sync');

function velocidadeMedia(){
  const distancia = readline.questionFloat('Quanto Km percorreu? ');
  const tempo = readline.questionInt('Quanto tempo gastou?');
  
  const velocidade = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidade} m/s`);
}

velocidadeMedia();


