const students: (string|number)[] = []
// const students: any[] = [] poderia ser um array de qualquer tipo

export const addStudent = (student:string|number)=> students.push(student);
export const getStudent = ()   => students;

export const printStudents = (student: string|number) => {
  if(typeof student=== 'string'){
    console.log(student.toUpperCase());
  }else{
    console.log(student);
  }
}

