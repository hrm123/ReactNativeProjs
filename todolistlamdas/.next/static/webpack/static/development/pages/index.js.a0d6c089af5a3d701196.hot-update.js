webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_todolistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/todolistReducer */ "./data/todolistReducer.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



var _this = undefined,
    _jsxFileName = "C:\\Code\\rnprojs\\todolistlamdas\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var App = function App() {
  _s();

  // The reducer defined before
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](_data_todolistReducer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTodo: "",
    todos: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var add = function add() {
    dispatch({
      type: "add",
      payload: {
        id: Object(nanoid__WEBPACK_IMPORTED_MODULE_4__["nanoid"])(),
        name: state.currentTodo,
        completed: false,
        createdAt: "".concat(Date.now())
      }
    });
    dispatch({
      type: "set-current",
      payload: ""
    });
  };

  var edit = function edit(todo
  /*:Todo*/
  ) {
    dispatch({
      type: "update",
      payload: todo
    });
  };

  var del = function del(todo
  /*:Todo*/
  ) {
    dispatch({
      type: "delete",
      payload: todo
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "To Do List")), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      add(state.currentTodo);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    value: state.currentTodo,
    onChange: function onChange(event) {
      dispatch({
        type: "set-current",
        payload: event.target.value
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Add")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, state.todos.map(function (todo) {
    return __jsx("li", {
      key: todo.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "text",
      value: todo.name,
      onChange: function onChange(event) {
        edit(_objectSpread(_objectSpread({}, todo), {}, {
          name: event.target.value
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }), __jsx("button", {
      onClick: function onClick() {
        del(todo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }, "Delete"));
  }))));
};

_s(App, "kCvCHHVMMxugAAbOs/fxA3o13QY=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsInRvZG9zbGlzdFJlZHVjZXIiLCJjdXJyZW50VG9kbyIsInRvZG9zIiwic3RhdGUiLCJkaXNwYXRjaCIsImFkZCIsInR5cGUiLCJwYXlsb2FkIiwiaWQiLCJuYW5vaWQiLCJuYW1lIiwiY29tcGxldGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsImVkaXQiLCJ0b2RvIiwiZGVsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkO0FBRGMsMEJBRVlDLGdEQUFBLENBQWlCQyw2REFBakIsRUFBbUM7QUFDM0RDLGVBQVcsRUFBRSxFQUQ4QztBQUUzREMsU0FBSyxFQUFFO0FBRm9ELEdBQW5DLENBRlo7QUFBQTtBQUFBLE1BRVBDLEtBRk87QUFBQSxNQUVBQyxRQUZBOztBQU1kLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEJELFlBQVEsQ0FBQztBQUNQRSxVQUFJLEVBQUUsS0FEQztBQUVQQyxhQUFPLEVBQUU7QUFDUEMsVUFBRSxFQUFFQyxxREFBTSxFQURIO0FBRVBDLFlBQUksRUFBRVAsS0FBSyxDQUFDRixXQUZMO0FBR1BVLGlCQUFTLEVBQUUsS0FISjtBQUlQQyxpQkFBUyxZQUFLQyxJQUFJLENBQUNDLEdBQUwsRUFBTDtBQUpGO0FBRkYsS0FBRCxDQUFSO0FBU0FWLFlBQVEsQ0FBQztBQUFFRSxVQUFJLEVBQUUsYUFBUjtBQUF1QkMsYUFBTyxFQUFFO0FBQWhDLEtBQUQsQ0FBUjtBQUNELEdBWEQ7O0FBWUEsTUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0M7QUFBSztBQUFOLElBQW9CO0FBQy9CWixZQUFRLENBQUM7QUFBRUUsVUFBSSxFQUFFLFFBQVI7QUFBa0JDLGFBQU8sRUFBRVM7QUFBM0IsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDRDtBQUFLO0FBQU4sSUFBb0I7QUFDOUJaLFlBQVEsQ0FBQztBQUFFRSxVQUFJLEVBQUUsUUFBUjtBQUFrQkMsYUFBTyxFQUFFUztBQUEzQixLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsNERBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRSxrQkFBQUUsS0FBSyxFQUFJO0FBQ2pCQSxXQUFLLENBQUNDLGNBQU47QUFDQWQsU0FBRyxDQUFDRixLQUFLLENBQUNGLFdBQVAsQ0FBSDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUVFLEtBQUssQ0FBQ0YsV0FGZjtBQUdFLFlBQVEsRUFBRSxrQkFBQWlCLEtBQUssRUFBSTtBQUNqQmQsY0FBUSxDQUFDO0FBQUVFLFlBQUksRUFBRSxhQUFSO0FBQXVCQyxlQUFPLEVBQUVXLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUE3QyxPQUFELENBQVI7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQWFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWJGLENBREYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEIsS0FBSyxDQUFDRCxLQUFOLENBQVlvQixHQUFaLENBQWdCLFVBQUFOLElBQUksRUFBSTtBQUN2QixXQUNFO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNSLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFFLE1BRFI7QUFFRSxXQUFLLEVBQUVRLElBQUksQ0FBQ04sSUFGZDtBQUdFLGNBQVEsRUFBRSxrQkFBQVEsS0FBSyxFQUFJO0FBQ2pCSCxZQUFJLGlDQUFNQyxJQUFOO0FBQVlOLGNBQUksRUFBRVEsS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQS9CLFdBQUo7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVFFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JKLFdBQUcsQ0FBQ0QsSUFBRCxDQUFIO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLENBREY7QUFrQkQsR0FuQkEsQ0FESCxDQWhCRixDQUpGLENBREY7QUE4Q0QsQ0F0RUg7O0dBQU1sQixHOztLQUFBQSxHO0FBdUVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTBkNmMwODlhZjVhM2Q3MDExOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9kb3NsaXN0UmVkdWNlciBmcm9tICAnLi4vZGF0YS90b2RvbGlzdFJlZHVjZXInO1xyXG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIC8vIFRoZSByZWR1Y2VyIGRlZmluZWQgYmVmb3JlXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIodG9kb3NsaXN0UmVkdWNlciwge1xyXG4gICAgICBjdXJyZW50VG9kbzogXCJcIixcclxuICAgICAgdG9kb3M6IFtdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFkZCA9ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiYWRkXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgaWQ6IG5hbm9pZCgpLFxyXG4gICAgICAgICAgbmFtZTogc3RhdGUuY3VycmVudFRvZG8sXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY3JlYXRlZEF0OiBgJHtEYXRlLm5vdygpfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0LWN1cnJlbnRcIiwgcGF5bG9hZDogXCJcIiB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBlZGl0ID0gKHRvZG8gLyo6VG9kbyovKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJ1cGRhdGVcIiwgcGF5bG9hZDogdG9kbyB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkZWwgPSAodG9kbyAvKjpUb2RvKi8pID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcImRlbGV0ZVwiLCBwYXlsb2FkOiB0b2RvIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxoMj5UbyBEbyBMaXN0PC9oMj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBhZGQoc3RhdGUuY3VycmVudFRvZG8pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmN1cnJlbnRUb2RvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0LWN1cnJlbnRcIiwgcGF5bG9hZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7c3RhdGUudG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvZG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdCh7IC4uLnRvZG8sIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==