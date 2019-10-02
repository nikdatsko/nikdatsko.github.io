(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"projects\">\r\n  <li *ngFor=\"let project of projects\">\r\n    <div class=\"item\">\r\n      <a href=\"http://projects.niklenburg.com/{{project.title}}/\" title=\"projects.niklenburg.com/{{project.title}}\" target=\"_blank\"\r\n        [class.light]=\"project.light\" [class.full]=\"project.full\" [class.loaded]=\"project.loaded || project.fail\">\r\n          <img src=\"http://projects.niklenburg.com/{{project.title}}/img/logo.png\"\r\n               *ngIf=\"!project.fail\"\r\n               (load)=\"onImgLoad(project)\"\r\n               (error)=\"onImgError(project)\">\r\n          <span *ngIf=\"project.fail\">{{project.title}}</span>\r\n        </a>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/portfolio/portfolio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function() { return PortfolioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");




var routes = [
    {
        path: '',
        component: _portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
    }
];
var PortfolioRoutingModule = /** @class */ (function () {
    function PortfolioRoutingModule() {
    }
    PortfolioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PortfolioRoutingModule);
    return PortfolioRoutingModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects {\n  list-style: none;\n}\n.projects:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.projects li {\n  float: left;\n  width: 20%;\n}\n@media (max-width: 600px) {\n  .projects li {\n    width: 33.3333%;\n  }\n}\n.item {\n  position: relative;\n  height: 0;\n  padding-bottom: 100%;\n}\n.item a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 5px;\n  white-space: nowrap;\n  text-align: center;\n  font: 0/0 a;\n  color: #afafaf;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}\n.item a.loaded {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.item a.light {\n  background: #afafaf;\n}\n.item a.full {\n  padding: 0;\n}\n.item a > *, .item a:before {\n  display: inline-block;\n  vertical-align: middle;\n}\n.item a:before {\n  content: \"\";\n  height: 100%;\n}\n.item a > * {\n  font: 13px/normal sans-serif;\n  white-space: normal;\n}\n.item a img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcTXlreXRhX0RhdHNrb1xcUHJvamVjdHNcXG5pa1xcbmlrZGF0c2tvLmdpdGh1Yi5pby9zcmNcXGFwcFxccG9ydGZvbGlvXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNBSjtBREVJO0VBSkY7SUFLSSxlQUFBO0VDQ0o7QUFDRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSw4Q0FBQTtFQUFBLHNDQUFBO0VBQUEsMEVBQUE7QUNBSjtBREVJO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxVQUFBO0FDRk47QURLSTtFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7QUNKTjtBRE9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNMTjtBRFFJO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ05OO0FEU0k7RUFDRSxlQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcblxyXG4gIGEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQ6IDAvMCBhO1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5sb2FkZWQge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgICYubGlnaHQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYWZhZmFmO1xyXG4gICAgfVxyXG5cclxuICAgICYuZnVsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICosXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICoge1xyXG4gICAgICBmb250OiAxM3B4L25vcm1hbCBzYW5zLXNlcmlmO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnByb2plY3RzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9qZWN0czphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5wcm9qZWN0cyBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wcm9qZWN0cyBsaSB7XG4gICAgd2lkdGg6IDMzLjMzMzMlO1xuICB9XG59XG5cbi5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuLml0ZW0gYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogMC8wIGE7XG4gIGNvbG9yOiAjYWZhZmFmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cbi5pdGVtIGEubG9hZGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5pdGVtIGEubGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjYWZhZmFmO1xufVxuLml0ZW0gYS5mdWxsIHtcbiAgcGFkZGluZzogMDtcbn1cbi5pdGVtIGEgPiAqLCAuaXRlbSBhOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pdGVtIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLml0ZW0gYSA+ICoge1xuICBmb250OiAxM3B4L25vcm1hbCBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLml0ZW0gYSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/portfolio/portfolio.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.projects = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService
            .getProjects()
            .subscribe(function (data) { return (_this.projects = data); });
    };
    PortfolioComponent.prototype.onImgLoad = function (item) {
        item.loaded = true;
    };
    PortfolioComponent.prototype.onImgError = function (item) {
        item.fail = true;
    };
    PortfolioComponent.ctorParameters = function () { return [
        { type: _portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"] }
    ]; };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/portfolio/portfolio-routing.module.ts");





var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioRoutingModule"]]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.service.ts":
/*!************************************************!*\
  !*** ./src/app/portfolio/portfolio.service.ts ***!
  \************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
    }
    PortfolioService.prototype.getProjects = function () {
        return this.http.get('/assets/data/projects.json');
    };
    PortfolioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PortfolioService);
    return PortfolioService;
}());



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module-es5.js.map