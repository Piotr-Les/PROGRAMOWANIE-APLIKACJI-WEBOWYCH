/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./temat2/src/Animal.ts":
/*!******************************!*\
  !*** ./temat2/src/Animal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Animal {\r\n    constructor(theName) {\r\n        this.name = theName;\r\n    }\r\n    move(distanceInMeters = 0) {\r\n        console.log(`${this.name} moved ${distanceInMeters}m.`);\r\n    }\r\n}\r\nexports.default = Animal;\r\n\n\n//# sourceURL=webpack:///./temat2/src/Animal.ts?");

/***/ }),

/***/ "./temat2/src/Horse.ts":
/*!*****************************!*\
  !*** ./temat2/src/Horse.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Animal_1 = __importDefault(__webpack_require__(/*! ./Animal */ \"./temat2/src/Animal.ts\"));\r\nclass Horse extends Animal_1.default {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    move(distanceInMeters = 45) {\r\n        console.log('Galloping...');\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\nexports.default = Horse;\r\n\n\n//# sourceURL=webpack:///./temat2/src/Horse.ts?");

/***/ }),

/***/ "./temat2/src/Snake.ts":
/*!*****************************!*\
  !*** ./temat2/src/Snake.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Animal_1 = __importDefault(__webpack_require__(/*! ./Animal */ \"./temat2/src/Animal.ts\"));\r\nclass Snake extends Animal_1.default {\r\n    constructor(name) {\r\n        super(name);\r\n    }\r\n    move(distanceInMeters = 5) {\r\n        console.log('Slithering...');\r\n        super.move(distanceInMeters);\r\n    }\r\n}\r\nexports.default = Snake;\r\n\n\n//# sourceURL=webpack:///./temat2/src/Snake.ts?");

/***/ }),

/***/ "./temat2/src/app.ts":
/*!***************************!*\
  !*** ./temat2/src/app.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Horse_1 = __importDefault(__webpack_require__(/*! ./Horse */ \"./temat2/src/Horse.ts\"));\r\nconst Snake_1 = __importDefault(__webpack_require__(/*! ./Snake */ \"./temat2/src/Snake.ts\"));\r\nlet sam = new Snake_1.default('Sammy the Python');\r\nlet tom = new Horse_1.default('Tommy the Palomino');\r\nsam.move();\r\ntom.move(34);\r\n\n\n//# sourceURL=webpack:///./temat2/src/app.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./temat2/src/app.ts");
/******/ 	
/******/ })()
;