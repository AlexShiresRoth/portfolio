(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/Header.js":
/*!*************************************!*\
  !*** ./client/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reusable_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable/Icons */ \"./client/components/reusable/Icons.js\");\n/* harmony import */ var _header_HeaderTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/HeaderTag */ \"./client/components/header/HeaderTag.js\");\n\n\n\n\n\n\nvar Header = function Header(_) {\n  var urls = [{\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n      className: \"fab fa-github\"\n    }),\n    url: \"https://github.com/AlexShiresRoth?tab=repositories\"\n  }, {\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n      className: \"fab fa-codepen\"\n    }),\n    url: \"https://codepen.io/Alexroth96/#\"\n  }, {\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n      className: \"fab fa-twitter\"\n    }),\n    url: \"https://twitter.com/AlexShiresRoth\"\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(urls),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      icons = _useState2[0],\n      setIcons = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setIcons(urls);\n  }, []);\n\n  var scrollDown = function scrollDown() {\n    window.scrollTo({\n      behavior: \"smooth\",\n      top: window.innerHeight\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"section__header\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__header--overlay\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 1440 320\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    fill: \"#000b76\",\n    \"fill-opacity\": \"1\",\n    d: \"M0,96L60,80C120,64,240,32,360,64C480,96,600,192,720,224C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z\"\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__header--title-and-desc\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__header--logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: \"https://res.cloudinary.com/snackmanproductions/image/upload/v1570836532/portfolio/white_logo_transparent_background_ql1iww.png\",\n    alt: \"asr logo\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__header--title-and-desc--h1-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Alex Shires Roth\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header_HeaderTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reusable_Icons__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n    icons: icons\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./client/components/Header.js?");

/***/ }),

/***/ "./client/components/header/HeaderTag.js":
/*!***********************************************!*\
  !*** ./client/components/header/HeaderTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar HeaderTag = function HeaderTag(props) {\n  var tags = [{\n    title: 'Self Taught Web Developer'\n  }, {\n    title: 'Freelancer'\n  }, {\n    title: 'Indie Game Dev'\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(tags[0].title),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      tag = _useState2[0],\n      setTag = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      visibility = _useState4[0],\n      setVisibility = _useState4[1];\n\n  var fadeInAndOutTag = function fadeInAndOutTag() {\n    var index = 0;\n    var maxIndex = tags.length;\n    setTimeout(function () {\n      setVisibility(1);\n    }, 1500);\n    setInterval(function () {\n      if (index >= maxIndex) index = 0;\n      setTag(tags[index].title);\n      index++;\n      setTimeout(function () {\n        setVisibility(1);\n      }, 10);\n      setTimeout(function () {\n        setVisibility(0);\n      }, 3000);\n    }, 4000);\n    return clearInterval();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fadeInAndOutTag();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    style: {\n      opacity: visibility,\n      transition: 'all .5s ease-in-out'\n    }\n  }, tag));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderTag);\n\n//# sourceURL=webpack:///./client/components/header/HeaderTag.js?");

/***/ }),

/***/ "./client/components/reusable/Icons.js":
/*!*********************************************!*\
  !*** ./client/components/reusable/Icons.js ***!
  \*********************************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Icons = function Icons(props) {\n  var renderIcons = props.icons.map(function (icon) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      target: \"_blank\",\n      href: \"\".concat(icon.url)\n    }, icon.icon);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"section__header--title-and-desc--icons\"\n  }, renderIcons);\n};\n\n//# sourceURL=webpack:///./client/components/reusable/Icons.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ })

}]);