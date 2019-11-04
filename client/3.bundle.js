(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/components/Projects.js":
/*!***************************************!*\
  !*** ./client/components/Projects.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projects_ProjectsMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/ProjectsMap */ \"./client/components/projects/ProjectsMap.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Projects = function Projects(props) {\n  var apps = [{\n    title: 'Italiano Bros Website',\n    tech: 'ReactJS, Express, Javascript, NodeJS',\n    desc: 'Simple, dynamic and responsive website for a construction company.',\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1567980236/portfolio/2019-09-08_5_ciahbf.png'],\n    url: 'http://www.italianobrosenterprise.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/italiano-bros'\n  }, {\n    title: 'Progress Journal',\n    tech: 'MongoDB Atlas, Express, Javascript, NodeJS, PassportJS',\n    desc: 'Fully CRUD operational web app. ',\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1567978820/portfolio/2019-09-08_iyhfcc.png'],\n    url: 'https://sheltered-ravine-46969.herokuapp.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/italiano-bros'\n  }, {\n    title: 'Consurgo International, Inc',\n    tech: 'ReactJS, GatsbyJS, Sass, NodeJS',\n    desc: \"Responsive and dynamic website for an exporting company\",\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1572395030/portfolio/2019-10-29_kzfuqc.png'],\n    url: 'https://consurgointl.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/consurgointl'\n  }, {\n    title: 'Send Noods',\n    tech: 'ReactJS, Express, Javascript, NodeJS',\n    desc: \"Dynamic and responsive web app for finding ramen restaurants around user location. \\n        Integrated with Google Places/Maps API.\",\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1567980261/portfolio/2019-09-08_7_vtodo7.png'],\n    url: 'https://shrouded-reef-43110.herokuapp.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/send-noods'\n  }, {\n    title: 'Timer App',\n    tech: 'PassportJS, Express, Javascript, NodeJS',\n    desc: \"Simple timer app made with vanilla js and passportjs for user authentication.\",\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1567980273/portfolio/2019-09-08_8_hziqvh.png'],\n    url: 'http://personaltimerapp.herokuapp.com/login',\n    codeurl: 'https://github.com/AlexShiresRoth/timerapp'\n  }, {\n    title: 'Rothenberg Law Offices',\n    tech: 'Express, Javascript, NodeJS',\n    desc: \"Responsive and dynamic website for a law office.\",\n    img: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1567980368/portfolio/2019-09-08_11_zbquop.png'],\n    url: 'http://www.urmyattorney.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/lawoffice'\n  }];\n  var games = [{\n    title: 'Room Escape',\n    tech: 'Unreal Engine 4, C++',\n    desc: 'Escape from rooms by finding hidden triggers, before time runs out.',\n    img: [],\n    url: 'http://www.urmyattorney.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/lawoffice'\n  }, {\n    title: 'Battlgrounds',\n    tech: 'Unreal Engine 4, C++',\n    desc: 'Fight against enemy vehicles on an alien terrain.',\n    img: [],\n    url: 'http://www.urmyattorney.com/',\n    codeurl: 'https://github.com/AlexShiresRoth/lawoffice'\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(apps),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      projects = _useState2[0],\n      toggleProjects = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    toggleProjects(apps);\n  }, []);\n  var thisRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(props.id);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    ref: thisRef,\n    className: \"section__projects\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__projects--buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    onClick: function onClick() {\n      return toggleProjects(apps);\n    }\n  }, \"WebApps\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    onClick: function onClick() {\n      return toggleProjects(games);\n    }\n  }, \"Games\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__projects--container\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_projects_ProjectsMap__WEBPACK_IMPORTED_MODULE_2__[\"ProjectsMap\"], {\n    projects: projects\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./client/components/Projects.js?");

/***/ }),

/***/ "./client/components/projects/ProjectsMap.js":
/*!***************************************************!*\
  !*** ./client/components/projects/ProjectsMap.js ***!
  \***************************************************/
/*! exports provided: ProjectsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsMap\", function() { return ProjectsMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ProjectsMap = function ProjectsMap(props) {\n  var renderProjects = props.projects.map(function (project) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item--image-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item--image-overlay\"\n    }), project.img.map(function (img, i) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", {\n        className: \"section__projects--container--item--image-container--image\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"\".concat(img),\n        key: \"\".concat(i),\n        alt: \"\".concat(project.title)\n      }));\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item--info\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item--title\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, project.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__projects--container--item--links\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: project.url,\n      target: \"_blank\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Live\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: project.codeurl,\n      target: \"_blank\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Code\"))))));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, renderProjects);\n};\n\n//# sourceURL=webpack:///./client/components/projects/ProjectsMap.js?");

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