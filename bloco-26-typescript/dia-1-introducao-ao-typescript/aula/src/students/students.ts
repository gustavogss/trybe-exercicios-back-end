const students: (string)[] = []
// const students: any[] = [] poderia ser um array de qualquer tipo

export const addStudent = (student:string)=> students.push(student);
export const getStudent = ()   => students;
export const sayHello = (students: string[] | string) => {
  if(Array.isArray(students)){
    students.forEach((student)=> console.log(`Hello, ${student}`));
  } else{
    console.log(`Hello, ${students}`)
  }
};

