(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/components/Skills.js":
/*!*************************************!*\
  !*** ./client/components/Skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skills_SkillsMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/SkillsMap */ \"./client/components/skills/SkillsMap.js\");\n\n\n\n\n\nvar Skills = function Skills() {\n  var skillsArr = [{\n    title: \"JavaScript\",\n    icon: \"fab fa-js-square\",\n    projects: \"10\"\n  }, {\n    title: \"Sass\",\n    icon: \"fab fa-sass\",\n    projects: \"4\"\n  }, {\n    title: \"CSS\",\n    icon: \"fab fa-css3-alt\",\n    projects: \"10\"\n  }, {\n    title: \"React\",\n    icon: \"fab fa-react\",\n    projects: \"3\"\n  }, {\n    title: \"HTML\",\n    icon: \"fab fa-html5\",\n    projects: \"10\"\n  }, {\n    title: \"Node.js\",\n    icon: \"fab fa-node\",\n    projects: \"6\"\n  }, {\n    title: \"ExpressJS\",\n    icon: null,\n    projects: \"6\"\n  }, {\n    title: \"Git\",\n    icon: \"fab fa-git\",\n    projects: null\n  }, {\n    title: \"MongoDB\",\n    icon: null,\n    projects: null\n  }, {\n    title: \"Unreal Engine 4\",\n    icon: null,\n    projects: 2\n  }, {\n    title: \"C++\",\n    icon: null,\n    projects: 2\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(skillsArr),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      skills = _useState2[0],\n      setSkills = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setSkills(skillsArr);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"section__skills\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__skills--heading\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Tech Skills\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__skills--container\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skills_SkillsMap__WEBPACK_IMPORTED_MODULE_3__[\"SkillsMap\"], {\n    skills: skills\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\n\n//# sourceURL=webpack:///./client/components/Skills.js?");

/***/ }),

/***/ "./client/components/skills/SkillsMap.js":
/*!***********************************************!*\
  !*** ./client/components/skills/SkillsMap.js ***!
  \***********************************************/
/*! exports provided: SkillsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SkillsMap\", function() { return SkillsMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar SkillsMap = function SkillsMap(props) {\n  var renderSkills = props.skills.map(function (skill) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__skills--container--skill-row--icon-block\"\n    }, skill.icon ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"\".concat(skill.icon)\n    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, skill.title));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, renderSkills);\n};\n\n//# sourceURL=webpack:///./client/components/skills/SkillsMap.js?");

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