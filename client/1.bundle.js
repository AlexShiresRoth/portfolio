(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/Projects.js":
/*!***************************************!*\
  !*** ./client/components/Projects.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projects_ProjectsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/ProjectsMap */ \"./client/components/projects/ProjectsMap.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Projects = function Projects(props) {\n  var apps = [{\n    title: \"Italiano Bros Website\",\n    tech: \"ReactJS, Express, Javascript, NodeJS\",\n    desc: \"Simple, dynamic and responsive website for a construction company.\",\n    img: [\"italiano-bros.png\"],\n    url: \"http://www.italianobrosenterprise.com/\",\n    codeurl: \"https://github.com/AlexShiresRoth/italiano-bros\"\n  }, {\n    title: \"Send Noods\",\n    tech: \"ReactJS, Express, Javascript, NodeJS\",\n    desc: \"Dynamic and responsive web app for finding ramen restaurants around user location. \\n        Integrated with Google Places/Maps API.\",\n    img: [\"send-noods.png\"],\n    url: \"https://shrouded-reef-43110.herokuapp.com/\",\n    codeurl: \"https://github.com/AlexShiresRoth/send-noods\"\n  }, {\n    title: \"Timer App\",\n    tech: \"PassportJS, Express, Javascript, NodeJS\",\n    desc: \"Simple timer app made with vanilla js and passportjs for user authentication.\",\n    img: [\"timerapp.png\"],\n    url: \"http://personaltimerapp.herokuapp.com/login\",\n    codeurl: \"https://github.com/AlexShiresRoth/timerapp\"\n  }, {\n    title: \"Rothenberg Law Offices\",\n    tech: \"Express, Javascript, NodeJS\",\n    desc: \"Responsive and dynamic website for a law office.\",\n    img: [\"lawoffice.png\"],\n    url: \"http://www.urmyattorney.com/\",\n    codeurl: \"https://github.com/AlexShiresRoth/lawoffice\"\n  }];\n  var games = [{\n    title: \"Room Escape\",\n    tech: \"Unreal Engine 4, C++\",\n    desc: \"Escape from rooms by finding hidden triggers, before time runs out.\",\n    img: [],\n    url: \"http://www.urmyattorney.com/\",\n    codeurl: \"https://github.com/AlexShiresRoth/lawoffice\"\n  }, {\n    title: \"Battlgrounds\",\n    tech: \"Unreal Engine 4, C++\",\n    desc: \"Fight against enemy vehicles on an alien terrain.\",\n    img: [],\n    url: \"http://www.urmyattorney.com/\",\n    codeurl: \"https://github.com/AlexShiresRoth/lawoffice\"\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(apps),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      projects = _useState2[0],\n      toggleProjects = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    toggleProjects(apps);\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"section__projects\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__projects--buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    onClick: function onClick() {\n      return toggleProjects(apps);\n    }\n  }, \"WebApps\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    onClick: function onClick() {\n      return toggleProjects(games);\n    }\n  }, \"Games\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_projects_ProjectsMap__WEBPACK_IMPORTED_MODULE_2__[\"ProjectsMap\"], {\n    projects: projects\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./client/components/Projects.js?");

/***/ }),

/***/ "./client/components/projects/ProjectsMap.js":
/*!***************************************************!*\
  !*** ./client/components/projects/ProjectsMap.js ***!
  \***************************************************/
/*! exports provided: ProjectsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsMap\", function() { return ProjectsMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ProjectsMap = function ProjectsMap(props) {\n  var renderProjects = props.projects.map(function (project) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item--image-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item--image-overlay\"\n    }), project.img.map(function (img, i) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", {\n        className: \"section__projects--item--image-container--image\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(\"./images/projects sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(img)),\n        key: \"\".concat(i),\n        alt: \"\".concat(project.title)\n      }));\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item--info\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item--title\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, project.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--item--links\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: project.url,\n      target: \"_blank\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Live\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: project.codeurl,\n      target: \"_blank\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Code\"))))));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, renderProjects);\n};\n\n//# sourceURL=webpack:///./client/components/projects/ProjectsMap.js?");

/***/ }),

/***/ "./images/projects sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./images/projects sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Screenshot_2019-06-02 React App(1).png\": \"./images/projects/Screenshot_2019-06-02 React App(1).png\",\n\t\"./italiano-bros-mobile.png\": \"./images/projects/italiano-bros-mobile.png\",\n\t\"./italiano-bros.png\": \"./images/projects/italiano-bros.png\",\n\t\"./lawoffice.png\": \"./images/projects/lawoffice.png\",\n\t\"./send-noods.png\": \"./images/projects/send-noods.png\",\n\t\"./timerapp.png\": \"./images/projects/timerapp.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/projects sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./images/projects_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./images/projects/Screenshot_2019-06-02 React App(1).png":
/*!****************************************************************!*\
  !*** ./images/projects/Screenshot_2019-06-02 React App(1).png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"098d0a6ff4910a9dbd792f41d8d224fa.png\";\n\n//# sourceURL=webpack:///./images/projects/Screenshot_2019-06-02_React_App(1).png?");

/***/ }),

/***/ "./images/projects/italiano-bros-mobile.png":
/*!**************************************************!*\
  !*** ./images/projects/italiano-bros-mobile.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c4473b9c188dee7f0b30bb1ec57ae570.png\";\n\n//# sourceURL=webpack:///./images/projects/italiano-bros-mobile.png?");

/***/ }),

/***/ "./images/projects/italiano-bros.png":
/*!*******************************************!*\
  !*** ./images/projects/italiano-bros.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"59c20ce6910f6e5120beef9173b971d6.png\";\n\n//# sourceURL=webpack:///./images/projects/italiano-bros.png?");

/***/ }),

/***/ "./images/projects/lawoffice.png":
/*!***************************************!*\
  !*** ./images/projects/lawoffice.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"240c896df1b467d722a9978fa893aa43.png\";\n\n//# sourceURL=webpack:///./images/projects/lawoffice.png?");

/***/ }),

/***/ "./images/projects/send-noods.png":
/*!****************************************!*\
  !*** ./images/projects/send-noods.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"098d0a6ff4910a9dbd792f41d8d224fa.png\";\n\n//# sourceURL=webpack:///./images/projects/send-noods.png?");

/***/ }),

/***/ "./images/projects/timerapp.png":
/*!**************************************!*\
  !*** ./images/projects/timerapp.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"40055e7f0b9ccff4b3732778b87fb097.png\";\n\n//# sourceURL=webpack:///./images/projects/timerapp.png?");

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

eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

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