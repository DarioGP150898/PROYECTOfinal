(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screen1-screen1-module"],{

/***/ "./src/app/layout/screen1/screen1-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/screen1/screen1-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Screen1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1RoutingModule", function() { return Screen1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen1.component */ "./src/app/layout/screen1/screen1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _screen1_component__WEBPACK_IMPORTED_MODULE_2__["Screen1Component"]
    }
];
var Screen1RoutingModule = /** @class */ (function () {
    function Screen1RoutingModule() {
    }
    Screen1RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Screen1RoutingModule);
    return Screen1RoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/screen1/screen1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/screen1/screen1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  screen1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/screen1/screen1.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/screen1/screen1.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zY3JlZW4xL3NjcmVlbjEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/screen1/screen1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/screen1/screen1.component.ts ***!
  \*****************************************************/
/*! exports provided: Screen1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1Component", function() { return Screen1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Screen1Component = /** @class */ (function () {
    function Screen1Component() {
    }
    Screen1Component.prototype.ngOnInit = function () {
    };
    Screen1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screen1',
            template: __webpack_require__(/*! ./screen1.component.html */ "./src/app/layout/screen1/screen1.component.html"),
            styles: [__webpack_require__(/*! ./screen1.component.scss */ "./src/app/layout/screen1/screen1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Screen1Component);
    return Screen1Component;
}());



/***/ }),

/***/ "./src/app/layout/screen1/screen1.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/screen1/screen1.module.ts ***!
  \**************************************************/
/*! exports provided: Screen1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1Module", function() { return Screen1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen1.component */ "./src/app/layout/screen1/screen1.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen1-routing.module */ "./src/app/layout/screen1/screen1-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Screen1Module = /** @class */ (function () {
    function Screen1Module() {
    }
    Screen1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_screen1_component__WEBPACK_IMPORTED_MODULE_2__["Screen1Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Screen1RoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
            ]
        })
    ], Screen1Module);
    return Screen1Module;
}());



/***/ })

}]);
//# sourceMappingURL=screen1-screen1-module.js.map