/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 3
};
var cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
var react = new Subjects.React();
react.setTeacher({ firstName: 'Ana', lastName: 'Delgado' }); // no React experience
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
var java = new Subjects.Java();
java.setTeacher({ firstName: 'Luis', lastName: 'Méndez', experienceTeachingJava: 1 });
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFFM0MsSUFBTSxPQUFPLEdBQXFCO0lBQ2hDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLG1CQUFtQixFQUFFLENBQUM7Q0FDdkIsQ0FBQztBQUVGLElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFdkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL1RlYWNoZXIudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvU3ViamVjdC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJqZWN0cy9DcHAudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvUmVhY3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvSmF2YS50c1wiIC8+XG5cbmNvbnN0IHRlYWNoZXI6IFN1YmplY3RzLlRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0d1aWxsYXVtZScsXG4gIGxhc3ROYW1lOiAnU2FsdmEnLFxuICBleHBlcmllbmNlVGVhY2hpbmdDOiAzXG59O1xuXG5jb25zdCBjcHAgPSBuZXcgU3ViamVjdHMuQ3BwKCk7XG5jcHAuc2V0VGVhY2hlcih0ZWFjaGVyKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhjcHAuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc3QgcmVhY3QgPSBuZXcgU3ViamVjdHMuUmVhY3QoKTtcbnJlYWN0LnNldFRlYWNoZXIoeyBmaXJzdE5hbWU6ICdBbmEnLCBsYXN0TmFtZTogJ0RlbGdhZG8nIH0pOyAvLyBubyBSZWFjdCBleHBlcmllbmNlXG5jb25zb2xlLmxvZyhyZWFjdC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zdCBqYXZhID0gbmV3IFN1YmplY3RzLkphdmEoKTtcbmphdmEuc2V0VGVhY2hlcih7IGZpcnN0TmFtZTogJ0x1aXMnLCBsYXN0TmFtZTogJ03DqW5kZXonLCBleHBlcmllbmNlVGVhY2hpbmdKYXZhOiAxIH0pO1xuY29uc29sZS5sb2coamF2YS5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhqYXZhLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=