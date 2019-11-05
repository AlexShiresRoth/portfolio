(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./client/components/Skills.js":
/*!*************************************!*\
  !*** ./client/components/Skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/icon.js\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _iconify_icons_mdi_language_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-mdi/language-javascript */ \"./node_modules/@iconify/icons-mdi/language-javascript.js\");\n/* harmony import */ var _iconify_icons_mdi_language_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_language_javascript__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _iconify_icons_simple_icons_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-simple-icons/mongodb */ \"./node_modules/@iconify/icons-simple-icons/mongodb.js\");\n/* harmony import */ var _iconify_icons_simple_icons_mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_simple_icons_mongodb__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _iconify_icons_fa_brands_git_alt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-fa-brands/git-alt */ \"./node_modules/@iconify/icons-fa-brands/git-alt.js\");\n/* harmony import */ var _iconify_icons_fa_brands_git_alt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_git_alt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _iconify_icons_logos_express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-logos/express */ \"./node_modules/@iconify/icons-logos/express.js\");\n/* harmony import */ var _iconify_icons_logos_express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _iconify_icons_fa_brands_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-brands/sass */ \"./node_modules/@iconify/icons-fa-brands/sass.js\");\n/* harmony import */ var _iconify_icons_fa_brands_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_sass__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _iconify_icons_fa_brands_css3_alt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-brands/css3-alt */ \"./node_modules/@iconify/icons-fa-brands/css3-alt.js\");\n/* harmony import */ var _iconify_icons_fa_brands_css3_alt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_css3_alt__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _iconify_icons_fa_brands_html5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-brands/html5 */ \"./node_modules/@iconify/icons-fa-brands/html5.js\");\n/* harmony import */ var _iconify_icons_fa_brands_html5__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_html5__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _iconify_icons_fa_brands_node_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-fa-brands/node-js */ \"./node_modules/@iconify/icons-fa-brands/node-js.js\");\n/* harmony import */ var _iconify_icons_fa_brands_node_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_node_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _iconify_icons_logos_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-logos/redux */ \"./node_modules/@iconify/icons-logos/redux.js\");\n/* harmony import */ var _iconify_icons_logos_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _iconify_icons_fa_brands_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-fa-brands/react */ \"./node_modules/@iconify/icons-fa-brands/react.js\");\n/* harmony import */ var _iconify_icons_fa_brands_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_brands_react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _skills_SkillsMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/SkillsMap */ \"./client/components/skills/SkillsMap.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Skills = function Skills() {\n  var skillsArr = [{\n    title: 'JavaScript',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_mdi_language_javascript__WEBPACK_IMPORTED_MODULE_3___default.a\n    }),\n    projects: '10'\n  }, {\n    title: 'Sass',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_sass__WEBPACK_IMPORTED_MODULE_7___default.a\n    }),\n    projects: '4'\n  }, {\n    title: 'CSS',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_css3_alt__WEBPACK_IMPORTED_MODULE_8___default.a\n    }),\n    projects: '10'\n  }, {\n    title: 'React',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_react__WEBPACK_IMPORTED_MODULE_12___default.a\n    }),\n    projects: '3'\n  }, {\n    title: 'HTML',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_html5__WEBPACK_IMPORTED_MODULE_9___default.a\n    }),\n    projects: '10'\n  }, {\n    title: 'Node.js',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_node_js__WEBPACK_IMPORTED_MODULE_10___default.a\n    }),\n    projects: '6'\n  }, {\n    title: 'Redux',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_logos_redux__WEBPACK_IMPORTED_MODULE_11___default.a\n    }),\n    projects: '2'\n  }, {\n    title: 'Git',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_fa_brands_git_alt__WEBPACK_IMPORTED_MODULE_5___default.a\n    }),\n    projects: null\n  }, {\n    title: 'MongoDB',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_simple_icons_mongodb__WEBPACK_IMPORTED_MODULE_4___default.a\n    }),\n    projects: null\n  }, {\n    title: 'ExpressJS',\n    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      icon: _iconify_icons_logos_express__WEBPACK_IMPORTED_MODULE_6___default.a\n    }),\n    projects: '6'\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(skillsArr),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      skills = _useState2[0],\n      setSkills = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setSkills(skillsArr);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"section__skills\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__skills--heading\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Tech Skills\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"section__skills--container\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skills_SkillsMap__WEBPACK_IMPORTED_MODULE_13__[\"SkillsMap\"], {\n    skills: skills\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\n\n//# sourceURL=webpack:///./client/components/Skills.js?");

/***/ }),

/***/ "./client/components/skills/SkillsMap.js":
/*!***********************************************!*\
  !*** ./client/components/skills/SkillsMap.js ***!
  \***********************************************/
/*! exports provided: SkillsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SkillsMap\", function() { return SkillsMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar SkillsMap = function SkillsMap(_ref) {\n  var skills = _ref.skills;\n  var renderSkills = skills.map(function (skill) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__skills--container--skill-row--icon-block\"\n    }, skill.icon ? skill.icon : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, skill.title));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, renderSkills);\n};\n\n//# sourceURL=webpack:///./client/components/skills/SkillsMap.js?");

/***/ })

}]);