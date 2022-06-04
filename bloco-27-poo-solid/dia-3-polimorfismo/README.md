----------------------------------- POLIMORFISMO ----------------------------------

São várias formas que um mesmo método pode possuir.

Tipos de polimorfismo: sobrescrita e sobrecarga de métodos.

- Sobrescrita: quando um método implementado em uma superclasse é 
reimplementado numa subclasse, comportando-se de forma diferente.

- Sobrecarga: faz com que funções com o mesmo nome possam existir, 
desde que com assinaturas diferentes.

A assinatura de uma função (ou método) corresponde ao nome da função, 
seu tipo de retorno, o nome dos argumentos e seus tipos.

Em TypeScript - Apesar de existir sobrecarga, todas as assinaturas
 (nome, parâmetros e tipos dos parâmetros e do retorno) devem resultar 
 em uma mesma implementação (somente um abre e fecha chaves). Com isso, 
 a sobrescrita se torna a opção mais interessante e mais utilizada

 class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está voando.
Tatu está andando.
*/

O super server para chamar o construtor da superclasse dentro da subclasse.
ao sobrescrever um método qualquer, pode chamar a implementação dele na superclasse 
por meio do super. Por exemplo:

class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/

---------------------------------- CLASSE E METÓDO ABSTRATO -------------------------------




