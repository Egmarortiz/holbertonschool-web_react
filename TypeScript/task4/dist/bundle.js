/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Cpp';
    };
    Cpp.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher || !teacher.experienceTeachingC) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(teacher.firstName);
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cpp);


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Java.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Java';
    };
    Java.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(teacher.firstName);
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Java);


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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

var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        var teacher = this.teacher;
        if (!teacher) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(teacher.firstName);
    };
    return React;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React);


/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject() {
        this.teacher = null;
    }
    Subject.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    return Subject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subject);


/***/ }),

/***/ "./js/subjects/index.ts":
/*!******************************!*\
  !*** ./js/subjects/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cpp: () => (/* reexport safe */ _Cpp__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Java: () => (/* reexport safe */ _Java__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   React: () => (/* reexport safe */ _React__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Subject: () => (/* reexport safe */ _Subject__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Java */ "./js/subjects/Java.ts");
/* harmony import */ var _React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./React */ "./js/subjects/React.ts");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");






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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects */ "./js/subjects/index.ts");

var cpp = new _subjects__WEBPACK_IMPORTED_MODULE_0__.Cpp();
var java = new _subjects__WEBPACK_IMPORTED_MODULE_0__.Java();
var react = new _subjects__WEBPACK_IMPORTED_MODULE_0__.React();
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvQ3BwLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1JlYWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvU3ViamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJqZWN0IGZyb20gJy4vU3ViamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENwcCBleHRlbmRzIFN1YmplY3Qge1xuICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBDcHAnO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XG5cbiAgICBpZiAoIXRlYWNoZXIgfHwgIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQykge1xuICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICB9XG59XG4iLCJpbXBvcnQgU3ViamVjdCBmcm9tICcuL1N1YmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhIGV4dGVuZHMgU3ViamVjdCB7XG4gIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmEnO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XG5cbiAgICBpZiAoIXRlYWNoZXIpIHtcbiAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgIH1cblxuICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGVhY2hlci5maXJzdE5hbWV9YDtcbiAgfVxufVxuIiwiaW1wb3J0IFN1YmplY3QgZnJvbSAnLi9TdWJqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3QgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLnRlYWNoZXI7XG5cbiAgICBpZiAoIXRlYWNoZXIpIHtcbiAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgIH1cblxuICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGVhY2hlci5maXJzdE5hbWV9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgVGVhY2hlciBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTdWJqZWN0IHtcbiAgcHJvdGVjdGVkIHRlYWNoZXI6IFRlYWNoZXIgfCBudWxsID0gbnVsbDtcblxuICBzZXRUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRlYWNoZXIgPSB0ZWFjaGVyO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmc7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENwcCB9IGZyb20gJy4vQ3BwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSmF2YSB9IGZyb20gJy4vSmF2YSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSAnLi9SZWFjdCc7XG5leHBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgVGVhY2hlciB9IGZyb20gJy4vVGVhY2hlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBTdWJqZWN0cyBmcm9tICcuL3N1YmplY3RzJztcblxuY29uc3QgY3BwID0gbmV3IFN1YmplY3RzLkNwcCgpO1xuY29uc3QgamF2YSA9IG5ldyBTdWJqZWN0cy5KYXZhKCk7XG5jb25zdCByZWFjdCA9IG5ldyBTdWJqZWN0cy5SZWFjdCgpO1xuXG5jb25zdCBjVGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nQzogMTAsXG59O1xuXG5jcHAuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5qYXZhLnNldFRlYWNoZXIoY1RlYWNoZXIpO1xucmVhY3Quc2V0VGVhY2hlcihjVGVhY2hlcik7XG5cbmNvbnNvbGUubG9nKCdDKysnKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhjcHAuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc29sZS5sb2coJ0phdmEnKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coamF2YS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZygnUmVhY3QnKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKHJlYWN0LmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=