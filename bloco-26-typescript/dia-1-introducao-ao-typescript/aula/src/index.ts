// let nome:string = "Gustavo";
// let age:number = 47;
// let isStudent:boolean = true;

import {addStudent, getStudent, sayHello} from './students/students';

function main():any { //o any retorna qualquer coisa
addStudent('Gustavo');
console.log('\nStudents:\n', getStudent()); //['Gustavo']
const students = getStudent();
console.log('\nStudents:\n',(students));
sayHello(students);
}
main()