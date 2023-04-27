/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_openMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/openMenu */ \"./src/js/modules/openMenu.js\");\n/* eslint-env browser */\n\n\n// import makeSearch from './modules/makeSearch';\n// import changeLang from './modules/changeLang';\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  // makeSearch(\n  //   '.options__search-icon',\n  //   '.search-bar',\n  //   'search-bar--active',\n  //   '.header',\n  //   '.header__bottom',\n  // );\n  (0,_modules_openMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  // changeLang();\n});\n\n\n//# sourceURL=webpack://jestetic-academy/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/openMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/openMenu.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-env browser */\n\nconst openMenu = () => {\n  // get the DOM elements we're working with and save them to constants\n  const menu = document.querySelector('.header__bottom');\n  const hamburger = document.querySelector('.top-menu__burger');\n  const menuItems = document.querySelectorAll('.bottom-menu__nav-link');\n  const line = document.querySelector('.header__line');\n\n  // create a function to disable the menu on larger screens\n  const disableMenu = () => {\n    const largeScreen = window.innerWidth > 1169.98;\n    if (largeScreen) {\n      line.classList.remove('header__line--active');\n      hamburger.classList.remove('top-menu__burger--active');\n      menu.classList.remove('header__bottom--active');\n    }\n  };\n\n  // add an event listener for clicks on the burger icon\n  hamburger.addEventListener('click', () => {\n    line.classList.toggle('header__line--active');\n    hamburger.classList.toggle('top-menu__burger--active');\n    menu.classList.toggle('header__bottom--active');\n  });\n\n  // add an event listener for clicks on menu items\n  menuItems.forEach((menuItem) => {\n    menuItem.addEventListener('click', () => {\n      disableMenu();\n      menu.classList.remove('header__bottom--active');\n      hamburger.classList.remove('top-menu__burger--active');\n      line.classList.remove('header__line--active');\n    });\n  });\n\n  // add an event listener for changes in browser window size\n  window.addEventListener('resize', () => {\n    disableMenu();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (openMenu);\n\n\n//# sourceURL=webpack://jestetic-academy/./src/js/modules/openMenu.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;