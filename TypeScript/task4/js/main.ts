/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const teacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 3
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher({ firstName: 'Ana', lastName: 'Delgado' }); // no React experience
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher({ firstName: 'Luis', lastName: 'Méndez', experienceTeachingJava: 1 });
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
