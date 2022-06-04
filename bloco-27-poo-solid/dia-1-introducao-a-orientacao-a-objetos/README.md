---------------------- PROGRAMAÇÂO ORIENTADA A OBJETOS - POO ---------------------------

Programação Orientada a Objetos é um modelo de análise, projeto e programação baseado na 
aproximação entre o mundo real e o mundo virtual, através da criação e interação entre 
objetos, atributos, classes, métodos, entre outros.

É um tipo de paradigma de programação que se baseia nos conceitos de classe, objeto, herança, 
encapsulamento e polimorfismo. 

Parte do princípio de que tudo é objeto. 

Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. 
Ela é formada por dados e comportamentos. Exemplo: a classe Pessoa.

Atributos são características individuais do objeto. E as suas funcionalidades são os 
métodos.

class Pessoa {
  name: string,
  peso: number,
}

O objeto é uma instância da classe. 

Dentro das classes e dos objetos existem atributos e métodos, sendo que a definição 
dos atributos é feita na classe, mas os valores são do objeto.

Se um atributo representa um valor, um método (ou mensagem ) nada mais é do que uma ação.
Por exemplo, uma pessoa pode dormir. Observe que, da mesma forma que o atributo, o método 
é algo que existe para a classe, mas cada objeto pode realizá-lo de forma diferente.
Todas as pessoas dormem, mas eu posso dormir de lado e você de bruços, por exemplo.

Ou seja:

um atributo é uma variável criada numa classe, e um método é uma função criada numa classe.
O método construtor, é rodado automaticamente na criação de um objeto, e serve para 
inicializar alguns atributos e chamar alguns métodos. Por exemplo, no nascimento de uma 
pessoa, os atributos altura e massa são definidos, e o método chorar é chamado.

Para uma linguagem de programação ser considerada orientada a objetos, deve haver quatro 
comportamentos: encapsulamento, a herança, o polimorfismo e a abstração.

------------------------------ PILARES DA POO -----------------------------------------

1 - Abstração, interface ou template - indica que não é necessario saber os detalhes de como
algo funciona. Ela esconde os detalhes da implementação da classe ou dos objetos. A ideia
aqui é representar um objeto de forma abstrata.

2 - Encapsulamento - se refere aos níveis de acesso dos dados dentro das classes -
 public, private, protected, e o readonly.

 public - os dados e métodos ficam livremente para ser acessados, não há encapsulamento. 
 Os atributos criados sem modificadores de visibilidade são públicos por padrão, e podem 
 ser acessados e alterados tanto dentro quanto fora da classe.

 protected - somente as classes de um mesmo arquivo podem ter acesso aos dados da classe.

 private - o acesso dos dados somente é feito dentro da própria classe. Os atributos criados 
 com o modificador private só podem ser lidos e modificados dentro da classe.

readonly - é um modificador de acesso que não está diretamente ligado ao POO. Os atributos aqui
podem ser lidos em qualquer lugar, mas só podem ser inicializados uma vez, no construtor.

 * Vantagens do encapsulamento:

 - Manutenção de código: Com o encapsulamento, isso passa a ser mais fácil, uma vez que, 
 com a devida proteção de acesso aos dados, a pessoa programadora achará mais rápido algum
 ponto onde o código precisa ser melhorado.

 - Reuso de código: Com o encapsulamento, o programa terá mais chances de ter o código reaproveitado 
 em outros projetos, poupando bastante tempo da equipe de desenvolvimento.

- Desenvolvimento acelerado e simplificado: O encapsulamento transforma a implementação de alguns códigos 
em uma espécie de caixa preta. Na prática, isso significa que as classes externas não precisam 
acessar alguns dados de forma direta. Assim, o desenvolvimento dos sistemas passa a ficar 
simplificado e acelerado.

Resumindo, o encapsulamento é útil na hora de simplificar a programação, bem como proteger 
os dados sensíveis ou sigilosos. Também é importante frisar que o desenvolvimento das 
aplicações passa a ficar mais ágil e com possibilidade de reuso.

3 - Herança - permite que classes filhas, que herdam métodos e atributos de outra classe 
( super classe ), sejam criadas.

4 - Polimorfismo - permite que coisas diferentes aconteçam ao chamarmos objetos de classes 
filhas distintas de uma mesma super classe. Um mesmo método pode ser utilizado em diferentes
 objetos, de diferentes classes.


---------------------------------- TYPESCRIPT COM POO -----------------------------------

class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

-----------------------------------ENCAPSULAMENTO ------------------------------------------

É o pilar que consiste na exibição e concessão de acesso para a pessoa que usa a classe apenas
daquilo que ela pode/deve de fato ver ou interagir.

public - Os atributos criados sem modificadores de visibilidade são públicos por padrão, e podem
ser acessados e alterados tanto dentro quanto fora da classe.

private - Os atributos só podem ser lidos e modificados dentro da classe.

readonly - Os atributos podem ser lidos em qualquer lugar, mas só podem ser inicializados uma vez, 
no construtor. 

protected  - vai ser apresentado juntamente com herança.

Para alterar atributos privados fora de uma classe, utilizamos os métodos: Getters e Setters.
Getters para leitura e Setters para as alterações. Eles validam as leituras e alterações, de 
forma a não comprometer o funcionamento da classe.

Os atributos privados não são obrigados a ter getters e setters. Eles só precisam destes 
métodos caso seja necessário alterá-los diretamente, podendo garantir uma validação do dado 
que foi passado. Usamos atributos privados: para validar alterações nos dados.

A boa prática é deixar todos os atributos como privados e criar os getters e setters de 
acordo com a necessidade de cada atributo.

Uma outra prática muito comum é o uso de um underline antes do nome de atributos privados.

------------------------------ CÓDIGO COM ENCAPSULAMENTO ----------------------------

class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);