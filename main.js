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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\n\nlet defaultProject = []\nlet currentProject = defaultProject;\n\n//Testing objects!!\nvar fakeItem = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Todo('Groceries', '' , '', '',  )\ndefaultProject.push(fakeItem);\n\n\n//Task creator form\ndocument.getElementById('submit-item').onclick = () => createItem();\n\nfunction createItem() {\n    const title = document.getElementById('title-form')\n    if (title.value == null || title.value == '') return;\n    const item = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title.value);\n    currentProject.push(item);\n    resetDisplay();\n    renderDisplay();\n    //Resets the form\n    title.value = null;\n};\n\ndocument.body.onload = renderDisplay();\n\nfunction renderDisplay() {\n    currentProject.forEach(e => {\n        const div = document.createElement('div');\n        addTitle(div, e);\n        addDescription(div, e);\n    })\n}\n\nfunction addTitle(div, e) {\n    div.setAttribute('class', 'task');\n    div.innerHTML = `${e.getTitle()}`;\n    document.querySelector('.task-container').appendChild(div);  \n};\n\nfunction addDescription(div, e) {\n    const newDiv = document.createElement('div');\n        newDiv.setAttribute('class', 'task-description');\n        newDiv.innerHTML = `Description: ${e.getDescription()}`\n        div.appendChild(newDiv);\n};\n\nfunction resetDisplay() {\n    document.querySelectorAll('.task').forEach(e => e.remove());\n};\n\n//Event listener for expanding task content\ndocument.querySelectorAll('.task').forEach(item => {\n    item.addEventListener('click', () => {\n        const taskContent = item.nextElementSibling;\n    })\n});\n\n\n\n\n\n//# sourceURL=webpack://create-p/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\n\nclass Todo {\n    constructor(title, description = '', dueDate, priority, status = 'unfinished') {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = status;\n    };\n    getTitle() {\n        return this.title;\n    };\n    getDescription() {\n        return this.description;\n    };\n    getDueDate() {\n        return this.dueDate;\n    };\n    getPriority() {\n        return this.priority;\n    };\n    getStatus() {\n        return this.status;\n    };\n    changeStatus() {\n        this.status =  true ? this.status = 'finished' : 0;\n    };\n};\n\n// let One = new Todo('Groceries', '' , '', '',  )\n\n// console.log(One.getStatus())\n\n//# sourceURL=webpack://create-p/./src/todos.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;