(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <ul class=\"nav\">\n    <li *ngIf=\"!storage.getJwt()\"><button class=\"btn\" routerLink=\"/login\" routerLinkActive=\"active\">Login</button></li>\n    <li *ngIf=\"!storage.getJwt()\"><button class=\"btn\" routerLink=\"/signup\" routerLinkActive=\"active\">Signup</button></li>\n    <li *ngIf=\"storage.getJwt()\"><button class=\"btn\" (click)=\"logout()\" >Logout</button></li>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\n  <div class=\"form-field\">\n    <label for=\"email\">Email</label>\n    <input class=\"input\" formControlName=\"email\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email here\">\n    <span *ngIf=\"!form.get('email').valid && form.get('email').touched\" class=\"invalid-field-tip\">Provide correct email</span>\n  </div>\n  <div class=\"form-field\">\n    <label for=\"password\">Password</label>\n    <input class=\"input\" formControlName=\"password\" id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\">\n    <span *ngIf=\"!form.get('password').valid && form.get('password').touched\" class=\"invalid-field-tip\">Passwords should have minimum 6 symbols</span>\n  </div>\n  <button [disabled]=\"!form.valid\" class=\"btn\" type=\"submit\">Log in</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"signup()\">\n  <div class=\"form-field\">\n    <label for=\"email\">Email</label>\n    <input class=\"input\" formControlName=\"email\" name=\"email\" type=\"text\" id=\"email\" placeholder=\"Email here\">\n    <span *ngIf=\"!form.get('email').valid && form.get('email').touched\" class=\"invalid-field-tip\">Provide correct email</span>\n  </div>\n  <div class=\"form-field\">\n    <label for=\"password\">Password</label>\n    <input class=\"input\" formControlName=\"password\" name=\"password\" type=\"password\" id=\"password\" placeholder=\"Password\">\n    <span *ngIf=\"!form.get('password').valid && form.get('password').touched\" class=\"invalid-field-tip\">Password should have minimum 6 symbols</span>\n  </div>\n  <div class=\"form-field\">\n    <label for=\"password-confirm\">Password confirm</label>\n    <input class=\"input\" formControlName=\"passwordConfirm\" name=\"passwordConfirm\" type=\"password\" id=\"password-confirm\" placeholder=\"Confirm password\">\n    <span *ngIf=\"!form.get('passwordConfirm').valid && form.get('passwordConfirm').touched\" class=\"invalid-field-tip\">Passwords are not the same</span>\n  </div>\n  <button class=\"btn\" [disabled]=\"!form.valid\" type=\"submit\">Sign up</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todo\">\n  <div>\n    <input (change)=\"toggleTodo(todo)\" [checked]=\"todo.completed\" type=\"checkbox\" class=\"hidden\" [id]=\"todo._id\">\n    <label [htmlFor]=\"todo._id\"></label>\n  </div>\n  <p>{{todo.title}}</p>\n  <button (click)=\"deleteTodo(todo)\" type=\"button\">\n    <mat-icon>delete</mat-icon>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todos-card/todos-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos-card/todos-card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Your todo list</h1>\n<div class=\"card\">\n  <div class=\"input-wrapper\">\n    <input type=\"text\" class=\"todo-input\" (keydown.enter)=\"createTodo($event)\" placeholder=\"Enter your task name here\">\n  </div>\n\n  <div class=\"todos\">\n    <app-todo\n    *ngFor=\"let todo of todos\"\n    [todo]=\"todo\"\n    (onChange)=\"getTodos()\"\n    ></app-todo>\n  </div>\n\n  <div class=\"bottom-controls\" *ngIf=\"todosService.todos.length > 0\">\n    <button (click)=\"completeAllTodos()\" type=\"button\" >{{todosService.tasksLeft}} tasks left</button>\n    <div class=\"filter\">\n      <input [checked]=\"status === 0\" class=\"hidden\" type=\"radio\" name=\"status\" value=\"all\" id=\"status-all\">\n      <label (click)=\"applyStatus(0)\" for=\"status-all\">All</label>\n      <input [checked]=\"status === 1\" class=\"hidden\" type=\"radio\" name=\"status\" value=\"todo\" id=\"status-todo\">\n      <label (click)=\"applyStatus(1)\" for=\"status-todo\">ToDo</label>\n      <input [checked]=\"status === 2\" class=\"hidden\" type=\"radio\" name=\"status\" value=\"completed\" id=\"status-completed\">\n      <label (click)=\"applyStatus(2)\" for=\"status-completed\">Completed</label>\n    </div>\n    <button (click)=\"deleteCompletedTodos()\" type=\"button\">Clear completed</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _todos_card_todos_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-card/todos-card.component */ "./src/app/todos-card/todos-card.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");







const routes = [
    { path: '', component: _todos_card_todos_card_component__WEBPACK_IMPORTED_MODULE_3__["TodosCardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 500px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhc2pheS9ub2RlLXRvZG8tdGhpcmQvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.storage.removeAuthData();
        this.router.navigate(['login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _todos_card_todos_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todos-card/todos-card.component */ "./src/app/todos-card/todos-card.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _todos_card_todos_card_component__WEBPACK_IMPORTED_MODULE_8__["TodosCardComponent"],
            _todo_todo_component__WEBPACK_IMPORTED_MODULE_9__["TodoComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");








let AuthGuard = class AuthGuard {
    constructor(auth, router, snackbar, storage) {
        this.auth = auth;
        this.router = router;
        this.snackbar = snackbar;
        this.storage = storage;
    }
    canActivate(route, state) {
        return this.auth.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
            if (e.status === 401) {
                this.router.navigate(['/login']);
                this.storage.removeAuthData();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
            }
            else {
                this.snackbar.open('We have run into a problem. Try again later');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true)));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/interfaces/todo-status.ts":
/*!*******************************************!*\
  !*** ./src/app/interfaces/todo-status.ts ***!
  \*******************************************/
/*! exports provided: TodoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStatus", function() { return TodoStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["All"] = 0] = "All";
    TodoStatus[TodoStatus["Todo"] = 1] = "Todo";
    TodoStatus[TodoStatus["Completed"] = 2] = "Completed";
})(TodoStatus || (TodoStatus = {}));


/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");







let LoginComponent = class LoginComponent {
    constructor(snackbar, activatedRoute, fb, auth, storage, router) {
        this.snackbar = snackbar;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.auth = auth;
        this.storage = storage;
        this.router = router;
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    ngOnInit() {
        if (this.storage.getJwt())
            this.router.navigate(['/']);
        this.canLoginSnack();
    }
    canLoginSnack() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.signedUp)
                this.snackbar.open('Now you can login');
        });
    }
    login() {
        this.auth.login(this.form.value).subscribe(response => {
            this.storage.setAuthData({ userId: response.user._id, jwt: response.accessToken, refresh: response.refreshToken });
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
            if (error.error.error && error.error.error === 'User not found')
                this.snackbar.open('User not found');
            else if (error.error.error && error.error.error === 'Password not correct')
                this.snackbar.open('Password incorrect');
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");







let AuthInterceptorService = class AuthInterceptorService {
    constructor(storage, http, auth, handler) {
        this.storage = storage;
        this.http = http;
        this.auth = auth;
        this.handler = handler;
    }
    intercept(req, next) {
        if (this.storage.getJwt())
            req = req.clone({ setHeaders: { Authorization: this.storage.getJwt() } });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error.error.error && error.error.error === 'TokenExpired') {
                return this.auth.refreshTokens().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
                    return this.handler.handle(req);
                }));
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/apis */ "./src/environments/apis.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AuthService = class AuthService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    signup(data) {
        return this.http.post(_environments_apis__WEBPACK_IMPORTED_MODULE_3__["APIs"].signup(), data);
    }
    login(data) {
        return this.http.post(_environments_apis__WEBPACK_IMPORTED_MODULE_3__["APIs"].login(), data);
    }
    isAuthenticated() {
        return this.http.get(_environments_apis__WEBPACK_IMPORTED_MODULE_3__["APIs"].authorization());
    }
    refreshTokens() {
        return this.http.post(_environments_apis__WEBPACK_IMPORTED_MODULE_3__["APIs"].refreshTokens(this.storage.getUserId()), null, { headers: { Refresh: this.storage.getRefresh() } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(data => {
            this.storage.setAuthData({ userId: data.user._id, jwt: 'Bearer ' + data.newAccessToken, refresh: 'Bearer ' + data.newRefreshToken });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error.status !== 0)
                this.storage.removeAuthData();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/snackbar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let SnackbarService = class SnackbarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action, duration) {
        action = action || 'Got it';
        duration = duration || 2000;
        this.snackBar.open(message, action, {
            duration,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SnackbarService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() { }
    getAuthData() {
        const userId = localStorage.getItem('userId');
        const jwt = localStorage.getItem('jwt');
        const refresh = localStorage.getItem('refresh');
        return { userId, jwt, refresh };
    }
    getJwt() {
        return localStorage.getItem('jwt');
    }
    getRefresh() {
        return localStorage.getItem('refresh');
    }
    getUserId() {
        return localStorage.getItem('userId');
    }
    setAuthData({ userId, jwt, refresh }) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('jwt', jwt);
        localStorage.setItem('refresh', refresh);
    }
    removeAuthData() {
        localStorage.clear();
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/todo-status */ "./src/app/interfaces/todo-status.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/apis */ "./src/environments/apis.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let TodosService = class TodosService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        this.todos = [];
        this.tasksLeft = 0;
    }
    filterTodos(status) {
        switch (status) {
            case _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__["TodoStatus"].All:
                return this.todos;
            case _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__["TodoStatus"].Todo:
                return this.todos.filter(item => item.completed === false);
            case _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__["TodoStatus"].Completed:
                return this.todos.filter(item => item.completed === true);
            default:
                return this.todos;
        }
    }
    fetchTodos() {
        return this.http.get(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].user(this.storage.getUserId())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(user => {
            this.todos = user.todos;
            this.tasksLeft = this.todos.filter(item => item.completed === false).length;
        }));
    }
    createTodo(title) {
        return this.http.post(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].todos(this.storage.getUserId()), { title }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(todo => {
            this.todos.unshift(todo);
            this.tasksLeft++;
        }));
    }
    deleteTodo(todo) {
        return this.http.delete(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].todo(this.storage.getUserId(), todo._id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            this.tasksLeft += (todo.completed ? 0 : -1);
            const deleteIdx = this.todos.findIndex(item => item._id === todo._id);
            this.todos.splice(deleteIdx, 1);
        }));
    }
    toggleTodo(todo) {
        return this.http.patch(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].todo(this.storage.getUserId(), todo._id), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            todo.completed = !todo.completed;
            this.tasksLeft += (todo.completed ? -1 : 1);
        }));
    }
    completeAllTodos() {
        return this.http.patch(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].todos(this.storage.getUserId()), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            this.todos.forEach(todo => todo.completed = true);
            this.tasksLeft = 0;
        }));
    }
    deleteCompletedTodos() {
        return this.http.delete(_environments_apis__WEBPACK_IMPORTED_MODULE_4__["APIs"].todos(this.storage.getUserId())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            this.todos = this.todos.filter(todo => todo.completed === false);
        }));
    }
};
TodosService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodosService);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");








