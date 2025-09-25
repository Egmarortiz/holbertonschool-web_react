namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}

(globalThis as any).Subjects = Object.assign((globalThis as any).Subjects || {}, Subjects);
