/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentClass: () => (/* binding */ StudentClass),
/* harmony export */   printTeacher: () => (/* binding */ printTeacher)
/* harmony export */ });
;
// Teacher instances
var teacher1 = {
    firstName: 'Margaret',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    yearsOfExperience: 7,
    location: 'Pennsylvania',
    subject: 'Mathematics',
    salary: 60000
};
var teacher2 = {
    firstName: 'John',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'California',
    hourlyRate: 30,
    department: 'Science'
};
var teacher3 = {
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
// Director instace
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// Print Directors
console.log(director1);
;
// Print teacher function
var printTeacher = function (firstName, lastName) {
    var initial = firstName.trim().charAt(0).toUpperCase();
    return "".concat(initial, ". ").concat(lastName.trim());
};
// Example / keeps linter happy
console.log(printTeacher('John', 'Doe')); // J. Doe
// 2) Class implementation (instance side must satisfy StudentClassInterface)
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

// 3) Optional: compile-time check
var StudentClassFactory = StudentClass;
// 4) Minimal example
var s = new StudentClass('John', 'Doe');
console.log(s.displayName()); // "John"
console.log(s.workOnHomework()); // "Currently working"

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFHLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVGVhY2hlciBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcblxuICAvLyBhbGxvdyBhcmJpdHJhcnkgZXh0cmEgcHJvcGVydGllc1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn07XG4vLyBUZWFjaGVyIGluc3RhbmNlc1xuY29uc3QgdGVhY2hlcjE6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ01hcmdhcmV0JyxcbiAgbGFzdE5hbWU6ICdKb2huc29uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgeWVhcnNPZkV4cGVyaWVuY2U6IDcsXG4gIGxvY2F0aW9uOiAnUGVubnN5bHZhbmlhJyxcbiAgc3ViamVjdDogJ01hdGhlbWF0aWNzJyxcbiAgc2FsYXJ5OiA2MDAwMFxufTtcblxuY29uc3QgdGVhY2hlcjI6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxvY2F0aW9uOiAnQ2FsaWZvcm5pYScsXG4gIGhvdXJseVJhdGU6IDMwLFxuICBkZXBhcnRtZW50OiAnU2NpZW5jZSdcbn07XG5cbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG4vLyBQcmludCB0ZWFjaGVyIGluc3RhbmNlc1xuY29uc29sZS5sb2codGVhY2hlcjEpO1xuY29uc29sZS5sb2codGVhY2hlcjIpO1xuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyBEaXJlY3RvcnMgaW50ZXJmYWNlIChleHRlbnNpb24gb2YgdGFjaGVyIGludGVyZmFjZSlcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuLy8gRGlyZWN0b3IgaW5zdGFjZVxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG4vLyBQcmludCBEaXJlY3RvcnNcbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vIFByaW50IHRlYWNoZXIgZnVuY3Rpb24gKGludGVyZmFjZSlcbmV4cG9ydCBpbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59O1xuLy8gUHJpbnQgdGVhY2hlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWwgPSBmaXJzdE5hbWUudHJpbSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBgJHtpbml0aWFsfS4gJHtsYXN0TmFtZS50cmltKCl9YDtcbn07XG4vLyBFeGFtcGxlIC8ga2VlcHMgbGludGVyIGhhcHB5XG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoJ0pvaG4nLCAnRG9lJykpOyAvLyBKLiBEb2VcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyAxKSBJbnRlcmZhY2VzIGZvciB0aGUgaW5zdGFuY2UgYW5kIHRoZSBjb25zdHJ1Y3RvclxuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbi8vIDIpIENsYXNzIGltcGxlbWVudGF0aW9uIChpbnN0YW5jZSBzaWRlIG11c3Qgc2F0aXNmeSBTdHVkZW50Q2xhc3NJbnRlcmZhY2UpXG5leHBvcnQgY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICB9XG5cbiAgcHVibGljIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuLy8gMykgT3B0aW9uYWw6IGNvbXBpbGUtdGltZSBjaGVja1xuY29uc3QgU3R1ZGVudENsYXNzRmFjdG9yeTogU3R1ZGVudENsYXNzQ29uc3RydWN0b3IgPSBTdHVkZW50Q2xhc3M7XG5cbi8vIDQpIE1pbmltYWwgZXhhbXBsZVxuY29uc3QgczogU3R1ZGVudENsYXNzSW50ZXJmYWNlID0gbmV3IFN0dWRlbnRDbGFzcygnSm9obicsICdEb2UnKTtcbmNvbnNvbGUubG9nKHMuZGlzcGxheU5hbWUoKSk7ICAgICAgLy8gXCJKb2huXCJcbmNvbnNvbGUubG9nKHMud29ya09uSG9tZXdvcmsoKSk7ICAgLy8gXCJDdXJyZW50bHkgd29ya2luZ1wiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=