let SignupComponent = class SignupComponent {
    constructor(fb, auth, router, snackbar, storage) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.snackbar = snackbar;
        this.storage = storage;
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, { validator: this.passwordMatchValidator });
    }
    passwordMatchValidator(form) {
        return form.controls['password'].value === form.controls['passwordConfirm'].value ? null : { 'mismatch': true };
    }
    ngOnInit() {
        if (this.storage.getJwt())
            this.router.navigate(['/']);
    }
    signup() {
        this.auth.signup(this.form.value).subscribe(response => {
            this.form.reset();
            this.router.navigate(['login'], { queryParams: { signedUp: true } });
        }, error => {
            if (error.error.error && error.error.error.slice(0, 37) === 'E11000 duplicate key error collection')
                this.snackbar.open('User already exists. Forgot password?', 'Yes', 5000);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.completed {\n  text-decoration: line-through;\n  color: #777777;\n}\n.todo {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.todo > * {\n  padding: 15px;\n  margin: 0;\n}\n.todo > *:last-child {\n  margin-left: auto;\n  margin-right: 20px;\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  color: #bbb;\n}\n.todo > *:last-child:hover {\n  color: #222;\n  cursor: pointer;\n}\n.todo input + label {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  background-color: white;\n  color: green;\n}\n.todo input:checked + label:before {\n  content: \"✔\";\n  position: relative;\n  left: 3px;\n  top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvY2FzamF5L25vZGUtdG9kby10aGlyZC9jbGllbnQvc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FERUY7QUNBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0FERUY7QUNERTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FER0o7QUNERTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBREdKO0FDREU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBREdKO0FDREU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxZQUFBO0FEQ0o7QUNDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FEQ0oiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLnRvZG8gPiAqIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnRvZG8gPiAqOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiAjYmJiO1xufVxuLnRvZG8gPiAqOmxhc3QtY2hpbGQ6aG92ZXIge1xuICBjb2xvcjogIzIyMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvZG8gaW5wdXQgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnRvZG8gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogM3B4O1xuICB0b3A6IC0ycHg7XG59IiwiLmNvbXBsZXRlZHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuLnRvZG97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICY+KntcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmPio6bGFzdC1jaGlsZHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogI2JiYjtcbiAgfVxuICAmPio6bGFzdC1jaGlsZDpob3ZlcntcbiAgICBjb2xvcjogIzIyMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQgKyBsYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcbiAgICBjb250ZW50OiAn4pyUJztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogM3B4O1xuICAgIHRvcDogLTJweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TodoComponent = class TodoComponent {
    constructor(todosService, snackbar, router) {
        this.todosService = todosService;
        this.snackbar = snackbar;
        this.router = router;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    deleteTodo(todo) {
        this.todosService.deleteTodo(todo).subscribe(response => {
            this.onChange.emit();
        }, error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
    toggleTodo(todo) {
        this.todosService.toggleTodo(todo).subscribe(response => {
            this.onChange.emit();
        }, error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
};
TodoComponent.ctorParameters = () => [
    { type: _services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] },
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodoComponent.prototype, "todo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TodoComponent.prototype, "onChange", void 0);
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")).default]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/todos-card/todos-card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/todos-card/todos-card.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: 0 0 20px #777;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 30px;\n  font-weight: normal;\n}\n\n.todos {\n  max-height: 400px;\n  overflow: auto;\n}\n\n.todos::-webkit-scrollbar {\n  width: 0 !important;\n}\n\n.todos {\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n}\n\n.input-wrapper {\n  padding: 30px 0;\n}\n\n.todo-input {\n  display: block;\n  width: 95%;\n  margin: 0 auto;\n  padding: 5px;\n  font-size: inherit;\n  border: none;\n  border-bottom: 1px solid #ccc;\n}\n\n.bottom-controls {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px 0;\n  border-top: 1px solid #777777;\n  text-align: center;\n  font-size: 14px;\n}\n\n.bottom-controls > *:nth-child(1) {\n  flex: 0 0 20%;\n  color: #777777;\n}\n\n.bottom-controls > *:nth-child(2) {\n  flex: 0 0 40%;\n}\n\n.bottom-controls > *:nth-child(3) {\n  flex: 0 0 25%;\n}\n\n.bottom-controls button {\n  border: none;\n  background-color: inherit;\n  color: #777777;\n  cursor: pointer;\n}\n\n.bottom-controls button:hover {\n  color: #222;\n}\n\n.filter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.filter label {\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.filter input:checked + label {\n  border: 1px solid #999;\n}\n\n.filter button:hover {\n  color: #222;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhc2pheS9ub2RlLXRvZG8tdGhpcmQvY2xpZW50L3NyYy9hcHAvdG9kb3MtY2FyZC90b2Rvcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2Rvcy1jYXJkL3RvZG9zLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FERkE7RUFDRSw4QkFBQTtFQUNBLHdCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsNkJBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkU7RUFDRSxhQUFBO0VBRUEsY0FBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7QUNDSjs7QURDSTtFQUNFLFdBQUE7QUNDTjs7QURHQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLHNCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MtY2FyZC90b2Rvcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM3Nzc7XG59XG5oMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnRvZG9ze1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4udG9kb3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cbi50b2RvcyB7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuLmlucHV0LXdyYXBwZXJ7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi50b2RvLWlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDVweDtcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG5cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5ib3R0b20tY29udHJvbHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc3Nzc7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgJj4qOm50aC1jaGlsZCgxKXtcbiAgICBmbGV4OiAwIDAgMjAlO1xuXG4gICAgY29sb3I6ICM3Nzc3Nzc7XG4gIH1cbiAgJj4qOm50aC1jaGlsZCgyKXtcbiAgICBmbGV4OiAwIDAgNDAlO1xuICB9XG4gICY+KjpudGgtY2hpbGQoMyl7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgfVxuICBidXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogIzc3Nzc3NztcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXJ7XG4gICAgICBjb2xvcjogIzIyMjtcbiAgICB9XG4gIH1cbn1cbi5maWx0ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGxhYmVse1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVse1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIH1cbiAgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjNzc3O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRvZG9zIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG9kb3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLnRvZG9zIHtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuXG4udG9kby1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5ib3R0b20tY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc3Nzc3NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYm90dG9tLWNvbnRyb2xzID4gKjpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMjAlO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cbi5ib3R0b20tY29udHJvbHMgPiAqOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4uYm90dG9tLWNvbnRyb2xzID4gKjpudGgtY2hpbGQoMykge1xuICBmbGV4OiAwIDAgMjUlO1xufVxuLmJvdHRvbS1jb250cm9scyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tLWNvbnRyb2xzIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmlsdGVyIGxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uZmlsdGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG4uZmlsdGVyIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjIyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/todos-card/todos-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/todos-card/todos-card.component.ts ***!
  \****************************************************/
/*! exports provided: TodosCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosCardComponent", function() { return TodosCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/todo-status */ "./src/app/interfaces/todo-status.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TodosCardComponent = class TodosCardComponent {
    constructor(todosService, snackbar, router) {
        this.todosService = todosService;
        this.snackbar = snackbar;
        this.router = router;
        this.todos = [];
        this.status = _interfaces_todo_status__WEBPACK_IMPORTED_MODULE_2__["TodoStatus"].All;
    }
    ngOnInit() {
        this.fetchUser();
    }
    getTodos() {
        this.todos = this.todosService.filterTodos(this.status);
    }
    applyStatus(status) {
        this.status = status;
        this.getTodos();
    }
    fetchUser() {
        this.todosService.fetchTodos().subscribe(response => this.getTodos(), error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
    createTodo($event) {
        const input = $event.target;
        if (!input.value.trim())
            return this.snackbar.open('Set a todo title');
        this.todosService.createTodo(input.value).subscribe(todo => {
            input.value = '';
            this.getTodos();
        }, error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
    completeAllTodos() {
        this.todosService.completeAllTodos().subscribe(() => this.getTodos(), error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
    deleteCompletedTodos() {
        this.todosService.deleteCompletedTodos().subscribe(() => this.getTodos(), error => {
            if (error.status === 401)
                this.router.navigate(['login']);
            else
                this.snackbar.open('We have run into a problem. Try again later');
        });
    }
};
TodosCardComponent.ctorParameters = () => [
    { type: _services_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"] },
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TodosCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todos-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todos-card/todos-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todos-card.component.scss */ "./src/app/todos-card/todos-card.component.scss")).default]
    })
], TodosCardComponent);



/***/ }),

/***/ "./src/environments/apis.ts":
/*!**********************************!*\
  !*** ./src/environments/apis.ts ***!
  \**********************************/
/*! exports provided: APIs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIs", function() { return APIs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./src/environments/environment.ts");


const APIs = {
    authorization: () => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/auth/check-authorization',
    login: () => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/auth/login',
    signup: () => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/auth/signup',
    refreshTokens: userId => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/auth/refresh/' + userId,
    user: userId => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/users/' + userId,
    todos: userId => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/users/' + userId + '/todos',
    todo: (userId, todoId) => _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + '/api/v1/users/' + userId + '/todos/' + todoId
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    URL: 'https://todo.casjay.coffee'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/casjay/node-todo-third/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map