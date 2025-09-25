// Interfaces
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};
export interface TeacherInterface {
	workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
};

// Classes
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
}

// Employee function
type Employee = Director | Teacher;

export function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Stable label printer
function employeeType(e: Employee): 'Director' | 'Teacher' {
  return e instanceof Director ? 'Director' : 'Teacher';
}

console.log(employeeType(createEmployee(200)));   // Teacher
console.log(employeeType(createEmployee(1000)));  // Director
console.log(employeeType(createEmployee('$500'))); // Director


//--------------------------------------------------------------------//


export function isDirector(employee: Employee): employee is Director {
  return 'workDirectorTasks' in employee;
}

export function executeWork(employee: Employee): string {
  return isDirector(employee)
  ? employee.workDirectorTasks()
  : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));   // "Getting to work"
console.log(executeWork(createEmployee(1000)));  // "Getting to director tasks"


// ----------------------------------------------------------------------//


export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History


//-----------------------------------------------------------------------------//



