(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./data/todolistReducer.js":
/*!*********************************!*\
  !*** ./data/todolistReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var todoslistReducer = function todoslistReducer(state, action) {
  switch (action.type) {
    case "set-current":
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
          draft.currentTodo = action.payload;
        });
      }

    case "add":
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
          draft.todos.push(action.payload);
        });
      }

    case "update":
      {
        var todoIndex = state.todos.findIndex(function (todo) {
          return todo.id === action.payload.id;
        });
        if (todoIndex === -1) return state;
        return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
          draft.todos[todoIndex] = _objectSpread({}, action.payload);
        });
      }

    case "delete":
      {
        var _todoIndex = state.todos.findIndex(function (todo) {
          return todo.id === action.payload.id;
        });

        if (_todoIndex === -1) return state;
        return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
          draft.todos.splice(_todoIndex, 1);
        });
      }

    default:
      {
        throw new Error("Unsupported action ".concat(JSON.stringify(action)));
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (todoslistReducer);

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return un; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=L[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[G]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[B]||!!n.constructor[B]||c(n)||s(n))}function e(n){if(n&&n[G])return n[G].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Q)(n).forEach((function(r){return t(r,n[r],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[G];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:c(n)?2:s(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function c(n){return U&&n instanceof Map}function s(n){return W&&n instanceof Set}function v(n){return n.o||n.t}function p(t,r){if(void 0===r&&(r=!1),Array.isArray(t))return t.slice();var e=Object.create(Object.getPrototypeOf(t));return i(t,(function(i){if(i!==G){var o=Object.getOwnPropertyDescriptor(t,i),u=o.value;o.get&&(r||n(1),u=o.get.call(t)),o.enumerable?e[i]=u:Object.defineProperty(e,i,{value:u,writable:!0,configurable:!0})}})),e}function d(n,e){t(n)||h(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=l),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0))}function l(){n(2)}function h(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(t){var r=V[t];return r||n( true?18:undefined,t),r}function b(n,t){V[n]=t}function m(){return false||K||n(0),K}function _(n,t){t&&(y("Patches"),n.u=[],n.s=[],n.v=t)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===K&&(K=n.l)}function g(n){return K={p:[],l:K,h:n,m:!0,_:0}}function w(n){var t=n[G];0===t.i||1===t.i?t.j():t.O=!0}function S(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||y("ES5").S(e,t,o),o?(i[G].P&&(j(e),n(4)),r(t)&&(t=P(e,t),e.l||A(e,t)),e.u&&y("Patches").M(i[G],t,e.u,e.s)):t=P(e,i,[]),j(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function P(n,t,r){if(h(t))return t;var e=t[G];if(!e)return i(t,(function(i,o){return M(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return A(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=p(e.k,!0):e.o;i(o,(function(t,i){return M(n,e,o,t,i,r)})),A(n,o,!1),r&&n.u&&y("Patches").R(e,r,n.u,n.s)}return e.o}function M(e,i,c,s,v,p){if( true&&v===c&&n(5),t(v)){var d=P(e,v,p&&i&&3!==i.i&&!u(i.D,s)?p.concat(s):void 0);if(h=s,y=d,2===(b=o(l=c))?l.set(h,y):3===b?(l.delete(h),l.add(y)):l[h]=y,!t(d))return;e.m=!1}var l,h,y,b;if((!i||!f(v,a(i.t,s)))&&r(v)){if(!e.h.N&&e._<1)return;P(e,v),i&&i.A.l||A(e,v)}}function A(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function x(n,t){var r=n[G],e=Reflect.getOwnPropertyDescriptor(r?v(r):n,t);return e&&e.value}function z(n){if(!n.P){if(n.P=!0,0===n.i||1===n.i){var t=n.o=p(n.t);i(n.p,(function(n,r){t[n]=r})),n.p=void 0}n.l&&z(n.l)}}function I(n){n.o||(n.o=p(n.t))}function E(n,t,r){var e=c(t)?y("MapSet").T(t,r):s(t)?y("MapSet").F(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:n,k:null,p:{},o:null,j:null,C:!1},i=e,o=Y;r&&(i=[e],o=Z);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y("ES5").J(t,r);return(r?r.A:m()).p.push(e),e}function k(n,t){n.g?z(t):y("ES5").K(t)}function R(){function e(n,t){var r=n[G];if(r&&!r.$){r.$=!0;var e=n[t];return r.$=!1,e}return n[t]}function o(n){n.P||(n.P=!0,n.l&&o(n.l))}function a(n){n.o||(n.o=c(n.t))}function c(n){var t=n&&n[G];if(t){t.$=!0;var r=p(t.k,!0);return t.$=!1,r}return p(n)}function s(n){for(var t=n.length-1;t>=0;t--){var r=n[t][G];if(!r.P)switch(r.i){case 5:l(r)&&o(r);break;case 4:d(r)&&o(r)}}}function d(n){for(var t=n.t,r=n.k,e=Object.keys(r),i=e.length-1;i>=0;i--){var o=e[i],a=t[o];if(void 0===a&&!u(t,o))return!0;var c=r[o],s=c&&c[G];if(s?s.t!==a:!f(c,a))return!0}return e.length!==Object.keys(t).length}function l(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function h(t){t.O&&n(3,JSON.stringify(v(t)))}var y={};b("ES5",{J:function(n,t){var u=Array.isArray(n),s=c(n);i(s,(function(t){!function(n,t,i){var u=y[t];u?u.enumerable=i:y[t]=u={enumerable:i,get:function(){return function(n,t){h(n);var i=e(v(n),t);return n.$?i:i===e(n.t,t)&&r(i)?(a(n),n.o[t]=E(n.A.h,i,n)):i}(this[G],t)},set:function(n){!function(n,t,r){if(h(n),n.D[t]=!0,!n.P){if(f(r,e(v(n),t)))return;o(n),a(n)}n.o[t]=r}(this[G],t,n)}},Object.defineProperty(n,t,u)}(s,t,u||function(n,t){var r=Object.getOwnPropertyDescriptor(n,t);return!(!r||!r.enumerable)}(n,t))}));var p={i:u?5:4,A:t?t.A:m(),P:!1,$:!1,I:!1,D:{},l:t,t:n,k:s,o:null,O:!1,C:!1};return Object.defineProperty(s,G,{value:p,writable:!0}),s},K:o,S:function(n,r,e){n.p.forEach((function(n){n[G].$=!0})),e?t(r)&&r[G].A===n&&s(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[G];if(r){var e=r.t,a=r.k,f=r.D,c=r.i;if(4===c)i(a,(function(t){t!==G&&(void 0!==e[t]||u(e,t)?f[t]||n(a[t]):(f[t]=!0,o(r)))})),i(e,(function(n){void 0!==a[n]||u(a,n)||(f[n]=!1,o(r))}));else if(5===c){if(l(r)&&(o(r),f.length=!0),a.length<e.length)for(var s=a.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<a.length;v++)f[v]=!0;for(var p=Math.min(a.length,e.length),d=0;d<p;d++)void 0===f[d]&&n(a[d])}}}}(n.p[0]),s(n.p))}})}function D(){function r(n){if(!n||"object"!=typeof n)return n;if(Array.isArray(n))return n.map(r);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],r(n[1])]})));if(s(n))return new Set(Array.from(n).map(r));var t=Object.create(Object.getPrototypeOf(n));for(var e in n)t[e]=r(n[e]);return t}function e(n){return t(n)?r(n):n}var f="add";b("Patches",{U:function(t,e){return e.forEach((function(e){for(var i=e.path,u=e.op,c=t,s=0;s<i.length-1;s++)"object"!=typeof(c=a(c,i[s]))&&n(15,i.join("/"));var v=o(c),p=r(e.value),d=i[i.length-1];switch(u){case"replace":switch(v){case 2:return c.set(d,p);case 3:n(16);default:return c[d]=p}case f:switch(v){case 1:return c.splice(d,0,p);case 2:return c.set(d,p);case 3:return c.add(p);default:return c[d]=p}case"remove":switch(v){case 1:return c.splice(d,1);case 2:return c.delete(d);case 3:return c.delete(e.value);default:return delete c[d]}default:n(17,u)}})),t},R:function(n,t,r,o){switch(n.i){case 0:case 4:case 2:return function(n,t,r,o){var c=n.t,s=n.o;i(n.D,(function(n,i){var v=a(c,n),p=a(s,n),d=i?u(c,n)?"replace":f:"remove";if(v!==p||"replace"!==d){var l=t.concat(n);r.push("remove"===d?{op:d,path:l}:{op:d,path:l,value:p}),o.push(d===f?{op:"remove",path:l}:"remove"===d?{op:f,path:l,value:e(v)}:{op:"replace",path:l,value:e(v)})}}))}(n,t,r,o);case 5:case 1:return function(n,t,r,i){var o=n.t,u=n.D,a=n.o;if(a.length<o.length){var c=[a,o];o=c[0],a=c[1];var s=[i,r];r=s[0],i=s[1]}for(var v=a.length-o.length,p=0;o[p]===a[p]&&p<o.length;)++p;for(var d=o.length;d>p&&o[d-1]===a[d+v-1];)--d;for(var l=p;l<d;++l)if(u[l]&&a[l]!==o[l]){var h=t.concat([l]);r.push({op:"replace",path:h,value:e(a[l])}),i.push({op:"replace",path:h,value:e(o[l])})}for(var y=r.length,b=d+v-1;b>=d;--b){var m=t.concat([b]);r[y+b-d]={op:f,path:m,value:e(a[b])},i.push({op:"remove",path:m})}}(n,t,r,o);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:f,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:f,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,o)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function N(){function t(n,t){function r(){this.constructor=n}u(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function i(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=E(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function o(t){t.O&&n(3,JSON.stringify(v(t)))}var u=function(n,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},a=function(){function n(n,t){return this[G]={i:2,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var i=n.prototype;return Object.defineProperty(i,"size",{get:function(){return v(this[G]).size}}),i.has=function(n){return v(this[G]).has(n)},i.set=function(n,t){var r=this[G];return o(r),v(r).get(n)!==t&&(e(r),k(r.A.h,r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},i.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),e(t),k(t.A.h,t),t.D.set(n,!1),t.o.delete(n),!0},i.clear=function(){var n=this[G];return o(n),e(n),k(n.A.h,n),n.D=new Map,n.o.clear()},i.forEach=function(n,t){var r=this;v(this[G]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},i.get=function(n){var t=this[G];o(t);var i=v(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var u=E(t.A.h,i,t);return e(t),t.o.set(n,u),u},i.keys=function(){return v(this[G]).keys()},i.values=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},i.entries=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},i[H]=function(){return this.entries()},n}(),f=function(){function n(n,t){return this[G]={i:3,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return v(this[G]).size}}),r.has=function(n){var t=this[G];return o(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[G];return o(t),this.has(n)||(i(t),k(t.A.h,t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),i(t),k(t.A.h,t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[G];return o(n),i(n),k(n.A.h,n),n.o.clear()},r.values=function(){var n=this[G];return o(n),i(n),n.o.values()},r.entries=function(){var n=this[G];return o(n),i(n),n.o.entries()},r.keys=function(){return this.values()},r[H]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();b("MapSet",{T:function(n,t){return new a(n,t)},F:function(n,t){return new f(n,t)}})}function T(){R(),N(),D()}function F(n){return n}function C(n){return n}var J,K,$="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),U="undefined"!=typeof Map,W="undefined"!=typeof Set,X="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=$?Symbol("immer-nothing"):((J={})["immer-nothing"]=!0,J),B=$?Symbol("immer-draftable"):"__$immer_draftable",G=$?Symbol("immer-state"):"__$immer_state",H="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",L={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},19:function(n){return"plugin not loaded: "+n},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available"},Q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,V={},Y={get:function(n,t){if(t===G)return n;var e=n.p;if(!n.P&&u(e,t))return e[t];var i=v(n)[t];if(n.I||!r(i))return i;if(n.P){if(i!==x(n.t,t))return i;e=n.o}return e[t]=E(n.A.h,i,n)},has:function(n,t){return t in v(n)},ownKeys:function(n){return Reflect.ownKeys(v(n))},set:function(n,t,r){if(!n.P){var e=x(n.t,t);if(r?f(e,r)||r===n.p[t]:f(e,r)&&t in n.t)return!0;I(n),z(n)}return n.D[t]=!0,n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==x(n.t,t)||t in n.t?(n.D[t]=!1,I(n),z(n)):n.D[t]&&delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=v(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e&&(e.writable=!0,e.configurable=1!==n.i||"length"!==t),e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},Z={};i(Y,(function(n,t){Z[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Z.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),Y.deleteProperty.call(this,t[0],r)},Z.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),Y.set.call(this,t[0],r,e,t[0])};var nn=function(){function e(n){this.g=X,this.N="production"!=="development","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=g(this),c=E(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?j(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return _(f,i),S(n,f)}),(function(n){throw j(f),n})):(_(f,i),S(a,f))}if((a=e(t))!==q)return void 0===a&&(a=t),this.N&&d(a,!0),a},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(t){r(t)||n(8);var e=g(this),i=E(this,t,void 0);return i[G].C=!0,O(e),i},i.finishDraft=function(t,r){var e=t&&t[G]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return _(i,r),S(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){X||n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y("Patches").U;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),tn=new nn,rn=tn.produce,en=tn.produceWithPatches.bind(tn),on=tn.setAutoFreeze.bind(tn),un=tn.setUseProxies.bind(tn),an=tn.applyPatches.bind(tn),fn=tn.createDraft.bind(tn),cn=tn.finishDraft.bind(tn);/* harmony default export */ __webpack_exports__["default"] = (rn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Add `if (!window.crypto) window.crypto = window.msCrypto` ' +
        'before Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
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

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CCode%5Crnprojs%5Ctodolistlamdas%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CCode%5Crnprojs%5Ctodolistlamdas%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CCode%5Crnprojs%5Ctodolistlamdas%5Cpages%5Cindex.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CCode%5Crnprojs%5Ctodolistlamdas%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CCode%5Crnprojs%5Ctodolistlamdas%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3RvZG9saXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbInRvZG9zbGlzdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWNlIiwiZHJhZnQiLCJjdXJyZW50VG9kbyIsInBheWxvYWQiLCJ0b2RvcyIsInB1c2giLCJ0b2RvSW5kZXgiLCJmaW5kSW5kZXgiLCJ0b2RvIiwiaWQiLCJzcGxpY2UiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJBcHAiLCJSZWFjdCIsImRpc3BhdGNoIiwiYWRkIiwibmFub2lkIiwibmFtZSIsImNvbXBsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJlZGl0IiwiZGVsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUksU0FBcEJBLGdCQUFvQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDM0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxhQUFMO0FBQW9CO0FBQ2xCLGVBQU9DLHFEQUFPLENBQUNILEtBQUQsRUFBUSxVQUFBSSxLQUFLLEVBQUk7QUFDN0JBLGVBQUssQ0FBQ0MsV0FBTixHQUFvQkosTUFBTSxDQUFDSyxPQUEzQjtBQUNELFNBRmEsQ0FBZDtBQUdEOztBQUNELFNBQUssS0FBTDtBQUFZO0FBQ1YsZUFBT0gscURBQU8sQ0FBQ0gsS0FBRCxFQUFRLFVBQUFJLEtBQUssRUFBSTtBQUM3QkEsZUFBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJQLE1BQU0sQ0FBQ0ssT0FBeEI7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QUNFO0FBQ0UsVUFBSSxFQUFFLE1BRFI7QUFFRSxXQUFLLEVBQUVELElBQUksQ0FBQ1csSUFGZDtBQUdFLGNBQVEsRUFBRSxrQkFBQU8sS0FBSyxFQUFJO0FBQ2pCRixZQUFJLGlDQUFNaEIsSUFBTjtBQUFZVyxjQUFJLEVBQUVPLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUEvQixXQUFKO0FBQ0QsT0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFRRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiSixXQUFHLENBQUNqQixJQUFELENBQUg7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsQ0FERjtBQWtCRCxHQW5CQSxDQURILENBaEJGLENBSkYsQ0FERjtBQThDRCxDQXRFSDs7R0FBTU0sRzs7S0FBQUEsRztBQXVFU0Esa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQSwwQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBuYW5vaWQgZnJvbSAnbmFub2lkJztcclxuXHJcbmNvbnN0IHRvZG9zbGlzdFJlZHVjZXIgID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwic2V0LWN1cnJlbnRcIjoge1xyXG4gICAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRUb2RvID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImFkZFwiOiB7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3MucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcInVwZGF0ZVwiOiB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHN0YXRlLnRvZG9zLmZpbmRJbmRleChcclxuICAgICAgICB0b2RvID0+IHRvZG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPT09IC0xKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3NbdG9kb0luZGV4XSA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiZGVsZXRlXCI6IHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gc3RhdGUudG9kb3MuZmluZEluZGV4KFxyXG4gICAgICAgIHRvZG8gPT4gdG9kby5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA9PT0gLTEpIHJldHVybiBzdGF0ZTtcclxuICAgICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuICAgICAgICBkcmFmdC50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb3NsaXN0UmVkdWNlcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxyPUFycmF5KHQ+MT90LTE6MCksZT0xO2U8dDtlKyspcltlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1MW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCxyKTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyhyLmxlbmd0aD9cIiBcIityLmpvaW4oXCIsXCIpOlwiXCIpK1wiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmXCIpfWZ1bmN0aW9uIHQobil7cmV0dXJuISFuJiYhIW5bR119ZnVuY3Rpb24gcihuKXtyZXR1cm4hIW4mJihmdW5jdGlvbihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuITE7dmFyIHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3JldHVybiF0fHx0PT09T2JqZWN0LnByb3RvdHlwZX0obil8fEFycmF5LmlzQXJyYXkobil8fCEhbltCXXx8ISFuLmNvbnN0cnVjdG9yW0JdfHxjKG4pfHxzKG4pKX1mdW5jdGlvbiBlKG4pe2lmKG4mJm5bR10pcmV0dXJuIG5bR10udH1mdW5jdGlvbiBpKG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksMD09PW8obik/KHI/T2JqZWN0LmtleXM6USkobikuZm9yRWFjaCgoZnVuY3Rpb24ocil7cmV0dXJuIHQocixuW3JdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24ocixlKXtyZXR1cm4gdChlLHIsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgdD1uW0ddO3JldHVybiB0P3QuaT4zP3QuaS00OnQuaTpBcnJheS5pc0FycmF5KG4pPzE6YyhuKT8yOnMobik/MzowfWZ1bmN0aW9uIHUobix0KXtyZXR1cm4gMj09PW8obik/bi5oYXModCk6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9ZnVuY3Rpb24gYShuLHQpe3JldHVybiAyPT09byhuKT9uLmdldCh0KTpuW3RdfWZ1bmN0aW9uIGYobix0KXtyZXR1cm4gbj09PXQ/MCE9PW58fDEvbj09MS90Om4hPW4mJnQhPXR9ZnVuY3Rpb24gYyhuKXtyZXR1cm4gVSYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiBzKG4pe3JldHVybiBXJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHYobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIHAodCxyKXtpZih2b2lkIDA9PT1yJiYocj0hMSksQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdC5zbGljZSgpO3ZhciBlPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKTtyZXR1cm4gaSh0LChmdW5jdGlvbihpKXtpZihpIT09Ryl7dmFyIG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGkpLHU9by52YWx1ZTtvLmdldCYmKHJ8fG4oMSksdT1vLmdldC5jYWxsKHQpKSxvLmVudW1lcmFibGU/ZVtpXT11Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse3ZhbHVlOnUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9fSkpLGV9ZnVuY3Rpb24gZChuLGUpe3Qobil8fGgobil8fCFyKG4pfHwobyhuKT4xJiYobi5zZXQ9bi5hZGQ9bi5jbGVhcj1uLmRlbGV0ZT1sKSxPYmplY3QuZnJlZXplKG4pLGUmJmkobiwoZnVuY3Rpb24obix0KXtyZXR1cm4gZCh0LCEwKX0pLCEwKSl9ZnVuY3Rpb24gbCgpe24oMil9ZnVuY3Rpb24gaChuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiB5KHQpe3ZhciByPVZbdF07cmV0dXJuIHJ8fG4oXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj8xODoxOSx0KSxyfWZ1bmN0aW9uIGIobix0KXtWW25dPXR9ZnVuY3Rpb24gbSgpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fEt8fG4oMCksS31mdW5jdGlvbiBfKG4sdCl7dCYmKHkoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXQpfWZ1bmN0aW9uIGoobil7TyhuKSxuLnAuZm9yRWFjaCh3KSxuLnA9bnVsbH1mdW5jdGlvbiBPKG4pe249PT1LJiYoSz1uLmwpfWZ1bmN0aW9uIGcobil7cmV0dXJuIEs9e3A6W10sbDpLLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gdyhuKXt2YXIgdD1uW0ddOzA9PT10Lml8fDE9PT10Lmk/dC5qKCk6dC5PPSEwfWZ1bmN0aW9uIFModCxlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT10JiZ0IT09aTtyZXR1cm4gZS5oLmd8fHkoXCJFUzVcIikuUyhlLHQsbyksbz8oaVtHXS5QJiYoaihlKSxuKDQpKSxyKHQpJiYodD1QKGUsdCksZS5sfHxBKGUsdCkpLGUudSYmeShcIlBhdGNoZXNcIikuTShpW0ddLHQsZS51LGUucykpOnQ9UChlLGksW10pLGooZSksZS51JiZlLnYoZS51LGUucyksdCE9PXE/dDp2b2lkIDB9ZnVuY3Rpb24gUChuLHQscil7aWYoaCh0KSlyZXR1cm4gdDt2YXIgZT10W0ddO2lmKCFlKXJldHVybiBpKHQsKGZ1bmN0aW9uKGksbyl7cmV0dXJuIE0obixlLHQsaSxvLHIpfSksITApLHQ7aWYoZS5BIT09bilyZXR1cm4gdDtpZighZS5QKXJldHVybiBBKG4sZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89cChlLmssITApOmUubztpKG8sKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIE0obixlLG8sdCxpLHIpfSkpLEEobixvLCExKSxyJiZuLnUmJnkoXCJQYXRjaGVzXCIpLlIoZSxyLG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gTShlLGksYyxzLHYscCl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdj09PWMmJm4oNSksdCh2KSl7dmFyIGQ9UChlLHYscCYmaSYmMyE9PWkuaSYmIXUoaS5ELHMpP3AuY29uY2F0KHMpOnZvaWQgMCk7aWYoaD1zLHk9ZCwyPT09KGI9byhsPWMpKT9sLnNldChoLHkpOjM9PT1iPyhsLmRlbGV0ZShoKSxsLmFkZCh5KSk6bFtoXT15LCF0KGQpKXJldHVybjtlLm09ITF9dmFyIGwsaCx5LGI7aWYoKCFpfHwhZih2LGEoaS50LHMpKSkmJnIodikpe2lmKCFlLmguTiYmZS5fPDEpcmV0dXJuO1AoZSx2KSxpJiZpLkEubHx8QShlLHYpfX1mdW5jdGlvbiBBKG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksbi5oLk4mJm4ubSYmZCh0LHIpfWZ1bmN0aW9uIHgobix0KXt2YXIgcj1uW0ddLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocj92KHIpOm4sdCk7cmV0dXJuIGUmJmUudmFsdWV9ZnVuY3Rpb24geihuKXtpZighbi5QKXtpZihuLlA9ITAsMD09PW4uaXx8MT09PW4uaSl7dmFyIHQ9bi5vPXAobi50KTtpKG4ucCwoZnVuY3Rpb24obixyKXt0W25dPXJ9KSksbi5wPXZvaWQgMH1uLmwmJnoobi5sKX19ZnVuY3Rpb24gSShuKXtuLm98fChuLm89cChuLnQpKX1mdW5jdGlvbiBFKG4sdCxyKXt2YXIgZT1jKHQpP3koXCJNYXBTZXRcIikuVCh0LHIpOnModCk/eShcIk1hcFNldFwiKS5GKHQscik6bi5nP2Z1bmN0aW9uKG4sdCl7dmFyIHI9QXJyYXkuaXNBcnJheShuKSxlPXtpOnI/MTowLEE6dD90LkE6bSgpLFA6ITEsSTohMSxEOnt9LGw6dCx0Om4sazpudWxsLHA6e30sbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1ZO3ImJihpPVtlXSxvPVopO3ZhciB1PVByb3h5LnJldm9jYWJsZShpLG8pLGE9dS5yZXZva2UsZj11LnByb3h5O3JldHVybiBlLms9ZixlLmo9YSxmfSh0LHIpOnkoXCJFUzVcIikuSih0LHIpO3JldHVybihyP3IuQTptKCkpLnAucHVzaChlKSxlfWZ1bmN0aW9uIGsobix0KXtuLmc/eih0KTp5KFwiRVM1XCIpLksodCl9ZnVuY3Rpb24gUigpe2Z1bmN0aW9uIGUobix0KXt2YXIgcj1uW0ddO2lmKHImJiFyLiQpe3IuJD0hMDt2YXIgZT1uW3RdO3JldHVybiByLiQ9ITEsZX1yZXR1cm4gblt0XX1mdW5jdGlvbiBvKG4pe24uUHx8KG4uUD0hMCxuLmwmJm8obi5sKSl9ZnVuY3Rpb24gYShuKXtuLm98fChuLm89YyhuLnQpKX1mdW5jdGlvbiBjKG4pe3ZhciB0PW4mJm5bR107aWYodCl7dC4kPSEwO3ZhciByPXAodC5rLCEwKTtyZXR1cm4gdC4kPSExLHJ9cmV0dXJuIHAobil9ZnVuY3Rpb24gcyhuKXtmb3IodmFyIHQ9bi5sZW5ndGgtMTt0Pj0wO3QtLSl7dmFyIHI9blt0XVtHXTtpZighci5QKXN3aXRjaChyLmkpe2Nhc2UgNTpsKHIpJiZvKHIpO2JyZWFrO2Nhc2UgNDpkKHIpJiZvKHIpfX19ZnVuY3Rpb24gZChuKXtmb3IodmFyIHQ9bi50LHI9bi5rLGU9T2JqZWN0LmtleXMociksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldLGE9dFtvXTtpZih2b2lkIDA9PT1hJiYhdSh0LG8pKXJldHVybiEwO3ZhciBjPXJbb10scz1jJiZjW0ddO2lmKHM/cy50IT09YTohZihjLGEpKXJldHVybiEwfXJldHVybiBlLmxlbmd0aCE9PU9iamVjdC5rZXlzKHQpLmxlbmd0aH1mdW5jdGlvbiBsKG4pe3ZhciB0PW4uaztpZih0Lmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHQubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBoKHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHYodCkpKX12YXIgeT17fTtiKFwiRVM1XCIse0o6ZnVuY3Rpb24obix0KXt2YXIgdT1BcnJheS5pc0FycmF5KG4pLHM9YyhuKTtpKHMsKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsaSl7dmFyIHU9eVt0XTt1P3UuZW51bWVyYWJsZT1pOnlbdF09dT17ZW51bWVyYWJsZTppLGdldDpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihuLHQpe2gobik7dmFyIGk9ZSh2KG4pLHQpO3JldHVybiBuLiQ/aTppPT09ZShuLnQsdCkmJnIoaSk/KGEobiksbi5vW3RdPUUobi5BLmgsaSxuKSk6aX0odGhpc1tHXSx0KX0sc2V0OmZ1bmN0aW9uKG4peyFmdW5jdGlvbihuLHQscil7aWYoaChuKSxuLkRbdF09ITAsIW4uUCl7aWYoZihyLGUodihuKSx0KSkpcmV0dXJuO28obiksYShuKX1uLm9bdF09cn0odGhpc1tHXSx0LG4pfX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCx1KX0ocyx0LHV8fGZ1bmN0aW9uKG4sdCl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpO3JldHVybiEoIXJ8fCFyLmVudW1lcmFibGUpfShuLHQpKX0pKTt2YXIgcD17aTp1PzU6NCxBOnQ/dC5BOm0oKSxQOiExLCQ6ITEsSTohMSxEOnt9LGw6dCx0Om4sazpzLG86bnVsbCxPOiExLEM6ITF9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocyxHLHt2YWx1ZTpwLHdyaXRhYmxlOiEwfSksc30sSzpvLFM6ZnVuY3Rpb24obixyLGUpe24ucC5mb3JFYWNoKChmdW5jdGlvbihuKXtuW0ddLiQ9ITB9KSksZT90KHIpJiZyW0ddLkE9PT1uJiZzKG4ucCk6KG4udSYmZnVuY3Rpb24gbih0KXtpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIHI9dFtHXTtpZihyKXt2YXIgZT1yLnQsYT1yLmssZj1yLkQsYz1yLmk7aWYoND09PWMpaShhLChmdW5jdGlvbih0KXt0IT09RyYmKHZvaWQgMCE9PWVbdF18fHUoZSx0KT9mW3RdfHxuKGFbdF0pOihmW3RdPSEwLG8ocikpKX0pKSxpKGUsKGZ1bmN0aW9uKG4pe3ZvaWQgMCE9PWFbbl18fHUoYSxuKXx8KGZbbl09ITEsbyhyKSl9KSk7ZWxzZSBpZig1PT09Yyl7aWYobChyKSYmKG8ociksZi5sZW5ndGg9ITApLGEubGVuZ3RoPGUubGVuZ3RoKWZvcih2YXIgcz1hLmxlbmd0aDtzPGUubGVuZ3RoO3MrKylmW3NdPSExO2Vsc2UgZm9yKHZhciB2PWUubGVuZ3RoO3Y8YS5sZW5ndGg7disrKWZbdl09ITA7Zm9yKHZhciBwPU1hdGgubWluKGEubGVuZ3RoLGUubGVuZ3RoKSxkPTA7ZDxwO2QrKyl2b2lkIDA9PT1mW2RdJiZuKGFbZF0pfX19fShuLnBbMF0pLHMobi5wKSl9fSl9ZnVuY3Rpb24gRCgpe2Z1bmN0aW9uIHIobil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKHIpO2lmKGMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxyKG5bMV0pXX0pKSk7aWYocyhuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChyKSk7dmFyIHQ9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgZSBpbiBuKXRbZV09cihuW2VdKTtyZXR1cm4gdH1mdW5jdGlvbiBlKG4pe3JldHVybiB0KG4pP3Iobik6bn12YXIgZj1cImFkZFwiO2IoXCJQYXRjaGVzXCIse1U6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXtmb3IodmFyIGk9ZS5wYXRoLHU9ZS5vcCxjPXQscz0wO3M8aS5sZW5ndGgtMTtzKyspXCJvYmplY3RcIiE9dHlwZW9mKGM9YShjLGlbc10pKSYmbigxNSxpLmpvaW4oXCIvXCIpKTt2YXIgdj1vKGMpLHA9cihlLnZhbHVlKSxkPWlbaS5sZW5ndGgtMV07c3dpdGNoKHUpe2Nhc2VcInJlcGxhY2VcIjpzd2l0Y2godil7Y2FzZSAyOnJldHVybiBjLnNldChkLHApO2Nhc2UgMzpuKDE2KTtkZWZhdWx0OnJldHVybiBjW2RdPXB9Y2FzZSBmOnN3aXRjaCh2KXtjYXNlIDE6cmV0dXJuIGMuc3BsaWNlKGQsMCxwKTtjYXNlIDI6cmV0dXJuIGMuc2V0KGQscCk7Y2FzZSAzOnJldHVybiBjLmFkZChwKTtkZWZhdWx0OnJldHVybiBjW2RdPXB9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKHYpe2Nhc2UgMTpyZXR1cm4gYy5zcGxpY2UoZCwxKTtjYXNlIDI6cmV0dXJuIGMuZGVsZXRlKGQpO2Nhc2UgMzpyZXR1cm4gYy5kZWxldGUoZS52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGNbZF19ZGVmYXVsdDpuKDE3LHUpfX0pKSx0fSxSOmZ1bmN0aW9uKG4sdCxyLG8pe3N3aXRjaChuLmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHQscixvKXt2YXIgYz1uLnQscz1uLm87aShuLkQsKGZ1bmN0aW9uKG4saSl7dmFyIHY9YShjLG4pLHA9YShzLG4pLGQ9aT91KGMsbik/XCJyZXBsYWNlXCI6ZjpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWQpe3ZhciBsPXQuY29uY2F0KG4pO3IucHVzaChcInJlbW92ZVwiPT09ZD97b3A6ZCxwYXRoOmx9OntvcDpkLHBhdGg6bCx2YWx1ZTpwfSksby5wdXNoKGQ9PT1mP3tvcDpcInJlbW92ZVwiLHBhdGg6bH06XCJyZW1vdmVcIj09PWQ/e29wOmYscGF0aDpsLHZhbHVlOmUodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmwsdmFsdWU6ZSh2KX0pfX0pKX0obix0LHIsbyk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24obix0LHIsaSl7dmFyIG89bi50LHU9bi5ELGE9bi5vO2lmKGEubGVuZ3RoPG8ubGVuZ3RoKXt2YXIgYz1bYSxvXTtvPWNbMF0sYT1jWzFdO3ZhciBzPVtpLHJdO3I9c1swXSxpPXNbMV19Zm9yKHZhciB2PWEubGVuZ3RoLW8ubGVuZ3RoLHA9MDtvW3BdPT09YVtwXSYmcDxvLmxlbmd0aDspKytwO2Zvcih2YXIgZD1vLmxlbmd0aDtkPnAmJm9bZC0xXT09PWFbZCt2LTFdOyktLWQ7Zm9yKHZhciBsPXA7bDxkOysrbClpZih1W2xdJiZhW2xdIT09b1tsXSl7dmFyIGg9dC5jb25jYXQoW2xdKTtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6aCx2YWx1ZTplKGFbbF0pfSksaS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOmgsdmFsdWU6ZShvW2xdKX0pfWZvcih2YXIgeT1yLmxlbmd0aCxiPWQrdi0xO2I+PWQ7LS1iKXt2YXIgbT10LmNvbmNhdChbYl0pO3JbeStiLWRdPXtvcDpmLHBhdGg6bSx2YWx1ZTplKGFbYl0pfSxpLnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDptfSl9fShuLHQscixvKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpmLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOmYscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4sdCxyLG8pfX0sTTpmdW5jdGlvbihuLHQscixlKXtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6dH0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBOKCl7ZnVuY3Rpb24gdChuLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPW59dShuLHQpLG4ucHJvdG90eXBlPShyLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBpKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbih0KXtpZihyKHQpKXt2YXIgZT1FKG4uQS5oLHQsbik7bi5wLnNldCh0LGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHQpfSkpKX1mdW5jdGlvbiBvKHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHYodCkpKX12YXIgdT1mdW5jdGlvbihuLHQpe3JldHVybih1PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHQpe24uX19wcm90b19fPXR9fHxmdW5jdGlvbihuLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuW3JdPXRbcl0pfSkobix0KX0sYT1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tHXT17aToyLGw6dCxBOnQ/dC5BOm0oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLE86ITF9LHRoaXN9dChuLE1hcCk7dmFyIGk9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzW0ddKS5zaXplfX0pLGkuaGFzPWZ1bmN0aW9uKG4pe3JldHVybiB2KHRoaXNbR10pLmhhcyhuKX0saS5zZXQ9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzW0ddO3JldHVybiBvKHIpLHYocikuZ2V0KG4pIT09dCYmKGUociksayhyLkEuaCxyKSxyLkQuc2V0KG4sITApLHIuby5zZXQobix0KSxyLkQuc2V0KG4sITApKSx0aGlzfSxpLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tHXTtyZXR1cm4gbyh0KSxlKHQpLGsodC5BLmgsdCksdC5ELnNldChuLCExKSx0Lm8uZGVsZXRlKG4pLCEwfSxpLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tHXTtyZXR1cm4gbyhuKSxlKG4pLGsobi5BLmgsbiksbi5EPW5ldyBNYXAsbi5vLmNsZWFyKCl9LGkuZm9yRWFjaD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXM7dih0aGlzW0ddKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe24uY2FsbCh0LHIuZ2V0KGkpLGkscil9KSl9LGkuZ2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbR107byh0KTt2YXIgaT12KHQpLmdldChuKTtpZih0Lkl8fCFyKGkpKXJldHVybiBpO2lmKGkhPT10LnQuZ2V0KG4pKXJldHVybiBpO3ZhciB1PUUodC5BLmgsaSx0KTtyZXR1cm4gZSh0KSx0Lm8uc2V0KG4sdSksdX0saS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpc1tHXSkua2V5cygpfSxpLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtIXT1mdW5jdGlvbigpe3JldHVybiB0LnZhbHVlcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtyZXR1cm4gbi5kb25lP246e2RvbmU6ITEsdmFsdWU6dC5nZXQobi52YWx1ZSl9fSxufSxpLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbSF09ZnVuY3Rpb24oKXtyZXR1cm4gdC5lbnRyaWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO2lmKG4uZG9uZSlyZXR1cm4gbjt2YXIgZT10LmdldChuLnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbbi52YWx1ZSxlXX19LG59LGlbSF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LG59KCksZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tHXT17aTozLGw6dCxBOnQ/dC5BOm0oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDpuLGs6dGhpcyxwOm5ldyBNYXAsTzohMSxDOiExfSx0aGlzfXQobixTZXQpO3ZhciByPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocixcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYodGhpc1tHXSkuc2l6ZX19KSxyLmhhcz1mdW5jdGlvbihuKXt2YXIgdD10aGlzW0ddO3JldHVybiBvKHQpLHQubz8hIXQuby5oYXMobil8fCEoIXQucC5oYXMobil8fCF0Lm8uaGFzKHQucC5nZXQobikpKTp0LnQuaGFzKG4pfSxyLmFkZD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW0ddO3JldHVybiBvKHQpLHRoaXMuaGFzKG4pfHwoaSh0KSxrKHQuQS5oLHQpLHQuby5hZGQobikpLHRoaXN9LHIuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW0ddO3JldHVybiBvKHQpLGkodCksayh0LkEuaCx0KSx0Lm8uZGVsZXRlKG4pfHwhIXQucC5oYXMobikmJnQuby5kZWxldGUodC5wLmdldChuKSl9LHIuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW0ddO3JldHVybiBvKG4pLGkobiksayhuLkEuaCxuKSxuLm8uY2xlYXIoKX0sci52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW0ddO3JldHVybiBvKG4pLGkobiksbi5vLnZhbHVlcygpfSxyLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW0ddO3JldHVybiBvKG4pLGkobiksbi5vLmVudHJpZXMoKX0sci5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHJbSF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sci5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByPXRoaXMudmFsdWVzKCksZT1yLm5leHQoKTshZS5kb25lOyluLmNhbGwodCxlLnZhbHVlLGUudmFsdWUsdGhpcyksZT1yLm5leHQoKX0sbn0oKTtiKFwiTWFwU2V0XCIse1Q6ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGEobix0KX0sRjpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgZihuLHQpfX0pfWZ1bmN0aW9uIFQoKXtSKCksTigpLEQoKX1mdW5jdGlvbiBGKG4pe3JldHVybiBufWZ1bmN0aW9uIEMobil7cmV0dXJuIG59dmFyIEosSywkPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QscT0kP1N5bWJvbChcImltbWVyLW5vdGhpbmdcIik6KChKPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsSiksQj0kP1N5bWJvbChcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLEc9JD9TeW1ib2woXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsSD1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLEw9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrbn0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrbn0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKG4pe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIitufSwxODpmdW5jdGlvbihuKXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIituK1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK24rXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMTk6ZnVuY3Rpb24obil7cmV0dXJuXCJwbHVnaW4gbm90IGxvYWRlZDogXCIrbn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCJ9LFE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxWPXt9LFk9e2dldDpmdW5jdGlvbihuLHQpe2lmKHQ9PT1HKXJldHVybiBuO3ZhciBlPW4ucDtpZighbi5QJiZ1KGUsdCkpcmV0dXJuIGVbdF07dmFyIGk9dihuKVt0XTtpZihuLkl8fCFyKGkpKXJldHVybiBpO2lmKG4uUCl7aWYoaSE9PXgobi50LHQpKXJldHVybiBpO2U9bi5vfXJldHVybiBlW3RdPUUobi5BLmgsaSxuKX0saGFzOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQgaW4gdihuKX0sb3duS2V5czpmdW5jdGlvbihuKXtyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHYobikpfSxzZXQ6ZnVuY3Rpb24obix0LHIpe2lmKCFuLlApe3ZhciBlPXgobi50LHQpO2lmKHI/ZihlLHIpfHxyPT09bi5wW3RdOmYoZSxyKSYmdCBpbiBuLnQpcmV0dXJuITA7SShuKSx6KG4pfXJldHVybiBuLkRbdF09ITAsbi5vW3RdPXIsITB9LGRlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHZvaWQgMCE9PXgobi50LHQpfHx0IGluIG4udD8obi5EW3RdPSExLEkobikseihuKSk6bi5EW3RdJiZkZWxldGUgbi5EW3RdLG4ubyYmZGVsZXRlIG4ub1t0XSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4sdCl7dmFyIHI9dihuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7cmV0dXJuIGUmJihlLndyaXRhYmxlPSEwLGUuY29uZmlndXJhYmxlPTEhPT1uLml8fFwibGVuZ3RoXCIhPT10KSxlfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxaPXt9O2koWSwoZnVuY3Rpb24obix0KXtaW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLFouZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24odCxyKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludChyKSkmJm4oMTMpLFkuZGVsZXRlUHJvcGVydHkuY2FsbCh0aGlzLHRbMF0scil9LFouc2V0PWZ1bmN0aW9uKHQscixlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09ciYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDE0KSxZLnNldC5jYWxsKHRoaXMsdFswXSxyLGUsdFswXSl9O3ZhciBubj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUobil7dGhpcy5nPVgsdGhpcy5OPVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYsXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1uP3ZvaWQgMDpuLnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXMobi51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PW4/dm9pZCAwOm4uYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZShuLmF1dG9GcmVlemUpLHRoaXMucHJvZHVjZT10aGlzLnByb2R1Y2UuYmluZCh0aGlzKSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz10aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKHRoaXMpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLnByb2R1Y2U9ZnVuY3Rpb24odCxlLGkpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpe3ZhciBvPWU7ZT10O3ZhciB1PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7dm9pZCAwPT09biYmKG49byk7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheShyPjE/ci0xOjApLGE9MTthPHI7YSsrKWlbYS0xXT1hcmd1bWVudHNbYV07cmV0dXJuIHUucHJvZHVjZShuLChmdW5jdGlvbihuKXt2YXIgcjtyZXR1cm4ocj1lKS5jYWxsLmFwcGx5KHIsW3Qsbl0uY29uY2F0KGkpKX0pKX19dmFyIGE7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbig2KSx2b2lkIDAhPT1pJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpJiZuKDcpLHIodCkpe3ZhciBmPWcodGhpcyksYz1FKHRoaXMsdCx2b2lkIDApLHM9ITA7dHJ5e2E9ZShjKSxzPSExfWZpbmFsbHl7cz9qKGYpOk8oZil9cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmEgaW5zdGFuY2VvZiBQcm9taXNlP2EudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIF8oZixpKSxTKG4sZil9KSwoZnVuY3Rpb24obil7dGhyb3cgaihmKSxufSkpOihfKGYsaSksUyhhLGYpKX1pZigoYT1lKHQpKSE9PXEpcmV0dXJuIHZvaWQgMD09PWEmJihhPXQpLHRoaXMuTiYmZChhLCEwKSxhfSxpLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbihuLHQpe3ZhciByLGUsaT10aGlzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/ZnVuY3Rpb24odCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWVbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGkucHJvZHVjZVdpdGhQYXRjaGVzKHQsKGZ1bmN0aW9uKHQpe3JldHVybiBuLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KGUpKX0pKX06W3RoaXMucHJvZHVjZShuLHQsKGZ1bmN0aW9uKG4sdCl7cj1uLGU9dH0pKSxyLGVdfSxpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKHQpe3IodCl8fG4oOCk7dmFyIGU9Zyh0aGlzKSxpPUUodGhpcyx0LHZvaWQgMCk7cmV0dXJuIGlbR10uQz0hMCxPKGUpLGl9LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24odCxyKXt2YXIgZT10JiZ0W0ddO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBfKGksciksUyh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLk49bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHQpe1h8fG4oMjApLHRoaXMuZz10fSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHIpe3ZhciBlO2ZvcihlPXIubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXJbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX12YXIgbz15KFwiUGF0Y2hlc1wiKS5VO3JldHVybiB0KG4pP28obixyKTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obixyLnNsaWNlKGUrMSkpfSkpfSxlfSgpLHRuPW5ldyBubixybj10bi5wcm9kdWNlLGVuPXRuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKHRuKSxvbj10bi5zZXRBdXRvRnJlZXplLmJpbmQodG4pLHVuPXRuLnNldFVzZVByb3hpZXMuYmluZCh0biksYW49dG4uYXBwbHlQYXRjaGVzLmJpbmQodG4pLGZuPXRuLmNyZWF0ZURyYWZ0LmJpbmQodG4pLGNuPXRuLmZpbmlzaERyYWZ0LmJpbmQodG4pO2V4cG9ydCBkZWZhdWx0IHJuO2V4cG9ydHtubiBhcyBJbW1lcixhbiBhcyBhcHBseVBhdGNoZXMsRiBhcyBjYXN0RHJhZnQsQyBhcyBjYXN0SW1tdXRhYmxlLGZuIGFzIGNyZWF0ZURyYWZ0LFQgYXMgZW5hYmxlQWxsUGx1Z2lucyxSIGFzIGVuYWJsZUVTNSxOIGFzIGVuYWJsZU1hcFNldCxEIGFzIGVuYWJsZVBhdGNoZXMsY24gYXMgZmluaXNoRHJhZnQsQiBhcyBpbW1lcmFibGUsdCBhcyBpc0RyYWZ0LHIgYXMgaXNEcmFmdGFibGUscSBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwscm4gYXMgcHJvZHVjZSxlbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsb24gYXMgc2V0QXV0b0ZyZWV6ZSx1biBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsIi8vIFRoaXMgZmlsZSByZXBsYWNlcyBgaW5kZXguanNgIGluIGJ1bmRsZXJzIGxpa2Ugd2VicGFjayBvciBSb2xsdXAsXG4vLyBhY2NvcmRpbmcgdG8gYGJyb3dzZXJgIGNvbmZpZyBpbiBgcGFja2FnZS5qc29uYC5cblxuaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gQWxsIGJ1bmRsZXJzIHdpbGwgcmVtb3ZlIHRoaXMgYmxvY2sgaW4gdGhlIHByb2R1Y3Rpb24gYnVuZGxlLlxuICBpZiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyAmJlxuICAgIHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdSZWFjdCBOYXRpdmUgZG9lcyBub3QgaGF2ZSBhIGJ1aWx0LWluIHNlY3VyZSByYW5kb20gZ2VuZXJhdG9yLiAnICtcbiAgICAgICAgJ0lmIHlvdSBkb27igJl0IG5lZWQgdW5wcmVkaWN0YWJsZSBJRHMgdXNlIGBuYW5vaWQvbm9uLXNlY3VyZWAuICcgK1xuICAgICAgICAnRm9yIHNlY3VyZSBJRHMsIGltcG9ydCBgcmVhY3QtbmF0aXZlLWdldC1yYW5kb20tdmFsdWVzYCAnICtcbiAgICAgICAgJ2JlZm9yZSBOYW5vIElELiBJZiB5b3UgdXNlIEV4cG8sIGluc3RhbGwgYGV4cG8tcmFuZG9tYCAnICtcbiAgICAgICAgJ2FuZCB1c2UgYG5hbm9pZC9hc3luY2AuJ1xuICAgIClcbiAgfVxuICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdBZGQgYGlmICghd2luZG93LmNyeXB0bykgd2luZG93LmNyeXB0byA9IHdpbmRvdy5tc0NyeXB0b2AgJyArXG4gICAgICAgICdiZWZvcmUgTmFubyBJRCB0byBmaXggSUUgMTEgc3VwcG9ydCdcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBoYXZlIHNlY3VyZSByYW5kb20gZ2VuZXJhdG9yLiAnICtcbiAgICAgICAgJ0lmIHlvdSBkb27igJl0IG5lZWQgdW5wcmVkaWN0YWJsZSBJRHMsIHlvdSBjYW4gdXNlIG5hbm9pZC9ub24tc2VjdXJlLidcbiAgICApXG4gIH1cbn1cblxubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBzaXplLCBnZXRSYW5kb20pID0+IHtcbiAgLy8gRmlyc3QsIGEgYml0bWFzayBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIElELiBUaGUgYml0bWFzayBtYWtlcyBieXRlc1xuICAvLyB2YWx1ZXMgY2xvc2VyIHRvIHRoZSBhbHBoYWJldCBzaXplLiBUaGUgYml0bWFzayBjYWxjdWxhdGVzIHRoZSBjbG9zZXN0XG4gIC8vIGAyXjMxIC0gMWAgbnVtYmVyLCB3aGljaCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGJpdG1hc2sgZm9yIHRoZSBhbHBoYWJldCBzaXplIDMwIGlzIDMxICgwMDAxMTExMSkuXG4gIC8vIGBNYXRoLmNsejMyYCBpcyBub3QgdXNlZCwgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXJzLlxuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIC8vIFRob3VnaCwgdGhlIGJpdG1hc2sgc29sdXRpb24gaXMgbm90IHBlcmZlY3Qgc2luY2UgdGhlIGJ5dGVzIGV4Y2VlZGluZ1xuICAvLyB0aGUgYWxwaGFiZXQgc2l6ZSBhcmUgcmVmdXNlZC4gVGhlcmVmb3JlLCB0byByZWxpYWJseSBnZW5lcmF0ZSB0aGUgSUQsXG4gIC8vIHRoZSByYW5kb20gYnl0ZXMgcmVkdW5kYW5jeSBoYXMgdG8gYmUgc2F0aXNmaWVkLlxuXG4gIC8vIE5vdGU6IGV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBwZXJmb3JtYW5jZSBleHBlbnNpdmUsXG4gIC8vIGJlY2F1c2UgdGhlIHN5c3RlbSBjYWxsIGZvciBlbnRyb3B5IGNvbGxlY3Rpb24gdGFrZXMgYSBsb3Qgb2YgdGltZS5cbiAgLy8gU28sIHRvIGF2b2lkIGFkZGl0aW9uYWwgc3lzdGVtIGNhbGxzLCBleHRyYSBieXRlcyBhcmUgcmVxdWVzdGVkIGluIGFkdmFuY2UuXG5cbiAgLy8gTmV4dCwgYSBzdGVwIGRldGVybWluZXMgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuICAvLyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyBnZXRzIGRlY2lkZWQgdXBvbiB0aGUgSUQgc2l6ZSwgbWFzayxcbiAgLy8gYWxwaGFiZXQgc2l6ZSwgYW5kIG1hZ2ljIG51bWJlciAxLjYgKHVzaW5nIDEuNiBwZWFrcyBhdCBwZXJmb3JtYW5jZVxuICAvLyBhY2NvcmRpbmcgdG8gYmVuY2htYXJrcykuXG5cbiAgLy8gYC1+ZiA9PiBNYXRoLmNlaWwoZilgIGlmIGYgaXMgYSBmbG9hdFxuICAvLyBgLX5pID0+IGkgKyAxYCBpZiBpIGlzIGFuIGludGVnZXJcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIHNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIC8vIEFkZGluZyBgfHwgJydgIHJlZnVzZXMgYSByYW5kb20gYnl0ZSB0aGF0IGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgLy8gYGlkLmxlbmd0aCArIDEgPT09IHNpemVgIGlzIGEgbW9yZSBjb21wYWN0IG9wdGlvbi5cbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gK3NpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUpID0+IGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSAnJ1xuICBsZXQgYnl0ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKVxuXG4gIC8vIEEgY29tcGFjdCBhbHRlcm5hdGl2ZSBmb3IgYGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcDsgaSsrKWAuXG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICAvLyBJdCBpcyBpbmNvcnJlY3QgdG8gdXNlIGJ5dGVzIGV4Y2VlZGluZyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICAvLyBUaGUgZm9sbG93aW5nIG1hc2sgcmVkdWNlcyB0aGUgcmFuZG9tIGJ5dGUgaW4gdGhlIDAtMjU1IHZhbHVlXG4gICAgLy8gcmFuZ2UgdG8gdGhlIDAtNjMgdmFsdWUgcmFuZ2UuIFRoZXJlZm9yZSwgYWRkaW5nIGhhY2tzLCBzdWNoXG4gICAgLy8gYXMgZW1wdHkgc3RyaW5nIGZhbGxiYWNrIG9yIG1hZ2ljIG51bWJlcnMsIGlzIHVubmVjY2Vzc2FyeSBiZWNhdXNlXG4gICAgLy8gdGhlIGJpdG1hc2sgdHJpbXMgYnl0ZXMgZG93biB0byB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICBsZXQgYnl0ZSA9IGJ5dGVzW3NpemVdICYgNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICAvLyBgMC05YS16YFxuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgLy8gYEEtWmBcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjMpIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkXG59XG5cbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCIvLyBUaGlzIGFscGhhYmV0IHVzZXMgYEEtWmEtejAtOV8tYCBzeW1ib2xzLiBUaGUgZ2VuZXRpYyBhbGdvcml0aG0gaGVscGVkXG4vLyBvcHRpbWl6ZSB0aGUgZ3ppcCBjb21wcmVzc2lvbiBmb3IgdGhpcyBhbHBoYWJldC5cbmxldCB1cmxBbHBoYWJldCA9XG4gICdNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXJ1xuXG5leHBvcnQgeyB1cmxBbHBoYWJldCB9XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXENvZGVcXFxccm5wcm9qc1xcXFx0b2RvbGlzdGxhbWRhc1xcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2Rvc2xpc3RSZWR1Y2VyIGZyb20gICcuLi9kYXRhL3RvZG9saXN0UmVkdWNlcic7XHJcbmltcG9ydCB7bmFub2lkfSBmcm9tICduYW5vaWQnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgLy8gVGhlIHJlZHVjZXIgZGVmaW5lZCBiZWZvcmVcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcih0b2Rvc2xpc3RSZWR1Y2VyLCB7XHJcbiAgICAgIGN1cnJlbnRUb2RvOiBcIlwiLFxyXG4gICAgICB0b2RvczogW11cclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkID0gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBpZDogbmFub2lkKCksXHJcbiAgICAgICAgICBuYW1lOiBzdGF0ZS5jdXJyZW50VG9kbyxcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IGAke0RhdGUubm93KCl9YFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXQtY3VycmVudFwiLCBwYXlsb2FkOiBcIlwiIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVkaXQgPSAodG9kbyAvKjpUb2RvKi8pID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInVwZGF0ZVwiLCBwYXlsb2FkOiB0b2RvIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlbCA9ICh0b2RvIC8qOlRvZG8qLykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiZGVsZXRlXCIsIHBheWxvYWQ6IHRvZG8gfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGgyPlRvIERvIExpc3Q8L2gyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGFkZChzdGF0ZS5jdXJyZW50VG9kbyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuY3VycmVudFRvZG99XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXQtY3VycmVudFwiLCBwYXlsb2FkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtzdGF0ZS50b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9kby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0KHsgLi4udG9kbywgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWwodG9kbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NTsiXSwic291cmNlUm9vdCI6IiJ9