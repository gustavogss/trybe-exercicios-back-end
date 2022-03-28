"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printStudents = exports.getStudent = exports.addStudent = void 0;
const students = [];
// const students: any[] = [] poderia ser um array de qualquer tipo
const addStudent = (student) => students.push(student);
exports.addStudent = addStudent;
const getStudent = () => students;
exports.getStudent = getStudent;
const printStudents = (student) => {
    if (typeof student === 'string') {
        console.log(student.toUpperCase());
    }
    else {
        console.log(student);
    }
};
exports.printStudents = printStudents;
