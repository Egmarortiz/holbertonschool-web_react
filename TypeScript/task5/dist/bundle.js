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
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
// Helpers
var major = function (n) { return ({ credits: n, brand: 'MajorCredits' }); };
var minor = function (n) { return ({ credits: n, brand: 'MinorCredits' }); };
// Sums
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: 'MajorCredits' };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: 'MinorCredits' };
}
// Demo
var m1 = major(3);
var m2 = major(4);
var mi1 = minor(1);
var mi2 = minor(2);
var mTotal = sumMajorCredits(m1, m2);
var miTotal = sumMinorCredits(mi1, mi2);
console.log('Major total:', mTotal.credits); // 7
console.log('Minor total:', miTotal.credits); // 3

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNJQSxVQUFVO0FBQ1YsSUFBTSxLQUFLLEdBQUcsVUFBQyxDQUFTLElBQW1CLFFBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO0FBQ25GLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUyxJQUFtQixRQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztBQUVuRixPQUFPO0FBQ0EsU0FBUyxlQUFlLENBQUMsUUFBc0IsRUFBRSxRQUFzQjtJQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUM7QUFDakYsQ0FBQztBQUVNLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQ2pGLENBQUM7QUFFRCxPQUFPO0FBQ1AsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJCLElBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkMsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICByZWFkb25seSBicmFuZDogJ01ham9yQ3JlZGl0cyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlub3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICByZWFkb25seSBicmFuZDogJ01pbm9yQ3JlZGl0cyc7XG59XG5cbi8vIEhlbHBlcnNcbmNvbnN0IG1ham9yID0gKG46IG51bWJlcik6IE1ham9yQ3JlZGl0cyA9PiAoeyBjcmVkaXRzOiBuLCBicmFuZDogJ01ham9yQ3JlZGl0cycgfSk7XG5jb25zdCBtaW5vciA9IChuOiBudW1iZXIpOiBNaW5vckNyZWRpdHMgPT4gKHsgY3JlZGl0czogbiwgYnJhbmQ6ICdNaW5vckNyZWRpdHMnIH0pO1xuXG4vLyBTdW1zXG5leHBvcnQgZnVuY3Rpb24gc3VtTWFqb3JDcmVkaXRzKHN1YmplY3QxOiBNYWpvckNyZWRpdHMsIHN1YmplY3QyOiBNYWpvckNyZWRpdHMpOiBNYWpvckNyZWRpdHMge1xuICByZXR1cm4geyBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cywgYnJhbmQ6ICdNYWpvckNyZWRpdHMnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1NaW5vckNyZWRpdHMoc3ViamVjdDE6IE1pbm9yQ3JlZGl0cywgc3ViamVjdDI6IE1pbm9yQ3JlZGl0cyk6IE1pbm9yQ3JlZGl0cyB7XG4gIHJldHVybiB7IGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLCBicmFuZDogJ01pbm9yQ3JlZGl0cycgfTtcbn1cblxuLy8gRGVtb1xuY29uc3QgbTEgPSBtYWpvcigzKTtcbmNvbnN0IG0yID0gbWFqb3IoNCk7XG5jb25zdCBtaTEgPSBtaW5vcigxKTtcbmNvbnN0IG1pMiA9IG1pbm9yKDIpO1xuXG5jb25zdCBtVG90YWwgPSBzdW1NYWpvckNyZWRpdHMobTEsIG0yKTtcbmNvbnN0IG1pVG90YWwgPSBzdW1NaW5vckNyZWRpdHMobWkxLCBtaTIpO1xuXG5jb25zb2xlLmxvZygnTWFqb3IgdG90YWw6JywgbVRvdGFsLmNyZWRpdHMpOyAvLyA3XG5jb25zb2xlLmxvZygnTWlub3IgdG90YWw6JywgbWlUb3RhbC5jcmVkaXRzKTsgLy8gM1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9