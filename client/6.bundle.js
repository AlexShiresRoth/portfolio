(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Header = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Header */ \"./client/components/Header.js\"));\n});\nvar Projects = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Projects */ \"./client/components/Projects.js\"));\n});\nvar Skills = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./Skills */ \"./client/components/Skills.js\"));\n});\nvar Contact = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./Contact */ \"./client/components/Contact.js\"));\n});\n\nvar Home = function Home() {\n  var components = [{\n    title: 'Header',\n    id: 1\n  }, {\n    title: 'Projects',\n    id: 2\n  }, {\n    title: 'Skills',\n    id: 3\n  }, {\n    title: 'Contact',\n    id: 4\n  }];\n  var refs = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(components.reduce(function (acc, item) {\n    acc[item.id] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])();\n    return acc;\n  }));\n\n  var handleScroll = function handleScroll(id) {\n    refs[id].current.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {\n    key: refs,\n    handleScroll: handleScroll,\n    id: components[0].id\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Projects, {\n    key: refs\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skills, {\n    key: refs\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contact, {\n    key: refs\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./client/components/Home.js?");

/***/ })

}]);