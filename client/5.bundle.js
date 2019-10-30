(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/components/Contact.js":
/*!**************************************!*\
  !*** ./client/components/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Contact = function Contact() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    name: '',\n    email: '',\n    message: ''\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var name = inputs.name,\n      email = inputs.email,\n      message = inputs.message;\n  var initialState = {\n    name: '',\n    email: '',\n    message: ''\n  };\n\n  var handleInput = function handleInput(event) {\n    if (event) {\n      event.preventDefault();\n      setInputs(_objectSpread({}, inputs, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, event.target.name, [event.target.value])));\n    }\n  };\n\n  var formSubmit =\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var messageInfo;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              messageInfo = {\n                name: name,\n                email: email,\n                message: message\n              };\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: 'post',\n                url: \"/api/send-email?email=\".concat(messageInfo.email, \"&name=\").concat(messageInfo.name, \"&message=\").concat(messageInfo.message),\n                data: {\n                  headers: {\n                    'Content-Type': 'application/x-www-form-urlencoded'\n                  }\n                }\n              }).then(function (response) {\n                console.log(response);\n                setInputs(_objectSpread({}, initialState));\n                alert('Sent');\n              })[\"catch\"](function (error) {\n                alert(error.message);\n                console.log(error);\n              });\n\n            case 4:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function formSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var renderForm = function renderForm() {\n    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h2\", null, \"Want to work together?\"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"form\", {\n      onSubmit: formSubmit,\n      className: \"section__contact--container--form\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row--icon-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"i\", {\n      \"class\": \"far fa-user\"\n    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n      name: \"name\",\n      type: \"text\",\n      placeholder: \"First & Last Name\",\n      value: name,\n      onChange: function onChange(e) {\n        return handleInput(e);\n      },\n      required: true\n    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row--icon-box\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"i\", {\n      \"class\": \"far fa-envelope\"\n    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n      name: \"email\",\n      type: \"email\",\n      placeholder: \"Email\",\n      value: email,\n      onChange: function onChange(e) {\n        return handleInput(e);\n      },\n      required: true\n    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"textarea\", {\n      name: \"message\",\n      type: \"text\",\n      placeholder: \"Enter your message\",\n      rows: \"10\",\n      value: message,\n      onChange: function onChange(e) {\n        return handleInput(e);\n      },\n      required: true\n    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n      className: \"section__contact--container--form--input-row\"\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"button\", {\n      onClick: formSubmit\n    }, \"Send\")))));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], null, renderForm());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./client/components/Contact.js?");

/***/ })

}]);