// Tratando erros de forma síncrona

function calcularDivisao(num1, num2){
  if(num2==0) throw new Error('Não pode dividir um numero por zero');
  const resultado = num1 / num2;
  return resultado;
}

try {
  calcularDivisao (2, 0);
  
} catch (error) {
  console.log(`error: ${error.message}`);
}
