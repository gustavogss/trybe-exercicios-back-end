"use strict";
// let nome:string = "Gustavo";
// let age:number = 47;
// let isStudent:boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./students/students");
(0, students_1.addStudent)('Gustavo');
console.log('\nStudents:\n', (0, students_1.getStudent)()); //['Gustavo']
const students = (0, students_1.getStudent)();
console.log('\nStudents:\n', (students));
students.forEach((student) => (0, students_1.printStudents)(student));
