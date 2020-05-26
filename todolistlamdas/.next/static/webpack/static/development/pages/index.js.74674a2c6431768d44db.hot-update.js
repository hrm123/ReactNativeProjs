webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _data_todolistReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/todolistReducer */ "./data/todolistReducer.js");



var _this = undefined,
    _jsxFileName = "C:\\Code\\rnprojs\\todolistlamdas\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var App = function App() {
  _s();

  // The reducer defined before
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](_data_todolistReducer__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        id: nanoid(),
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
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "To Do List")), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Add")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, state.todos.map(function (todo) {
    return __jsx("li", {
      key: todo.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
        lineNumber: 53,
        columnNumber: 19
      }
    }), __jsx("button", {
      onClick: function onClick() {
        del(todo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3RvZG9saXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidG9kb3NsaXN0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInByb2R1Y2UiLCJkcmFmdCIsImN1cnJlbnRUb2RvIiwicGF5bG9hZCIsInRvZG9zIiwicHVzaCIsInRvZG9JbmRleCIsImZpbmRJbmRleCIsInRvZG8iLCJpZCIsInNwbGljZSIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFwcCIsIlJlYWN0IiwiZGlzcGF0Y2giLCJhZGQiLCJuYW5vaWQiLCJuYW1lIiwiY29tcGxldGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsImVkaXQiLCJkZWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBSSxTQUFwQkEsZ0JBQW9CLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMzQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFBb0I7QUFDbEIsZUFBT0MscURBQU8sQ0FBQ0gsS0FBRCxFQUFRLFVBQUFJLEtBQUssRUFBSTtBQUM3QkEsZUFBSyxDQUFDQyxXQUFOLEdBQW9CSixNQUFNLENBQUNLLE9BQTNCO0FBQ0QsU0FGYSxDQUFkO0FBR0Q7O0FBQ0QsU0FBSyxLQUFMO0FBQVk7QUFDVixlQUFPSCxxREFBTyxDQUFDSCxLQUFELEVBQVEsVUFBQUksS0FBSyxFQUFJO0FBQzdCQSxlQUFLLENBQUNHLEtBQU4sQ0FBWUMsSUFBWixDQUFpQlAsTUFBTSxDQUFDSyxPQUF4QjtBQUNELFNBRmEsQ0FBZDtBQUdEOztBQUNELFNBQUss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QUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FiRixDQURGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2hDLEtBQUssQ0FBQ08sS0FBTixDQUFZMEIsR0FBWixDQUFnQixVQUFBdEIsSUFBSSxFQUFJO0FBQ3ZCLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLEVBQUUsTUFEUjtBQUVFLFdBQUssRUFBRUQsSUFBSSxDQUFDVyxJQUZkO0FBR0UsY0FBUSxFQUFFLGtCQUFBTyxLQUFLLEVBQUk7QUFDakJGLFlBQUksaUNBQU1oQixJQUFOO0FBQVlXLGNBQUksRUFBRU8sS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQS9CLFdBQUo7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVFFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JKLFdBQUcsQ0FBQ2pCLElBQUQsQ0FBSDtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixDQURGO0FBa0JELEdBbkJBLENBREgsQ0FoQkYsQ0FKRixDQURGO0FBOENELENBdEVIOztHQUFNTSxHOztLQUFBQSxHO0FBdUVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzQ2NzRhMmM2NDMxNzY4ZDQ0ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuXHJcbmNvbnN0IHRvZG9zbGlzdFJlZHVjZXIgID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwic2V0LWN1cnJlbnRcIjoge1xyXG4gICAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRUb2RvID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImFkZFwiOiB7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3MucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcInVwZGF0ZVwiOiB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHN0YXRlLnRvZG9zLmZpbmRJbmRleChcclxuICAgICAgICB0b2RvID0+IHRvZG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPT09IC0xKSByZXR1cm4gc3RhdGU7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnQudG9kb3NbdG9kb0luZGV4XSA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiZGVsZXRlXCI6IHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gc3RhdGUudG9kb3MuZmluZEluZGV4KFxyXG4gICAgICAgIHRvZG8gPT4gdG9kby5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA9PT0gLTEpIHJldHVybiBzdGF0ZTtcclxuICAgICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIGRyYWZ0ID0+IHtcclxuICAgICAgICBkcmFmdC50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb3NsaXN0UmVkdWNlcjsiLCJmdW5jdGlvbiBuKG4pe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodD4xP3QtMTowKSxlPTE7ZTx0O2UrKylyW2UtMV09YXJndW1lbnRzW2VdO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBpPUxbbl0sbz1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShudWxsLHIpOmk6XCJ1bmtub3duIGVycm9yIG5yOiBcIituO3Rocm93IEVycm9yKFwiW0ltbWVyXSBcIitvKX10aHJvdyBFcnJvcihcIltJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6IFwiK24rKHIubGVuZ3RoP1wiIFwiK3Iuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gdChuKXtyZXR1cm4hIW4mJiEhbltHXX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7cmV0dXJuIXR8fHQ9PT1PYmplY3QucHJvdG90eXBlfShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0JdfHwhIW4uY29uc3RydWN0b3JbQl18fGMobil8fHMobikpfWZ1bmN0aW9uIGUobil7aWYobiYmbltHXSlyZXR1cm4gbltHXS50fWZ1bmN0aW9uIGkobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byhuKT8ocj9PYmplY3Qua2V5czpRKShuKS5mb3JFYWNoKChmdW5jdGlvbihyKXtyZXR1cm4gdChyLG5bcl0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiB0KGUscixuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciB0PW5bR107cmV0dXJuIHQ/dC5pPjM/dC5pLTQ6dC5pOkFycmF5LmlzQXJyYXkobik/MTpjKG4pPzI6cyhuKT8zOjB9ZnVuY3Rpb24gdShuLHQpe3JldHVybiAyPT09byhuKT9uLmhhcyh0KTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KX1mdW5jdGlvbiBhKG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHQpOm5bdF19ZnVuY3Rpb24gZihuLHQpe3JldHVybiBuPT09dD8wIT09bnx8MS9uPT0xL3Q6biE9biYmdCE9dH1mdW5jdGlvbiBjKG4pe3JldHVybiBVJiZuIGluc3RhbmNlb2YgTWFwfWZ1bmN0aW9uIHMobil7cmV0dXJuIFcmJm4gaW5zdGFuY2VvZiBTZXR9ZnVuY3Rpb24gdihuKXtyZXR1cm4gbi5vfHxuLnR9ZnVuY3Rpb24gcCh0LHIpe2lmKHZvaWQgMD09PXImJihyPSExKSxBcnJheS5pc0FycmF5KHQpKXJldHVybiB0LnNsaWNlKCk7dmFyIGU9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpO3JldHVybiBpKHQsKGZ1bmN0aW9uKGkpe2lmKGkhPT1HKXt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsaSksdT1vLnZhbHVlO28uZ2V0JiYocnx8bigxKSx1PW8uZ2V0LmNhbGwodCkpLG8uZW51bWVyYWJsZT9lW2ldPXU6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7dmFsdWU6dSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19KSksZX1mdW5jdGlvbiBkKG4sZSl7dChuKXx8aChuKXx8IXIobil8fChvKG4pPjEmJihuLnNldD1uLmFkZD1uLmNsZWFyPW4uZGVsZXRlPWwpLE9iamVjdC5mcmVlemUobiksZSYmaShuLChmdW5jdGlvbihuLHQpe3JldHVybiBkKHQsITApfSksITApKX1mdW5jdGlvbiBsKCl7bigyKX1mdW5jdGlvbiBoKG4pe3JldHVybiBudWxsPT1ufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8T2JqZWN0LmlzRnJvemVuKG4pfWZ1bmN0aW9uIHkodCl7dmFyIHI9Vlt0XTtyZXR1cm4gcnx8bihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WPzE4OjE5LHQpLHJ9ZnVuY3Rpb24gYihuLHQpe1Zbbl09dH1mdW5jdGlvbiBtKCl7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8S3x8bigwKSxLfWZ1bmN0aW9uIF8obix0KXt0JiYoeShcIlBhdGNoZXNcIiksbi51PVtdLG4ucz1bXSxuLnY9dCl9ZnVuY3Rpb24gaihuKXtPKG4pLG4ucC5mb3JFYWNoKHcpLG4ucD1udWxsfWZ1bmN0aW9uIE8obil7bj09PUsmJihLPW4ubCl9ZnVuY3Rpb24gZyhuKXtyZXR1cm4gSz17cDpbXSxsOkssaDpuLG06ITAsXzowfX1mdW5jdGlvbiB3KG4pe3ZhciB0PW5bR107MD09PXQuaXx8MT09PXQuaT90LmooKTp0Lk89ITB9ZnVuY3Rpb24gUyh0LGUpe2UuXz1lLnAubGVuZ3RoO3ZhciBpPWUucFswXSxvPXZvaWQgMCE9PXQmJnQhPT1pO3JldHVybiBlLmguZ3x8eShcIkVTNVwiKS5TKGUsdCxvKSxvPyhpW0ddLlAmJihqKGUpLG4oNCkpLHIodCkmJih0PVAoZSx0KSxlLmx8fEEoZSx0KSksZS51JiZ5KFwiUGF0Y2hlc1wiKS5NKGlbR10sdCxlLnUsZS5zKSk6dD1QKGUsaSxbXSksaihlKSxlLnUmJmUudihlLnUsZS5zKSx0IT09cT90OnZvaWQgMH1mdW5jdGlvbiBQKG4sdCxyKXtpZihoKHQpKXJldHVybiB0O3ZhciBlPXRbR107aWYoIWUpcmV0dXJuIGkodCwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gTShuLGUsdCxpLG8scil9KSwhMCksdDtpZihlLkEhPT1uKXJldHVybiB0O2lmKCFlLlApcmV0dXJuIEEobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1wKGUuaywhMCk6ZS5vO2kobywoZnVuY3Rpb24odCxpKXtyZXR1cm4gTShuLGUsbyx0LGkscil9KSksQShuLG8sITEpLHImJm4udSYmeShcIlBhdGNoZXNcIikuUihlLHIsbi51LG4ucyl9cmV0dXJuIGUub31mdW5jdGlvbiBNKGUsaSxjLHMsdixwKXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZ2PT09YyYmbig1KSx0KHYpKXt2YXIgZD1QKGUsdixwJiZpJiYzIT09aS5pJiYhdShpLkQscyk/cC5jb25jYXQocyk6dm9pZCAwKTtpZihoPXMseT1kLDI9PT0oYj1vKGw9YykpP2wuc2V0KGgseSk6Mz09PWI/KGwuZGVsZXRlKGgpLGwuYWRkKHkpKTpsW2hdPXksIXQoZCkpcmV0dXJuO2UubT0hMX12YXIgbCxoLHksYjtpZigoIWl8fCFmKHYsYShpLnQscykpKSYmcih2KSl7aWYoIWUuaC5OJiZlLl88MSlyZXR1cm47UChlLHYpLGkmJmkuQS5sfHxBKGUsdil9fWZ1bmN0aW9uIEEobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSxuLmguTiYmbi5tJiZkKHQscil9ZnVuY3Rpb24geChuLHQpe3ZhciByPW5bR10sZT1SZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyP3Yocik6bix0KTtyZXR1cm4gZSYmZS52YWx1ZX1mdW5jdGlvbiB6KG4pe2lmKCFuLlApe2lmKG4uUD0hMCwwPT09bi5pfHwxPT09bi5pKXt2YXIgdD1uLm89cChuLnQpO2kobi5wLChmdW5jdGlvbihuLHIpe3Rbbl09cn0pKSxuLnA9dm9pZCAwfW4ubCYmeihuLmwpfX1mdW5jdGlvbiBJKG4pe24ub3x8KG4ubz1wKG4udCkpfWZ1bmN0aW9uIEUobix0LHIpe3ZhciBlPWModCk/eShcIk1hcFNldFwiKS5UKHQscik6cyh0KT95KFwiTWFwU2V0XCIpLkYodCxyKTpuLmc/ZnVuY3Rpb24obix0KXt2YXIgcj1BcnJheS5pc0FycmF5KG4pLGU9e2k6cj8xOjAsQTp0P3QuQTptKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOm51bGwscDp7fSxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPVk7ciYmKGk9W2VdLG89Wik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHQscik6eShcIkVTNVwiKS5KKHQscik7cmV0dXJuKHI/ci5BOm0oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gayhuLHQpe24uZz96KHQpOnkoXCJFUzVcIikuSyh0KX1mdW5jdGlvbiBSKCl7ZnVuY3Rpb24gZShuLHQpe3ZhciByPW5bR107aWYociYmIXIuJCl7ci4kPSEwO3ZhciBlPW5bdF07cmV0dXJuIHIuJD0hMSxlfXJldHVybiBuW3RdfWZ1bmN0aW9uIG8obil7bi5QfHwobi5QPSEwLG4ubCYmbyhuLmwpKX1mdW5jdGlvbiBhKG4pe24ub3x8KG4ubz1jKG4udCkpfWZ1bmN0aW9uIGMobil7dmFyIHQ9biYmbltHXTtpZih0KXt0LiQ9ITA7dmFyIHI9cCh0LmssITApO3JldHVybiB0LiQ9ITEscn1yZXR1cm4gcChuKX1mdW5jdGlvbiBzKG4pe2Zvcih2YXIgdD1uLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1uW3RdW0ddO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmwocikmJm8ocik7YnJlYWs7Y2FzZSA0OmQocikmJm8ocil9fX1mdW5jdGlvbiBkKG4pe2Zvcih2YXIgdD1uLnQscj1uLmssZT1PYmplY3Qua2V5cyhyKSxpPWUubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBvPWVbaV0sYT10W29dO2lmKHZvaWQgMD09PWEmJiF1KHQsbykpcmV0dXJuITA7dmFyIGM9cltvXSxzPWMmJmNbR107aWYocz9zLnQhPT1hOiFmKGMsYSkpcmV0dXJuITB9cmV0dXJuIGUubGVuZ3RoIT09T2JqZWN0LmtleXModCkubGVuZ3RofWZ1bmN0aW9uIGwobil7dmFyIHQ9bi5rO2lmKHQubGVuZ3RoIT09bi50Lmxlbmd0aClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsdC5sZW5ndGgtMSk7cmV0dXJuISghcnx8ci5nZXQpfWZ1bmN0aW9uIGgodCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkodih0KSkpfXZhciB5PXt9O2IoXCJFUzVcIix7SjpmdW5jdGlvbihuLHQpe3ZhciB1PUFycmF5LmlzQXJyYXkobikscz1jKG4pO2kocywoZnVuY3Rpb24odCl7IWZ1bmN0aW9uKG4sdCxpKXt2YXIgdT15W3RdO3U/dS5lbnVtZXJhYmxlPWk6eVt0XT11PXtlbnVtZXJhYmxlOmksZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKG4sdCl7aChuKTt2YXIgaT1lKHYobiksdCk7cmV0dXJuIG4uJD9pOmk9PT1lKG4udCx0KSYmcihpKT8oYShuKSxuLm9bdF09RShuLkEuaCxpLG4pKTppfSh0aGlzW0ddLHQpfSxzZXQ6ZnVuY3Rpb24obil7IWZ1bmN0aW9uKG4sdCxyKXtpZihoKG4pLG4uRFt0XT0hMCwhbi5QKXtpZihmKHIsZSh2KG4pLHQpKSlyZXR1cm47byhuKSxhKG4pfW4ub1t0XT1yfSh0aGlzW0ddLHQsbil9fSxPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHUpfShzLHQsdXx8ZnVuY3Rpb24obix0KXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCk7cmV0dXJuISghcnx8IXIuZW51bWVyYWJsZSl9KG4sdCkpfSkpO3ZhciBwPXtpOnU/NTo0LEE6dD90LkE6bSgpLFA6ITEsJDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOnMsbzpudWxsLE86ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLEcse3ZhbHVlOnAsd3JpdGFibGU6ITB9KSxzfSxLOm8sUzpmdW5jdGlvbihuLHIsZSl7bi5wLmZvckVhY2goKGZ1bmN0aW9uKG4pe25bR10uJD0hMH0pKSxlP3QocikmJnJbR10uQT09PW4mJnMobi5wKToobi51JiZmdW5jdGlvbiBuKHQpe2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgcj10W0ddO2lmKHIpe3ZhciBlPXIudCxhPXIuayxmPXIuRCxjPXIuaTtpZig0PT09YylpKGEsKGZ1bmN0aW9uKHQpe3QhPT1HJiYodm9pZCAwIT09ZVt0XXx8dShlLHQpP2ZbdF18fG4oYVt0XSk6KGZbdF09ITAsbyhyKSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09YVtuXXx8dShhLG4pfHwoZltuXT0hMSxvKHIpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihsKHIpJiYobyhyKSxmLmxlbmd0aD0hMCksYS5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPWEubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxhLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oYS5sZW5ndGgsZS5sZW5ndGgpLGQ9MDtkPHA7ZCsrKXZvaWQgMD09PWZbZF0mJm4oYVtkXSl9fX19KG4ucFswXSkscyhuLnApKX19KX1mdW5jdGlvbiBEKCl7ZnVuY3Rpb24gcihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAocik7aWYoYyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLHIoblsxXSldfSkpKTtpZihzKG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKHIpKTt2YXIgdD1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBlIGluIG4pdFtlXT1yKG5bZV0pO3JldHVybiB0fWZ1bmN0aW9uIGUobil7cmV0dXJuIHQobik/cihuKTpufXZhciBmPVwiYWRkXCI7YihcIlBhdGNoZXNcIix7VTpmdW5jdGlvbih0LGUpe3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGUpe2Zvcih2YXIgaT1lLnBhdGgsdT1lLm9wLGM9dCxzPTA7czxpLmxlbmd0aC0xO3MrKylcIm9iamVjdFwiIT10eXBlb2YoYz1hKGMsaVtzXSkpJiZuKDE1LGkuam9pbihcIi9cIikpO3ZhciB2PW8oYykscD1yKGUudmFsdWUpLGQ9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaCh2KXtjYXNlIDI6cmV0dXJuIGMuc2V0KGQscCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGNbZF09cH1jYXNlIGY6c3dpdGNoKHYpe2Nhc2UgMTpyZXR1cm4gYy5zcGxpY2UoZCwwLHApO2Nhc2UgMjpyZXR1cm4gYy5zZXQoZCxwKTtjYXNlIDM6cmV0dXJuIGMuYWRkKHApO2RlZmF1bHQ6cmV0dXJuIGNbZF09cH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2godil7Y2FzZSAxOnJldHVybiBjLnNwbGljZShkLDEpO2Nhc2UgMjpyZXR1cm4gYy5kZWxldGUoZCk7Y2FzZSAzOnJldHVybiBjLmRlbGV0ZShlLnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgY1tkXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHR9LFI6ZnVuY3Rpb24obix0LHIsbyl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLG8pe3ZhciBjPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKGMsbikscD1hKHMsbiksZD1pP3UoYyxuKT9cInJlcGxhY2VcIjpmOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09ZCl7dmFyIGw9dC5jb25jYXQobik7ci5wdXNoKFwicmVtb3ZlXCI9PT1kP3tvcDpkLHBhdGg6bH06e29wOmQscGF0aDpsLHZhbHVlOnB9KSxvLnB1c2goZD09PWY/e29wOlwicmVtb3ZlXCIscGF0aDpsfTpcInJlbW92ZVwiPT09ZD97b3A6ZixwYXRoOmwsdmFsdWU6ZSh2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6bCx2YWx1ZTplKHYpfSl9fSkpfShuLHQscixvKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHQscixpKXt2YXIgbz1uLnQsdT1uLkQsYT1uLm87aWYoYS5sZW5ndGg8by5sZW5ndGgpe3ZhciBjPVthLG9dO289Y1swXSxhPWNbMV07dmFyIHM9W2kscl07cj1zWzBdLGk9c1sxXX1mb3IodmFyIHY9YS5sZW5ndGgtby5sZW5ndGgscD0wO29bcF09PT1hW3BdJiZwPG8ubGVuZ3RoOykrK3A7Zm9yKHZhciBkPW8ubGVuZ3RoO2Q+cCYmb1tkLTFdPT09YVtkK3YtMV07KS0tZDtmb3IodmFyIGw9cDtsPGQ7KytsKWlmKHVbbF0mJmFbbF0hPT1vW2xdKXt2YXIgaD10LmNvbmNhdChbbF0pO3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpoLHZhbHVlOmUoYVtsXSl9KSxpLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6aCx2YWx1ZTplKG9bbF0pfSl9Zm9yKHZhciB5PXIubGVuZ3RoLGI9ZCt2LTE7Yj49ZDstLWIpe3ZhciBtPXQuY29uY2F0KFtiXSk7clt5K2ItZF09e29wOmYscGF0aDptLHZhbHVlOmUoYVtiXSl9LGkucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOm19KX19KG4sdCxyLG8pO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIGk9bi50LG89bi5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFvLmhhcyhuKSl7dmFyIGk9dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOmYscGF0aDppLHZhbHVlOm59KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIWkuaGFzKG4pKXt2YXIgbz10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6ZixwYXRoOm8sdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6bn0pfXUrK30pKX0obix0LHIsbyl9fSxNOmZ1bmN0aW9uKG4sdCxyLGUpe3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTp0fSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOm4udH0pfX0pfWZ1bmN0aW9uIE4oKXtmdW5jdGlvbiB0KG4sdCl7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9bn11KG4sdCksbi5wcm90b3R5cGU9KHIucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiBlKG4pe24ub3x8KG4uRD1uZXcgTWFwLG4ubz1uZXcgTWFwKG4udCkpfWZ1bmN0aW9uIGkobil7bi5vfHwobi5vPW5ldyBTZXQsbi50LmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKHIodCkpe3ZhciBlPUUobi5BLmgsdCxuKTtuLnAuc2V0KHQsZSksbi5vLmFkZChlKX1lbHNlIG4uby5hZGQodCl9KSkpfWZ1bmN0aW9uIG8odCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkodih0KSkpfXZhciB1PWZ1bmN0aW9uKG4sdCl7cmV0dXJuKHU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKG4sdCl7bi5fX3Byb3RvX189dH18fGZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKG5bcl09dFtyXSl9KShuLHQpfSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW0ddPXtpOjIsbDp0LEE6dD90LkE6bSgpLFA6ITEsSTohMSxvOnZvaWQgMCxEOnZvaWQgMCx0Om4sazp0aGlzLEM6ITEsTzohMX0sdGhpc310KG4sTWFwKTt2YXIgaT1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXNbR10pLnNpemV9fSksaS5oYXM9ZnVuY3Rpb24obil7cmV0dXJuIHYodGhpc1tHXSkuaGFzKG4pfSxpLnNldD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXNbR107cmV0dXJuIG8ociksdihyKS5nZXQobikhPT10JiYoZShyKSxrKHIuQS5oLHIpLHIuRC5zZXQobiwhMCksci5vLnNldChuLHQpLHIuRC5zZXQobiwhMCkpLHRoaXN9LGkuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW0ddO3JldHVybiBvKHQpLGUodCksayh0LkEuaCx0KSx0LkQuc2V0KG4sITEpLHQuby5kZWxldGUobiksITB9LGkuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW0ddO3JldHVybiBvKG4pLGUobiksayhuLkEuaCxuKSxuLkQ9bmV3IE1hcCxuLm8uY2xlYXIoKX0saS5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpczt2KHRoaXNbR10pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHQsci5nZXQoaSksaSxyKX0pKX0saS5nZXQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tHXTtvKHQpO3ZhciBpPXYodCkuZ2V0KG4pO2lmKHQuSXx8IXIoaSkpcmV0dXJuIGk7aWYoaSE9PXQudC5nZXQobikpcmV0dXJuIGk7dmFyIHU9RSh0LkEuaCxpLHQpO3JldHVybiBlKHQpLHQuby5zZXQobix1KSx1fSxpLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzW0ddKS5rZXlzKCl9LGkudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW0hdPWZ1bmN0aW9uKCl7cmV0dXJuIHQudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTp0LmdldChuLnZhbHVlKX19LG59LGkuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtIXT1mdW5jdGlvbigpe3JldHVybiB0LmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXQuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0saVtIXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW0ddPXtpOjMsbDp0LEE6dD90LkE6bSgpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxPOiExLEM6ITF9LHRoaXN9dChuLFNldCk7dmFyIHI9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdih0aGlzW0ddKS5zaXplfX0pLHIuaGFzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbR107cmV0dXJuIG8odCksdC5vPyEhdC5vLmhhcyhuKXx8ISghdC5wLmhhcyhuKXx8IXQuby5oYXModC5wLmdldChuKSkpOnQudC5oYXMobil9LHIuYWRkPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbR107cmV0dXJuIG8odCksdGhpcy5oYXMobil8fChpKHQpLGsodC5BLmgsdCksdC5vLmFkZChuKSksdGhpc30sci5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbR107cmV0dXJuIG8odCksaSh0KSxrKHQuQS5oLHQpLHQuby5kZWxldGUobil8fCEhdC5wLmhhcyhuKSYmdC5vLmRlbGV0ZSh0LnAuZ2V0KG4pKX0sci5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbR107cmV0dXJuIG8obiksaShuKSxrKG4uQS5oLG4pLG4uby5jbGVhcigpfSxyLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbR107cmV0dXJuIG8obiksaShuKSxuLm8udmFsdWVzKCl9LHIuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbR107cmV0dXJuIG8obiksaShuKSxuLm8uZW50cmllcygpfSxyLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0scltIXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyLmZvckVhY2g9ZnVuY3Rpb24obix0KXtmb3IodmFyIHI9dGhpcy52YWx1ZXMoKSxlPXIubmV4dCgpOyFlLmRvbmU7KW4uY2FsbCh0LGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXIubmV4dCgpfSxufSgpO2IoXCJNYXBTZXRcIix7VDpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgYShuLHQpfSxGOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBmKG4sdCl9fSl9ZnVuY3Rpb24gVCgpe1IoKSxOKCksRCgpfWZ1bmN0aW9uIEYobil7cmV0dXJuIG59ZnVuY3Rpb24gQyhuKXtyZXR1cm4gbn12YXIgSixLLCQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksVT1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxxPSQ/U3ltYm9sKFwiaW1tZXItbm90aGluZ1wiKTooKEo9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxKKSxCPSQ/U3ltYm9sKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsRz0kP1N5bWJvbChcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixIPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsTD17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwxOTpmdW5jdGlvbihuKXtyZXR1cm5cInBsdWdpbiBub3QgbG9hZGVkOiBcIitufSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIn0sUT1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFY9e30sWT17Z2V0OmZ1bmN0aW9uKG4sdCl7aWYodD09PUcpcmV0dXJuIG47dmFyIGU9bi5wO2lmKCFuLlAmJnUoZSx0KSlyZXR1cm4gZVt0XTt2YXIgaT12KG4pW3RdO2lmKG4uSXx8IXIoaSkpcmV0dXJuIGk7aWYobi5QKXtpZihpIT09eChuLnQsdCkpcmV0dXJuIGk7ZT1uLm99cmV0dXJuIGVbdF09RShuLkEuaCxpLG4pfSxoYXM6ZnVuY3Rpb24obix0KXtyZXR1cm4gdCBpbiB2KG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXModihuKSl9LHNldDpmdW5jdGlvbihuLHQscil7aWYoIW4uUCl7dmFyIGU9eChuLnQsdCk7aWYocj9mKGUscil8fHI9PT1uLnBbdF06ZihlLHIpJiZ0IGluIG4udClyZXR1cm4hMDtJKG4pLHoobil9cmV0dXJuIG4uRFt0XT0hMCxuLm9bdF09ciwhMH0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obix0KXtyZXR1cm4gdm9pZCAwIT09eChuLnQsdCl8fHQgaW4gbi50PyhuLkRbdF09ITEsSShuKSx6KG4pKTpuLkRbdF0mJmRlbGV0ZSBuLkRbdF0sbi5vJiZkZWxldGUgbi5vW3RdLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24obix0KXt2YXIgcj12KG4pLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtyZXR1cm4gZSYmKGUud3JpdGFibGU9ITAsZS5jb25maWd1cmFibGU9MSE9PW4uaXx8XCJsZW5ndGhcIiE9PXQpLGV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7bigxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXtuKDEyKX19LFo9e307aShZLChmdW5jdGlvbihuLHQpe1pbbl09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksWi5kZWxldGVQcm9wZXJ0eT1mdW5jdGlvbih0LHIpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxMyksWS5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsdFswXSxyKX0sWi5zZXQ9ZnVuY3Rpb24odCxyLGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT1yJiZpc05hTihwYXJzZUludChyKSkmJm4oMTQpLFkuc2V0LmNhbGwodGhpcyx0WzBdLHIsZSx0WzBdKX07dmFyIG5uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuKXt0aGlzLmc9WCx0aGlzLk49XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVixcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PW4/dm9pZCAwOm4udXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyhuLnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09bj92b2lkIDA6bi5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKG4uYXV0b0ZyZWV6ZSksdGhpcy5wcm9kdWNlPXRoaXMucHJvZHVjZS5iaW5kKHRoaXMpLHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzPXRoaXMucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodGhpcyl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkucHJvZHVjZT1mdW5jdGlvbih0LGUsaSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl7dmFyIG89ZTtlPXQ7dmFyIHU9dGhpcztyZXR1cm4gZnVuY3Rpb24obil7dmFyIHQ9dGhpczt2b2lkIDA9PT1uJiYobj1vKTtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHI+MT9yLTE6MCksYT0xO2E8cjthKyspaVthLTFdPWFyZ3VtZW50c1thXTtyZXR1cm4gdS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciByO3JldHVybihyPWUpLmNhbGwuYXBwbHkocixbdCxuXS5jb25jYXQoaSkpfSkpfX12YXIgYTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZuKDYpLHZvaWQgMCE9PWkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNykscih0KSl7dmFyIGY9Zyh0aGlzKSxjPUUodGhpcyx0LHZvaWQgMCkscz0hMDt0cnl7YT1lKGMpLHM9ITF9ZmluYWxseXtzP2ooZik6TyhmKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmYSBpbnN0YW5jZW9mIFByb21pc2U/YS50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gXyhmLGkpLFMobixmKX0pLChmdW5jdGlvbihuKXt0aHJvdyBqKGYpLG59KSk6KF8oZixpKSxTKGEsZikpfWlmKChhPWUodCkpIT09cSlyZXR1cm4gdm9pZCAwPT09YSYmKGE9dCksdGhpcy5OJiZkKGEsITApLGF9LGkucHJvZHVjZVdpdGhQYXRjaGVzPWZ1bmN0aW9uKG4sdCl7dmFyIHIsZSxpPXRoaXM7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9mdW5jdGlvbih0KXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxlPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspZVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gaS5wcm9kdWNlV2l0aFBhdGNoZXModCwoZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoZSkpfSkpfTpbdGhpcy5wcm9kdWNlKG4sdCwoZnVuY3Rpb24obix0KXtyPW4sZT10fSkpLHIsZV19LGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24odCl7cih0KXx8big4KTt2YXIgZT1nKHRoaXMpLGk9RSh0aGlzLHQsdm9pZCAwKTtyZXR1cm4gaVtHXS5DPSEwLE8oZSksaX0saS5maW5pc2hEcmFmdD1mdW5jdGlvbih0LHIpe3ZhciBlPXQmJnRbR107XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIF8oaSxyKSxTKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuTj1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24odCl7WHx8bigyMCksdGhpcy5nPXR9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4scil7dmFyIGU7Zm9yKGU9ci5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9cltlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPXkoXCJQYXRjaGVzXCIpLlU7cmV0dXJuIHQobik/byhuLHIpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHIuc2xpY2UoZSsxKSl9KSl9LGV9KCksdG49bmV3IG5uLHJuPXRuLnByb2R1Y2UsZW49dG4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodG4pLG9uPXRuLnNldEF1dG9GcmVlemUuYmluZCh0biksdW49dG4uc2V0VXNlUHJveGllcy5iaW5kKHRuKSxhbj10bi5hcHBseVBhdGNoZXMuYmluZCh0biksZm49dG4uY3JlYXRlRHJhZnQuYmluZCh0biksY249dG4uZmluaXNoRHJhZnQuYmluZCh0bik7ZXhwb3J0IGRlZmF1bHQgcm47ZXhwb3J0e25uIGFzIEltbWVyLGFuIGFzIGFwcGx5UGF0Y2hlcyxGIGFzIGNhc3REcmFmdCxDIGFzIGNhc3RJbW11dGFibGUsZm4gYXMgY3JlYXRlRHJhZnQsVCBhcyBlbmFibGVBbGxQbHVnaW5zLFIgYXMgZW5hYmxlRVM1LE4gYXMgZW5hYmxlTWFwU2V0LEQgYXMgZW5hYmxlUGF0Y2hlcyxjbiBhcyBmaW5pc2hEcmFmdCxCIGFzIGltbWVyYWJsZSx0IGFzIGlzRHJhZnQsciBhcyBpc0RyYWZ0YWJsZSxxIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxybiBhcyBwcm9kdWNlLGVuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxvbiBhcyBzZXRBdXRvRnJlZXplLHVuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2Rvc2xpc3RSZWR1Y2VyIGZyb20gICcuLi9kYXRhL3RvZG9saXN0UmVkdWNlcic7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAvLyBUaGUgcmVkdWNlciBkZWZpbmVkIGJlZm9yZVxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHRvZG9zbGlzdFJlZHVjZXIsIHtcclxuICAgICAgY3VycmVudFRvZG86IFwiXCIsXHJcbiAgICAgIHRvZG9zOiBbXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhZGQgPSAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGlkOiBuYW5vaWQoKSxcclxuICAgICAgICAgIG5hbWU6IHN0YXRlLmN1cnJlbnRUb2RvLFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogYCR7RGF0ZS5ub3coKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldC1jdXJyZW50XCIsIHBheWxvYWQ6IFwiXCIgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZWRpdCA9ICh0b2RvIC8qOlRvZG8qLykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwidXBkYXRlXCIsIHBheWxvYWQ6IHRvZG8gfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGVsID0gKHRvZG8gLyo6VG9kbyovKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJkZWxldGVcIiwgcGF5bG9hZDogdG9kbyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8aDI+VG8gRG8gTGlzdDwvaDI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgYWRkKHN0YXRlLmN1cnJlbnRUb2RvKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jdXJyZW50VG9kb31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInNldC1jdXJyZW50XCIsIHBheWxvYWQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3N0YXRlLnRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGVkaXQoeyAuLi50b2RvLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbCh0b2RvKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=