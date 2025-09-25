// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // allow arbitrary extra properties
  [propName: string]: any;
};
// Teacher instances
const teacher1: Teacher = {
  firstName: 'Margaret',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  yearsOfExperience: 7,
  location: 'Pennsylvania',
  subject: 'Mathematics',
  salary: 60000
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'California',
  hourlyRate: 30,
  department: 'Science'
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Print teacher instances
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

//-------------------------------------------------------------------//

// Directors interface (extension of tacher interface)
export interface Directors extends Teacher {
  numberOfReports: number;
}
// Director instace
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
// Print Directors
console.log(director1);

//----------------------------------------------------------------------//

// Print teacher function (interface)
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};
// Print teacher function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const initial = firstName.trim().charAt(0).toUpperCase();
    return `${initial}. ${lastName.trim()}`;
};
// Example / keeps linter happy
console.log(printTeacher('John', 'Doe')); // J. Doe

//------------------------------------------------------------------------//

// 1) Interfaces for the instance and the constructor
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2) Class implementation (instance side must satisfy StudentClassInterface)
export class StudentClass implements StudentClassInterface {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return 'Currently working';
  }

  public displayName(): string {
    return this.firstName;
  }
}

// 3) Optional: compile-time check
const StudentClassFactory: StudentClassConstructor = StudentClass;

// 4) Minimal example
const s: StudentClassInterface = new StudentClass('John', 'Doe');
console.log(s.displayName());      // "John"
console.log(s.workOnHomework());   // "Currently working"
