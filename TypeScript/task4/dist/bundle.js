/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 5,
    experienceTeachingJava: 3,
};
cpp.setTeacher(teacher);
react.setTeacher(teacher);
java.setTeacher(teacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFFekMsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFakMsSUFBTSxPQUFPLEdBQXFCO0lBQ2hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixzQkFBc0IsRUFBRSxDQUFDO0NBQzFCLENBQUM7QUFFRixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvVGVhY2hlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvU3ViamVjdC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvQ3BwLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJzdWJqZWN0cy9SZWFjdC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvSmF2YS50c1wiIC8+XG5cbmNvbnN0IGNwcCA9IG5ldyBTdWJqZWN0cy5DcHAoKTtcbmNvbnN0IHJlYWN0ID0gbmV3IFN1YmplY3RzLlJlYWN0KCk7XG5jb25zdCBqYXZhID0gbmV3IFN1YmplY3RzLkphdmEoKTtcblxuY29uc3QgdGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nQzogNSxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nSmF2YTogMyxcbn07XG5cbmNwcC5zZXRUZWFjaGVyKHRlYWNoZXIpO1xucmVhY3Quc2V0VGVhY2hlcih0ZWFjaGVyKTtcbmphdmEuc2V0VGVhY2hlcih0ZWFjaGVyKTtcblxuY29uc29sZS5sb2coJ0MrKycpO1xuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZygnUmVhY3QnKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG5cbmNvbnNvbGUubG9nKCdKYXZhJyk7XG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==