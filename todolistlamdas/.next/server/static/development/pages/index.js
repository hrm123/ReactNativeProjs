module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/todolistReducer.js":
/*!*********************************!*\
  !*** ./data/todolistReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.cjs");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const todoslistReducer = (state, action) => {
  switch (action.type) {
    case "set-current":
      {
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.currentTodo = action.payload;
        });
      }

    case "add":
      {
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos.push(action.payload);
        });
      }

    case "update":
      {
        const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (todoIndex === -1) return state;
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos[todoIndex] = _objectSpread({}, action.payload);
        });
      }

    case "delete":
      {
        const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (todoIndex === -1) return state;
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos.splice(todoIndex, 1);
        });
      }

    default:
      {
        throw new Error(`Unsupported action ${JSON.stringify(action)}`);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (todoslistReducer);

/***/ }),

/***/ "./node_modules/nanoid/index.cjs":
/*!***************************************!*\
  !*** ./node_modules/nanoid/index.cjs ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let crypto = __webpack_require__(/*! crypto */ "crypto")

let { urlAlphabet } = __webpack_require__(/*! ./url-alphabet/index.cjs */ "./node_modules/nanoid/url-alphabet/index.cjs")

// We reuse buffers with the same size to avoid memory fragmentations
// for better performance.
let buffers = {}
let random = bytes => {
  let buffer = buffers[bytes]
  if (!buffer) {
    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.
    // Memory flushing is unnecessary since the buffer allocation itself resets
    // the memory with the new bytes.
    buffer = Buffer.allocUnsafe(bytes)
    if (bytes <= 255) buffers[bytes] = buffer
  }
  return crypto.randomFillSync(buffer)
}

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).
  let step = Math.ceil((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let i = step
      while (i--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[i] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let bytes = random(size)
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    id += urlAlphabet[bytes[size] & 63]
  }
  return id
}

module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.cjs":
/*!****************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.cjs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'

module.exports = { urlAlphabet }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_todolistReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/todolistReducer */ "./data/todolistReducer.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.cjs");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\rnprojs\\todolistlamdas\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const App = () => {
  // The reducer defined before
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_data_todolistReducer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentTodo: "",
    todos: []
  });

  const add = () => {
    dispatch({
      type: "add",
      payload: {
        id: Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])(),
        name: state.currentTodo,
        completed: false,
        createdAt: `${Date.now()}`
      }
    });
    dispatch({
      type: "set-current",
      payload: ""
    });
  };

  const edit = (todo
  /*:Todo*/
  ) => {
    dispatch({
      type: "update",
      payload: todo
    });
  };

  const del = (todo
  /*:Todo*/
  ) => {
    dispatch({
      type: "delete",
      payload: todo
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "To Do List")), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: event => {
      event.preventDefault();
      add(state.currentTodo);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    value: state.currentTodo,
    onChange: event => {
      dispatch({
        type: "set-current",
        payload: event.target.value
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Add")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, state.todos.map(todo => {
    return __jsx("li", {
      key: todo.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "text",
      value: todo.name,
      onChange: event => {
        edit(_objectSpread(_objectSpread({}, todo), {}, {
          name: event.target.value
        }));
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }), __jsx("button", {
      onClick: () => {
        del(todo);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }, "Delete"));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\rnprojs\todolistlamdas\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS90b2RvbGlzdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguY2pzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJ0b2Rvc2xpc3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjZSIsImRyYWZ0IiwiY3VycmVudFRvZG8iLCJwYXlsb2FkIiwidG9kb3MiLCJwdXNoIiwidG9kb0luZGV4IiwiZmluZEluZGV4IiwidG9kbyIsImlkIiwic3BsaWNlIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiQXBwIiwiZGlzcGF0Y2giLCJSZWFjdCIsImFkZCIsIm5hbm9pZCIsIm5hbWUiLCJjb21wbGV0ZWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwiZWRpdCIsImRlbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVFFO0FBQ0UsYUFBTyxFQUFFLE1BQU07QUFDYkosV0FBRyxDQUFDakIsSUFBRCxDQUFIO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLENBREY7QUFrQkQsR0FuQkEsQ0FESCxDQWhCRixDQUpGLENBREY7QUE4Q0QsQ0F0RUg7O0FBdUVlTSxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBuYW5vaWQgZnJvbSAnbmFub2lkJztcclxuXHJcbmNvbnN0IHRvZG9zbGlzdFJlZHVjZXIgID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwic2V0LWN1cnJlbnRcIjoge1xyXG4gICAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRUb2RvID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImFkZFwiOiB7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3MucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcInVwZGF0ZVwiOiB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHN0YXRlLnRvZG9zLmZpbmRJbmRleChcclxuICAgICAgICB0b2RvID0+IHRvZG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPT09IC0xKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3NbdG9kb0luZGV4XSA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiZGVsZXRlXCI6IHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gc3RhdGUudG9kb3MuZmluZEluZGV4KFxyXG4gICAgICAgIHRvZG8gPT4gdG9kby5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA9PT0gLTEpIHJldHVybiBzdGF0ZTtcclxuICAgICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuICAgICAgICBkcmFmdC50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb3NsaXN0UmVkdWNlcjsiLCJsZXQgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcblxubGV0IHsgdXJsQWxwaGFiZXQgfSA9IHJlcXVpcmUoJy4vdXJsLWFscGhhYmV0L2luZGV4LmNqcycpXG5cbi8vIFdlIHJldXNlIGJ1ZmZlcnMgd2l0aCB0aGUgc2FtZSBzaXplIHRvIGF2b2lkIG1lbW9yeSBmcmFnbWVudGF0aW9uc1xuLy8gZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbmxldCBidWZmZXJzID0ge31cbmxldCByYW5kb20gPSBieXRlcyA9PiB7XG4gIGxldCBidWZmZXIgPSBidWZmZXJzW2J5dGVzXVxuICBpZiAoIWJ1ZmZlcikge1xuICAgIC8vIGBCdWZmZXIuYWxsb2NVbnNhZmUoKWAgaXMgZmFzdGVyIGJlY2F1c2UgaXQgZG9lc27igJl0IGZsdXNoIHRoZSBtZW1vcnkuXG4gICAgLy8gTWVtb3J5IGZsdXNoaW5nIGlzIHVubmVjZXNzYXJ5IHNpbmNlIHRoZSBidWZmZXIgYWxsb2NhdGlvbiBpdHNlbGYgcmVzZXRzXG4gICAgLy8gdGhlIG1lbW9yeSB3aXRoIHRoZSBuZXcgYnl0ZXMuXG4gICAgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ5dGVzKVxuICAgIGlmIChieXRlcyA8PSAyNTUpIGJ1ZmZlcnNbYnl0ZXNdID0gYnVmZmVyXG4gIH1cbiAgcmV0dXJuIGNyeXB0by5yYW5kb21GaWxsU3luYyhidWZmZXIpXG59XG5cbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIHNpemUsIGdldFJhbmRvbSkgPT4ge1xuICAvLyBGaXJzdCwgYSBiaXRtYXNrIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgSUQuIFRoZSBiaXRtYXNrIG1ha2VzIGJ5dGVzXG4gIC8vIHZhbHVlcyBjbG9zZXIgdG8gdGhlIGFscGhhYmV0IHNpemUuIFRoZSBiaXRtYXNrIGNhbGN1bGF0ZXMgdGhlIGNsb3Nlc3RcbiAgLy8gYDJeMzEgLSAxYCBudW1iZXIsIHdoaWNoIGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gIC8vIEZvciBleGFtcGxlLCB0aGUgYml0bWFzayBmb3IgdGhlIGFscGhhYmV0IHNpemUgMzAgaXMgMzEgKDAwMDExMTExKS5cbiAgbGV0IG1hc2sgPSAoMiA8PCAoMzEgLSBNYXRoLmNsejMyKChhbHBoYWJldC5sZW5ndGggLSAxKSB8IDEpKSkgLSAxXG4gIC8vIFRob3VnaCwgdGhlIGJpdG1hc2sgc29sdXRpb24gaXMgbm90IHBlcmZlY3Qgc2luY2UgdGhlIGJ5dGVzIGV4Y2VlZGluZ1xuICAvLyB0aGUgYWxwaGFiZXQgc2l6ZSBhcmUgcmVmdXNlZC4gVGhlcmVmb3JlLCB0byByZWxpYWJseSBnZW5lcmF0ZSB0aGUgSUQsXG4gIC8vIHRoZSByYW5kb20gYnl0ZXMgcmVkdW5kYW5jeSBoYXMgdG8gYmUgc2F0aXNmaWVkLlxuXG4gIC8vIE5vdGU6IGV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBwZXJmb3JtYW5jZSBleHBlbnNpdmUsXG4gIC8vIGJlY2F1c2UgdGhlIHN5c3RlbSBjYWxsIGZvciBlbnRyb3B5IGNvbGxlY3Rpb24gdGFrZXMgYSBsb3Qgb2YgdGltZS5cbiAgLy8gU28sIHRvIGF2b2lkIGFkZGl0aW9uYWwgc3lzdGVtIGNhbGxzLCBleHRyYSBieXRlcyBhcmUgcmVxdWVzdGVkIGluIGFkdmFuY2UuXG5cbiAgLy8gTmV4dCwgYSBzdGVwIGRldGVybWluZXMgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuICAvLyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyBnZXRzIGRlY2lkZWQgdXBvbiB0aGUgSUQgc2l6ZSwgbWFzayxcbiAgLy8gYWxwaGFiZXQgc2l6ZSwgYW5kIG1hZ2ljIG51bWJlciAxLjYgKHVzaW5nIDEuNiBwZWFrcyBhdCBwZXJmb3JtYW5jZVxuICAvLyBhY2NvcmRpbmcgdG8gYmVuY2htYXJrcykuXG4gIGxldCBzdGVwID0gTWF0aC5jZWlsKCgxLjYgKiBtYXNrICogc2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIC8vIEEgY29tcGFjdCBhbHRlcm5hdGl2ZSBmb3IgYGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcDsgaSsrKWAuXG4gICAgICBsZXQgaSA9IHN0ZXBcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgLy8gQWRkaW5nIGB8fCAnJ2AgcmVmdXNlcyBhIHJhbmRvbSBieXRlIHRoYXQgZXhjZWVkcyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbaV0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICAvLyBgaWQubGVuZ3RoICsgMSA9PT0gc2l6ZWAgaXMgYSBtb3JlIGNvbXBhY3Qgb3B0aW9uLlxuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSArc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSkgPT4gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5cbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBieXRlcyA9IHJhbmRvbShzaXplKVxuICBsZXQgaWQgPSAnJ1xuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgLy8gSXQgaXMgaW5jb3JyZWN0IHRvIHVzZSBieXRlcyBleGNlZWRpbmcgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBtYXNrIHJlZHVjZXMgdGhlIHJhbmRvbSBieXRlIGluIHRoZSAwLTI1NSB2YWx1ZVxuICAgIC8vIHJhbmdlIHRvIHRoZSAwLTYzIHZhbHVlIHJhbmdlLiBUaGVyZWZvcmUsIGFkZGluZyBoYWNrcywgc3VjaFxuICAgIC8vIGFzIGVtcHR5IHN0cmluZyBmYWxsYmFjayBvciBtYWdpYyBudW1iZXJzLCBpcyB1bm5lY2Nlc3NhcnkgYmVjYXVzZVxuICAgIC8vIHRoZSBiaXRtYXNrIHRyaW1zIGJ5dGVzIGRvd24gdG8gdGhlIGFscGhhYmV0IHNpemUuXG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbYnl0ZXNbc2l6ZV0gJiA2M11cbiAgfVxuICByZXR1cm4gaWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCIvLyBUaGlzIGFscGhhYmV0IHVzZXMgYEEtWmEtejAtOV8tYCBzeW1ib2xzLiBUaGUgZ2VuZXRpYyBhbGdvcml0aG0gaGVscGVkXG4vLyBvcHRpbWl6ZSB0aGUgZ3ppcCBjb21wcmVzc2lvbiBmb3IgdGhpcyBhbHBoYWJldC5cbmxldCB1cmxBbHBoYWJldCA9XG4gICdNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdXJsQWxwaGFiZXQgfVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2Rvc2xpc3RSZWR1Y2VyIGZyb20gICcuLi9kYXRhL3RvZG9saXN0UmVkdWNlcic7XHJcbmltcG9ydCB7bmFub2lkfSBmcm9tICduYW5vaWQnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgLy8gVGhlIHJlZHVjZXIgZGVmaW5lZCBiZWZvcmVcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcih0b2Rvc2xpc3RSZWR1Y2VyLCB7XHJcbiAgICAgIGN1cnJlbnRUb2RvOiBcIlwiLFxyXG4gICAgICB0b2RvczogW11cclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBpZDogbmFub2lkKCksXHJcbiAgICAgICAgICBuYW1lOiBzdGF0ZS5jdXJyZW50VG9kbyxcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGAke0RhdGUubm93KCl9YFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXQtY3VycmVudFwiLCBwYXlsb2FkOiBcIlwiIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVkaXQgPSAodG9kbyAvKjpUb2RvKi8pID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInVwZGF0ZVwiLCBwYXlsb2FkOiB0b2RvIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlbCA9ICh0b2RvIC8qOlRvZG8qLykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiZGVsZXRlXCIsIHBheWxvYWQ6IHRvZG8gfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGgyPlRvIERvIExpc3Q8L2gyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGFkZChzdGF0ZS5jdXJyZW50VG9kbyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuY3VycmVudFRvZG99XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXQtY3VycmVudFwiLCBwYXlsb2FkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtzdGF0ZS50b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9kby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0KHsgLi4udG9kbywgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWwodG9kbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==