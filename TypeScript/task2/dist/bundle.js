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
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector),
/* harmony export */   teachClass: () => (/* binding */ teachClass)
/* harmony export */ });
;
;
// Classes
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());

function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Stable label printer
function employeeType(e) {
    return e instanceof Director ? 'Director' : 'Teacher';
}
console.log(employeeType(createEmployee(200))); // Teacher
console.log(employeeType(createEmployee(1000))); // Director
console.log(employeeType(createEmployee('$500'))); // Director
//--------------------------------------------------------------------//
function isDirector(employee) {
    return 'workDirectorTasks' in employee;
}
function executeWork(employee) {
    return isDirector(employee)
        ? employee.workDirectorTasks()
        : employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200))); // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"
function teachClass(todayClass) {
    if (todayClass === "Math")
        return "Teaching Math";
    return "Teaching History";
}
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
//-----------------------------------------------------------------------------//

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn07XG5leHBvcnQgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZ1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZ1xufTtcblxuLy8gQ2xhc3Nlc1xuZXhwb3J0IGNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4gIH1cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgICB9XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gICAgfVxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgICB9XG59XG5cbi8vIEVtcGxveWVlIGZ1bmN0aW9uXG50eXBlIEVtcGxveWVlID0gRGlyZWN0b3IgfCBUZWFjaGVyO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBFbXBsb3llZSB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbi8vIFN0YWJsZSBsYWJlbCBwcmludGVyXG5mdW5jdGlvbiBlbXBsb3llZVR5cGUoZTogRW1wbG95ZWUpOiAnRGlyZWN0b3InIHwgJ1RlYWNoZXInIHtcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBEaXJlY3RvciA/ICdEaXJlY3RvcicgOiAnVGVhY2hlcic7XG59XG5cbmNvbnNvbGUubG9nKGVtcGxveWVlVHlwZShjcmVhdGVFbXBsb3llZSgyMDApKSk7ICAgLy8gVGVhY2hlclxuY29uc29sZS5sb2coZW1wbG95ZWVUeXBlKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7ICAvLyBEaXJlY3RvclxuY29uc29sZS5sb2coZW1wbG95ZWVUeXBlKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpKTsgLy8gRGlyZWN0b3JcblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRW1wbG95ZWUpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiAnd29ya0RpcmVjdG9yVGFza3MnIGluIGVtcGxveWVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IEVtcGxveWVlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzRGlyZWN0b3IoZW1wbG95ZWUpXG4gID8gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKVxuICA6IGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcbn1cblxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpOyAgIC8vIFwiR2V0dGluZyB0byB3b3JrXCJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7ICAvLyBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIlxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbmV4cG9ydCB0eXBlIFN1YmplY3RzID0gXCJNYXRoXCIgfCBcIkhpc3RvcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICBpZiAodG9kYXlDbGFzcyA9PT0gXCJNYXRoXCIpIHJldHVybiBcIlRlYWNoaW5nIE1hdGhcIjtcbiAgcmV0dXJuIFwiVGVhY2hpbmcgSGlzdG9yeVwiO1xufVxuXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpOyAgICAgLy8gVGVhY2hpbmcgTWF0aFxuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTsgIC8vIFRlYWNoaW5nIEhpc3RvcnlcblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==