interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alie";
  lastName: "Smith";
  age: 21;
  location: 'San Juan',
};


const student2: Student = {
  firstName: "Bob";
  lastName: "Garcia";
  age: 23,
  location: "Ponce",
};

const studentsList: Student[]  = [student1, student2];
