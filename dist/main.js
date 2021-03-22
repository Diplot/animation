/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload =  function(){\r\n    /*document.getElementsByClassName(\"new\").classList.add(\"onload\");*/\r\n    console.log(\"страница обновлена\");\r\n}\r\nlet delClass = ()=>{\r\n    document.getElementById(\"on1\").classList.remove(\"onload\");\r\n    document.getElementById(\"on2\").classList.remove(\"onload\");\r\n    document.getElementById(\"on3\").classList.remove(\"onload\");\r\n    document.getElementById(\"on4\").classList.remove(\"onload\");\r\n    document.getElementById(\"on5\").classList.remove(\"onload\");\r\n    document.getElementById(\"on6\").classList.remove(\"onload\");\r\n    console.log(\"удаление...\")\r\n}\r\nsetTimeout( delClass,3000);\r\n/* Индекс слайда по умолчанию */\r\nvar slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\n/* Функция увеличивает индекс на 1, показывает следующй слайд*/\r\ndocument.getElementById(\"plusSlide\").addEventListener( \"click\", plusSlide );\r\nfunction plusSlide() {\r\n    showSlides(slideIndex += 1);\r\n};\r\n\r\n/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/\r\ndocument.getElementById(\"minusSlide\").addEventListener( \"click\", minusSlide );\r\nfunction minusSlide() {\r\n    showSlides(slideIndex -= 1);\r\n};\r\n\r\n/* Основная функция слайдера */\r\nfunction showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"item\");\r\n    if (n > slides.length) {\r\n        slideIndex = 1\r\n    }\r\n    if (n < 1) {\r\n        slideIndex = slides.length\r\n    }\r\n    for (i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n    }\r\n    slides[slideIndex - 1].style.display = \"block\";\r\n}\r\nlet autoSlide = ()=>{\r\n    setInterval(plusSlide, 20000);\r\n }\r\n autoSlide();\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });