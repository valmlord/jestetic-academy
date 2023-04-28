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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_openMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/openMenu */ \"./src/js/modules/openMenu.js\");\n/* harmony import */ var _modules_makeSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/makeSearch */ \"./src/js/modules/makeSearch.js\");\n/* harmony import */ var _modules_changeLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeLang */ \"./src/js/modules/changeLang.js\");\n/* eslint-env browser */\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_makeSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n    '.options__search-icon',\r\n    '.search-bar',\r\n    'search-bar--active',\r\n    '.header',\r\n    '.header__bottom',\r\n  );\r\n  (0,_modules_openMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_changeLang__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://jestetic-academy/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/changeLang.js":
/*!**************************************!*\
  !*** ./src/js/modules/changeLang.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-env browser */\n\nconst changeLang = () => {\n  // get all elements with the class \"language\"\n  const languageElems = document.querySelectorAll('.language');\n\n  // loop through all elements and add event listeners to them\n  languageElems.forEach((elem) => {\n    // get the list of languages and the current language button\n    const langList = elem.querySelector('.language__list');\n    const currentLang = elem.querySelector('.language__current');\n\n    // add an event listener to the current language button\n    currentLang.addEventListener('click', () => {\n      langList.classList.toggle('language__list--active');\n    });\n\n    // add event listeners to the languages in the list\n    const langLinks = langList.querySelectorAll('.language__list-link');\n    langLinks.forEach((langLink) => {\n      langLink.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        // get the text of the clicked language\n        const newLang = langLink.textContent;\n\n        // change the text of the current language button\n        currentLang.querySelector('.language__current-name').textContent =\n          newLang;\n\n        // change the language in other elements with the class \"language\"\n        languageElems.forEach((otherElem) => {\n          if (otherElem !== elem) {\n            const otherLangLinks = otherElem.querySelectorAll(\n              '.language__list-link',\n            );\n            let flag = false;\n            otherLangLinks.forEach((otherLangLink) => {\n              if (otherLangLink.textContent === newLang) {\n                flag = true;\n              }\n            });\n            if (flag) {\n              otherElem.querySelector('.language__current-name').textContent =\n                newLang;\n            } else {\n              otherElem.querySelector('.language__current-name').textContent =\n                'Espanol';\n            }\n          }\n        });\n\n        // hide the language list\n        langList.classList.remove('language__list--active');\n      });\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeLang);\n\n\n//# sourceURL=webpack://jestetic-academy/./src/js/modules/changeLang.js?");

/***/ }),

/***/ "./src/js/modules/makeSearch.js":
/*!**************************************!*\
  !*** ./src/js/modules/makeSearch.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-env browser */\n\nconst makeSearch = (\n  trigger,\n  searchBar,\n  activeClass,\n  slidingPart,\n  slidingMenu,\n) => {\n  const searchIcons = document.querySelectorAll(trigger);\n  const searchContainer = document.querySelector(searchBar);\n  const header = document.querySelector(slidingPart);\n  const mobileMenu = document.querySelector(slidingMenu);\n  let isSearchActive = false;\n\n  searchIcons.forEach((searchIcon) => {\n    searchIcon.addEventListener('click', () => {\n      if (isSearchActive) {\n        searchContainer.classList.remove(activeClass);\n        header.style.paddingTop = '0';\n        mobileMenu.style.marginTop = '0';\n        isSearchActive = false;\n      } else {\n        searchContainer.classList.add(activeClass);\n        header.style.paddingTop = '50px';\n        if (window.innerWidth < 767.98) {\n          mobileMenu.style.marginTop = '50px';\n        }\n        isSearchActive = true;\n      }\n    });\n  });\n\n  searchContainer.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const searchInput = searchContainer.querySelector('input[name=\"search\"]');\n    const searchValue = searchInput.value.trim();\n    window.location.href = `/search?query=${searchValue}`;\n  });\n\n  document.addEventListener('click', (event) => {\n    const isClickInside =\n      searchContainer.contains(event.target) ||\n      [...searchIcons].some((icon) => icon.contains(event.target));\n    if (!isClickInside) {\n      searchContainer.classList.remove(activeClass);\n      header.style.paddingTop = '0';\n      mobileMenu.style.marginTop = '0';\n      isSearchActive = false;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSearch);\n\n\n//# sourceURL=webpack://jestetic-academy/./src/js/modules/makeSearch.js?");

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