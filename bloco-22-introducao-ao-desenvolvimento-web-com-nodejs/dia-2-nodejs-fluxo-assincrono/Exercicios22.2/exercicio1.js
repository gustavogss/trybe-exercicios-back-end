
function numbers(a,b,c){
  return new Promise((resolve, reject)=>{
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    reject('Informe apenas números');

    const resultado = (a + b) * c;

       if (resultado < 50) {
         return reject('Valor muito baixo');
       }
       resolve(result);
  });  
}

numbers(9, 8, 7)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))