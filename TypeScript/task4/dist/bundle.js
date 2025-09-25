/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Declaration merging: extend Teacher inside the same namespace
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (!this.teacher || !this.teacher.experienceTeachingC) {
                return 'No available teacher';
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Cpp;
    }(Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
globalThis.Subjects = Object.assign(globalThis.Subjects || {}, Subjects);


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (!this.teacher || !this.teacher.experienceTeachingJava) {
                return 'No available teacher';
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Java;
    }(Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
globalThis.Subjects = Object.assign(globalThis.Subjects || {}, Subjects);


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher || !this.teacher.experienceTeachingReact) {
                return 'No available teacher';
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return React;
    }(Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
globalThis.Subjects = Object.assign(globalThis.Subjects || {}, Subjects);


/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ (() => {


var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
globalThis.Subjects = Object.assign(globalThis.Subjects || {}, Subjects);


/***/ }),

/***/ "./js/subjects/Teacher.ts":
/*!********************************!*\
  !*** ./js/subjects/Teacher.ts ***!
  \********************************/
/***/ (() => {


globalThis.Subjects = Object.assign(globalThis.Subjects || {}, Subjects);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Teacher */ "./js/subjects/Teacher.ts");
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Subject */ "./js/subjects/Subject.ts");
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_4__);





var S = globalThis.Subjects;
var teacherC = { firstName: 'Guillaume', lastName: 'Salva', experienceTeachingC: 3 };
var cpp = new S.Cpp();
cpp.setTeacher(teacherC);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// React — no React experience → not available
var teacherReact = { firstName: 'Ana', lastName: 'Delgado' };
var react = new S.React();
react.setTeacher(teacherReact);
console.log(react.getRequirements()); // Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // No available teacher
// Java — teacher has Java experience → available
var teacherJava = { firstName: 'Luis', lastName: 'Méndez', experienceTeachingJava: 1 };
var java = new S.Java();
java.setTeacher(teacherJava);
console.log(java.getRequirements()); // Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Available Teacher: Luis

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLEVBQUUsQ0FBQyxDQUFDO0FBRXZDLDhDQUE4QztBQUM5QyxJQUFNLFlBQVksR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQy9ELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFLLDZDQUE2QztBQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7QUFFakUsaURBQWlEO0FBQ2pELElBQU0sV0FBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3pGLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFNLDRDQUE0QztBQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBRSwwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0NwcC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0phdmEudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9SZWFjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9UZWFjaGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmF0aW9uIG1lcmdpbmc6IGV4dGVuZCBUZWFjaGVyIGluc2lkZSB0aGUgc2FtZSBuYW1lc3BhY2Vcbm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nQz86IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDcHAgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBDcHAnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICBpZiAoIXRoaXMudGVhY2hlciB8fCAhdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0MpIHtcbiAgICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICB9XG4gIH1cbn1cblxuKGdsb2JhbFRoaXMgYXMgYW55KS5TdWJqZWN0cyA9IE9iamVjdC5hc3NpZ24oKGdsb2JhbFRoaXMgYXMgYW55KS5TdWJqZWN0cyB8fCB7fSwgU3ViamVjdHMpO1xuIiwibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBleHBlcmllbmNlVGVhY2hpbmdKYXZhPzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEphdmEgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgaWYgKCF0aGlzLnRlYWNoZXIgfHwgIXRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhKSB7XG4gICAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgfVxuICB9XG59XG5cbihnbG9iYWxUaGlzIGFzIGFueSkuU3ViamVjdHMgPSBPYmplY3QuYXNzaWduKChnbG9iYWxUaGlzIGFzIGFueSkuU3ViamVjdHMgfHwge30sIFN1YmplY3RzKTtcbiIsIm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3Q/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUmVhY3QgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBSZWFjdCc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgIGlmICghdGhpcy50ZWFjaGVyIHx8ICF0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QpIHtcbiAgICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICB9XG4gIH1cbn1cblxuKGdsb2JhbFRoaXMgYXMgYW55KS5TdWJqZWN0cyA9IE9iamVjdC5hc3NpZ24oKGdsb2JhbFRoaXMgYXMgYW55KS5TdWJqZWN0cyB8fCB7fSwgU3ViamVjdHMpO1xuIiwibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xuICAgIHByb3RlY3RlZCB0ZWFjaGVyITogVGVhY2hlcjtcblxuICAgIHB1YmxpYyBzZXRUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMudGVhY2hlciA9IHRlYWNoZXI7XG4gICAgfVxuICB9XG59XG5cbihnbG9iYWxUaGlzIGFzIGFueSkuU3ViamVjdHMgPSBPYmplY3QuYXNzaWduKChnbG9iYWxUaGlzIGFzIGFueSkuU3ViamVjdHMgfHwge30sIFN1YmplY3RzKTtcbiIsIm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLlN1YmplY3RzID0gT2JqZWN0LmFzc2lnbigoZ2xvYmFsVGhpcyBhcyBhbnkpLlN1YmplY3RzIHx8IHt9LCBTdWJqZWN0cyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N1YmplY3RzL1RlYWNoZXInO1xuaW1wb3J0ICcuL3N1YmplY3RzL1N1YmplY3QnO1xuaW1wb3J0ICcuL3N1YmplY3RzL0NwcCc7XG5pbXBvcnQgJy4vc3ViamVjdHMvUmVhY3QnO1xuaW1wb3J0ICcuL3N1YmplY3RzL0phdmEnO1xuXG5jb25zdCBTID0gKGdsb2JhbFRoaXMgYXMgYW55KS5TdWJqZWN0cztcblxuY29uc3QgdGVhY2hlckMgPSB7IGZpcnN0TmFtZTogJ0d1aWxsYXVtZScsIGxhc3ROYW1lOiAnU2FsdmEnLCBleHBlcmllbmNlVGVhY2hpbmdDOiAzIH07XG5jb25zdCBjcHAgPSBuZXcgUy5DcHAoKTtcbmNwcC5zZXRUZWFjaGVyKHRlYWNoZXJDKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhjcHAuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuLy8gUmVhY3Qg4oCUIG5vIFJlYWN0IGV4cGVyaWVuY2Ug4oaSIG5vdCBhdmFpbGFibGVcbmNvbnN0IHRlYWNoZXJSZWFjdCA9IHsgZmlyc3ROYW1lOiAnQW5hJywgbGFzdE5hbWU6ICdEZWxnYWRvJyB9O1xuY29uc3QgcmVhY3QgPSBuZXcgUy5SZWFjdCgpO1xucmVhY3Quc2V0VGVhY2hlcih0ZWFjaGVyUmVhY3QpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpOyAgICAgLy8gSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIFJlYWN0XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpOyAvLyBObyBhdmFpbGFibGUgdGVhY2hlclxuXG4vLyBKYXZhIOKAlCB0ZWFjaGVyIGhhcyBKYXZhIGV4cGVyaWVuY2Ug4oaSIGF2YWlsYWJsZVxuY29uc3QgdGVhY2hlckphdmEgPSB7IGZpcnN0TmFtZTogJ0x1aXMnLCBsYXN0TmFtZTogJ03DqW5kZXonLCBleHBlcmllbmNlVGVhY2hpbmdKYXZhOiAxIH07XG5jb25zdCBqYXZhID0gbmV3IFMuSmF2YSgpO1xuamF2YS5zZXRUZWFjaGVyKHRlYWNoZXJKYXZhKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0UmVxdWlyZW1lbnRzKCkpOyAgICAgIC8vIEhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhXG5jb25zb2xlLmxvZyhqYXZhLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7ICAvLyBBdmFpbGFibGUgVGVhY2hlcjogTHVpc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9