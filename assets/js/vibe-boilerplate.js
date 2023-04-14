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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_sass/main.scss":
/*!*************************!*\
  !*** ./_sass/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./_sass/main.scss?");

/***/ }),

/***/ "./src/boilerplate.js":
/*!****************************!*\
  !*** ./src/boilerplate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect,\n    Fragment = _wp$element.Fragment,\n    render = _wp$element.render,\n    useContext = _wp$element.useContext;\nvar _wp$data = wp.data,\n    select = _wp$data.select,\n    dispatch = _wp$data.dispatch;\n\nvar Boilerplate = function Boilerplate(props) {\n  var _useState = useState([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      boilerplateFilters = _useState2[0],\n      setBoilerplateFilters = _useState2[1];\n\n  var _useState3 = useState(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      activeTab = _useState4[0],\n      setActiveTab = _useState4[1];\n\n  var user = select('vibebp').getUser();\n  var token = select('vibebp').getToken(); // VIBEBP Store works across components\n  //Push data in VibeBP store : dispatch('vibebp').setData(Key,Value);\n  //Get data from VibeBP Store: select('vibebp').getDAta(key); \n\n  useEffect(function () {\n    var boilerplate_filters = select('vibebp').getMenu().filter(function (item) {\n      return item.parent === 'vibe_boilerplate';\n    });\n\n    if (boilerplate_filters.length) {\n      boilerplate_filters.map(function (filter, index) {\n        if (boilerplate_filters.findIndex(function (item) {\n          return item[\"class\"].indexOf('current-menu-item') > -1;\n        }) === -1) {\n          boilerplate_filters[index][\"class\"].push('current-menu-item');\n          setActiveTab(boilerplate_filters[index].css_id);\n        }\n      });\n      setBoilerplateFilters(boilerplate_filters);\n    }\n\n    if (document.querySelector('body').classList.value.indexOf('withsidebar') == -1) {\n      document.querySelector('body').classList.add('withsidebar');\n    }\n  }, []);\n  return wp.element.createElement(\"div\", {\n    className: \"vibebp_sidebars\"\n  }, wp.element.createElement(\"div\", {\n    className: \"vibebp_left_sidebar_wrapper\"\n  }, wp.element.createElement(\"div\", {\n    className: \"vibebp_left_sidebar\"\n  }, wp.element.createElement(\"h3\", null, window.vibeboilerplate.translations.title), boilerplateFilters.length && boilerplateFilters.map(function (filter, i) {\n    var classs = filter[\"class\"].join(' ') + ' ' + filter.css_id;\n    return wp.element.createElement(\"a\", {\n      className: classs,\n      onClick: function onClick(e) {\n        setActiveTab(filter.css_id);\n\n        var ffilters = _toConsumableArray(boilerplateFilters);\n\n        var index = ffilters.findIndex(function (item) {\n          return item[\"class\"].indexOf('current-menu-item') > -1;\n        });\n        ffilters[index][\"class\"].splice(ffilters[index][\"class\"].indexOf('current-menu-item'), 1);\n        ffilters[i][\"class\"].push('current-menu-item');\n        setBoilerplateFilters(ffilters);\n      }\n    }, filter.name);\n  }))), wp.element.createElement(\"div\", {\n    className: \"vibebp_main\"\n  }, wp.element.createElement(\"div\", {\n    className: \"vibe_blog_context_wrapper\"\n  }, \"This is some boilerplate \", activeTab)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boilerplate);\n\n//# sourceURL=webpack:///./src/boilerplate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_sass/main.scss */ \"./_sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boilerplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boilerplate */ \"./src/boilerplate.js\");\nvar _wp$element = wp.element,\n    createElement = _wp$element.createElement,\n    render = _wp$element.render,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect,\n    Fragment = _wp$element.Fragment,\n    useContext = _wp$element.useContext;\n\n\ndocument.addEventListener(\"component_loaded\", function (e) {\n  if (e.detail.component === 'vibe_boilerplate') {\n    setTimeout(function () {\n      render(wp.element.createElement(_boilerplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        field: e.detail\n      }), document.querySelector(\"#vibe_boilerplate_component\"));\n    }, 200);\n  }\n}, false);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });