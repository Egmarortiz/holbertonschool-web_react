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
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
    experienceTeachingJava: 7,
    experienceTeachingReact: 5,
};
cpp.setTeacher(teacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
java.setTeacher(teacher);
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
react.setTeacher(teacher);
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFFM0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFbkMsSUFBTSxPQUFPLEdBQXFCO0lBQ2hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsbUJBQW1CLEVBQUUsRUFBRTtJQUN2QixzQkFBc0IsRUFBRSxDQUFDO0lBQ3pCLHVCQUF1QixFQUFFLENBQUM7Q0FDM0IsQ0FBQztBQUVGLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUV2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFeEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL1RlYWNoZXIudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvU3ViamVjdC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJqZWN0cy9DcHAudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvUmVhY3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvSmF2YS50c1wiIC8+XG5cbmNvbnN0IGNwcCA9IG5ldyBTdWJqZWN0cy5DcHAoKTtcbmNvbnN0IGphdmEgPSBuZXcgU3ViamVjdHMuSmF2YSgpO1xuY29uc3QgcmVhY3QgPSBuZXcgU3ViamVjdHMuUmVhY3QoKTtcblxuY29uc3QgdGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nQzogMTAsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0phdmE6IDcsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0OiA1LFxufTtcblxuY3BwLnNldFRlYWNoZXIodGVhY2hlcik7XG5jb25zb2xlLmxvZygnQysrJyk7XG5jb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coY3BwLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG5cbmphdmEuc2V0VGVhY2hlcih0ZWFjaGVyKTtcbmNvbnNvbGUubG9nKCdKYXZhJyk7XG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxucmVhY3Quc2V0VGVhY2hlcih0ZWFjaGVyKTtcbmNvbnNvbGUubG9nKCdSZWFjdCcpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==