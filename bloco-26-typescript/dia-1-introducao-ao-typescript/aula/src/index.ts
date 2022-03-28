// let nome:string = "Gustavo";
// let age:number = 47;
// let isStudent:boolean = true;

import {addStudent, getStudent, printStudents} from './students/students';

addStudent('Gustavo');
console.log('\nStudents:\n', getStudent()); //['Gustavo']
const students = getStudent();
console.log('\nStudents:\n',(students));
students.forEach((student)=>printStudents(student));