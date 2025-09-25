import './subjects/Teacher';
import './subjects/Subject';
import './subjects/Cpp';
import './subjects/React';
import './subjects/Java';

const S = (globalThis as any).Subjects;

const teacherC = { firstName: 'Guillaume', lastName: 'Salva', experienceTeachingC: 3 };
const cpp = new S.Cpp();
cpp.setTeacher(teacherC);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// React — no React experience → not available
const teacherReact = { firstName: 'Ana', lastName: 'Delgado' };
const react = new S.React();
react.setTeacher(teacherReact);
console.log(react.getRequirements());     // Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // No available teacher

// Java — teacher has Java experience → available
const teacherJava = { firstName: 'Luis', lastName: 'Méndez', experienceTeachingJava: 1 };
const java = new S.Java();
java.setTeacher(teacherJava);
console.log(java.getRequirements());      // Here is the list of requirements for Java
console.log(java.getAvailableTeacher());  // Available Teacher: Luis
