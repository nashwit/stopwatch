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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/clock/clock.component */ "./src/app/components/clock/clock.component.ts");
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls/controls.component */ "./src/app/components/controls/controls.component.ts");
/* harmony import */ var _components_laps_laps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/laps/laps.component */ "./src/app/components/laps/laps.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Stop Watch';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "container"], [1, "list"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-laps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_clock_clock_component__WEBPACK_IMPORTED_MODULE_1__["ClockComponent"], _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"], _components_laps_laps_component__WEBPACK_IMPORTED_MODULE_3__["LapsComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 400px;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  border-radius: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNDLFlBQUE7RUFDQSxzQkFBQTtBQUNMOztBQUNBO0VBQ0csa0JBQUE7QUFFSCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICB3aWR0aDo0MDBweDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clock/clock.component */ "./src/app/components/clock/clock.component.ts");
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/controls/controls.component */ "./src/app/components/controls/controls.component.ts");
/* harmony import */ var _components_laps_laps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/laps/laps.component */ "./src/app/components/laps/laps.component.ts");
/* harmony import */ var _shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/paddzero.pipe */ "./src/app/shared/paddzero.pipe.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_3__["ClockComponent"],
        _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__["ControlsComponent"],
        _components_laps_laps_component__WEBPACK_IMPORTED_MODULE_5__["LapsComponent"],
        _shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_6__["PaddzeroPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_3__["ClockComponent"],
                    _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__["ControlsComponent"],
                    _components_laps_laps_component__WEBPACK_IMPORTED_MODULE_5__["LapsComponent"],
                    _shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_6__["PaddzeroPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/clock/clock.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/clock/clock.component.ts ***!
  \*****************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utilities */ "./src/app/shared/utilities.ts");
/* harmony import */ var _shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/stopwatch.service */ "./src/app/shared/stopwatch.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/paddzero.pipe */ "./src/app/shared/paddzero.pipe.ts");







const _c0 = function (a0) { return { "isRuning": a0 }; };
class ClockComponent {
    constructor(stopWatchService) {
        this.stopWatchService = stopWatchService;
        this.clock = { mm: '00', ss: '00', ms: '00' };
        this.isRuning = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subs.add(this.stopWatchService.currentClock$.subscribe(clock => {
            this.clock = Object(_shared_utilities__WEBPACK_IMPORTED_MODULE_2__["convertTickToClockTime"])(clock);
        }));
        this.subs.add(this.stopWatchService.isRuning.subscribe(isRuning => {
            this.isRuning = isRuning;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
ClockComponent.ɵfac = function ClockComponent_Factory(t) { return new (t || ClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__["StopWatchService"])); };
ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockComponent, selectors: [["app-clock"]], decls: 12, vars: 15, consts: [[1, "clock"], [3, "ngClass"]], template: function ClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paddzero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "paddzero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paddzero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.clock.mm), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isRuning));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.clock.ss));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isRuning));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.clock.ms), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_5__["PaddzeroPipe"]], styles: [".clock[_ngcontent-%COMP%] {\n  color: #81d830;\n  font-size: 55px;\n  height: 84px;\n  background-color: black;\n  text-align: center;\n  border-radius: 10px 10px 0px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.clock[_ngcontent-%COMP%]::before {\n  content: \"88:88.88\";\n  opacity: 0.2;\n  position: absolute;\n  left: 25%;\n}\n.clock[_ngcontent-%COMP%]   .isRuning[_ngcontent-%COMP%] {\n  animation: blink-animation 1s ease-in-out infinite;\n  -webkit-animation: blink-animation 1s ease-in-out infinite;\n}\n@keyframes blink-animation {\n  0% {\n    color: #81d830;\n  }\n  50% {\n    color: rgba(129, 216, 48, 0);\n  }\n  100% {\n    color: #81d830;\n  }\n}\n@-webkit-keyframes blink-animation {\n  0% {\n    color: #81d830;\n  }\n  50% {\n    color: rgba(129, 216, 48, 0);\n  }\n  100% {\n    color: #81d830;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbG9jay9jbG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSTtFQUNJLGtEQUFBO0VBQ0osMERBQUE7QUFFSjtBQUtFO0VBQ0U7SUFBSyxjQUFBO0VBRFA7RUFFRTtJQUFLLDRCQUFBO0VBQ1A7RUFBRTtJQUFPLGNBQUE7RUFHVDtBQUNGO0FBREU7RUFDRTtJQUFLLGNBQUE7RUFJUDtFQUhFO0lBQUssNEJBQUE7RUFNUDtFQUxFO0lBQU8sY0FBQTtFQVFUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb2NrIHtcclxuICAgIGNvbG9yOiAjODFkODMwO1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiODg6ODguODhcIjtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIC5pc1J1bmluZ3tcclxuICAgICAgICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiBcclxuICAgIFxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICAgIDAlIHsgY29sb3I6cmdiYSgxMjksIDIxNiwgNDgsIDEpfVxyXG4gICAgNTAlIHtjb2xvcjpyZ2JhKDEyOSwgMjE2LCA0OCwgMCl9XHJcbiAgICAxMDAlIHsgY29sb3I6cmdiYSgxMjksIDIxNiwgNDgsIDEpfVxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgICAwJSB7IGNvbG9yOnJnYmEoMTI5LCAyMTYsIDQ4LCAxKX1cclxuICAgIDUwJSB7Y29sb3I6cmdiYSgxMjksIDIxNiwgNDgsIDApfVxyXG4gICAgMTAwJSB7IGNvbG9yOnJnYmEoMTI5LCAyMTYsIDQ4LCAxKX1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clock',
                templateUrl: './clock.component.html',
                styleUrls: ['./clock.component.scss']
            }]
    }], function () { return [{ type: _shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__["StopWatchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/controls/controls.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/controls/controls.component.ts ***!
  \***********************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/app-store.service */ "./src/app/shared/app-store.service.ts");
/* harmony import */ var src_app_shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/stopwatch.service */ "./src/app/shared/stopwatch.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







function ControlsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startStopWatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faPlay);
} }
function ControlsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pauseStopWatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPause);
} }
class ControlsComponent {
    constructor(appStoreService, stopWatchService) {
        this.appStoreService = appStoreService;
        this.stopWatchService = stopWatchService;
        this.faStopwatch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStopwatch"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPause"];
        this.isRuning = false;
    }
    ngOnInit() {
        this.appStoreService.stateChanged.subscribe(state => {
            if (state) {
                this.isRuning = state.isRuning;
            }
        });
    }
    startStopWatch() {
        this.appStoreService.startStopwatch(true);
    }
    pauseStopWatch() {
        this.appStoreService.pauseStopWatch();
    }
    addLap() {
        this.stopWatchService.getLap();
    }
    clearAll() {
        this.appStoreService.clearAll();
    }
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return new (t || ControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__["StopWatchService"])); };
ControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsComponent, selectors: [["app-controls"]], decls: 7, vars: 4, consts: [[1, "controls"], ["class", "big btn", 3, "click", 4, "ngIf"], [1, "small", "btn", "borders", 3, "click"], [3, "icon"], [1, "small", "btn", 3, "click"], [1, "big", "btn", 3, "click"], [1, "center"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ControlsComponent_div_2_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_Template_div_click_3_listener() { return ctx.addLap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_Template_div_click_5_listener() { return ctx.clearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRuning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRuning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStopwatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTrash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  height: 44px;\n  border-radius: 0px 0px 10px 10px;\n  justify-content: space-between;\n}\n.controls[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.controls[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.controls[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.controls[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 10px;\n  line-height: 17px;\n}\n.controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.controls[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%] {\n  border-right: 1px solid #9b9b9b;\n  border-left: 1px solid #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR2hCO0FBQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNJO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnNtYWxsIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG4gICAgLmJpZyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAuY2VudGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC5uZy1mYS1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVycyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE1NSwgMTU1LCAxNTUpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE1NSwgMTU1LCAxNTUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-controls',
                templateUrl: './controls.component.html',
                styleUrls: ['./controls.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"] }, { type: src_app_shared_stopwatch_service__WEBPACK_IMPORTED_MODULE_3__["StopWatchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/laps/laps.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/laps/laps.component.ts ***!
  \***************************************************/
/*! exports provided: LapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapsComponent", function() { return LapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/app-store.service */ "./src/app/shared/app-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/paddzero.pipe */ "./src/app/shared/paddzero.pipe.ts");






function LapsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paddzero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paddzero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paddzero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LapsComponent_div_0_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const lap_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.removeLap(lap_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lap_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, lap_r2.time.mm), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, lap_r2.time.ss), ".", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, lap_r2.time.ms), " ");
} }
function LapsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LapsComponent_div_0_div_1_Template, 7, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.laps);
} }
class LapsComponent {
    constructor(appStoreService) {
        this.appStoreService = appStoreService;
        this.stateHistory = null;
        this.isHistoryVisible = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.subs.add(this.appStoreService.stateChanged.subscribe(state => {
            if (state) {
                this.laps = state.laps;
            }
        }));
    }
    removeLap(lap) {
        this.appStoreService.removeLap(lap);
    }
    viewStateHistory() {
        this.isHistoryVisible = !this.isHistoryVisible;
        this.stateHistory = this.appStoreService.stateHistory;
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
LapsComponent.ɵfac = function LapsComponent_Factory(t) { return new (t || LapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"])); };
LapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LapsComponent, selectors: [["app-laps"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "lap", 4, "ngFor", "ngForOf"], [1, "lap"], [3, "click"]], template: function LapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LapsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.laps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_paddzero_pipe__WEBPACK_IMPORTED_MODULE_4__["PaddzeroPipe"]], styles: [".lap[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n  border-bottom: 1px solid #9b9b9b;\n  height: 35px;\n  line-height: 35px;\n  font-size: 30px;\n  padding: 10px 0px;\n  position: relative;\n}\n.lap[_ngcontent-%COMP%]::before {\n  content: \"88:88.88\";\n  opacity: 0.1;\n  position: absolute;\n}\n.lap[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.lap[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  display: block;\n}\n.lap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n  float: right;\n  height: 100%;\n  background-color: #f50400;\n  font-style: \"\";\n  outline: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXBzL2xhcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhcHMvbGFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXAge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YjliOWI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCI4ODo4OC44OFwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwNDAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IHRvLXVwcGVyLWNhc2UoJHN0cmluZzogXCJcIik7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-laps',
                templateUrl: './laps.component.html',
                styleUrls: ['./laps.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/app-store.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/app-store.service.ts ***!
  \*********************************************/
/*! exports provided: AppStoreService, StopwatchStoreActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchStoreActions", function() { return StopwatchStoreActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codewithdan/observable-store */ "./node_modules/@codewithdan/observable-store/dist/index.js");
/* harmony import */ var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/app/shared/utilities.ts");




const initialState = {
    isRuning: false,
    currentClockTime: 0,
    laps: [],
    reset: true
};
class AppStoreService extends _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__["ObservableStore"] {
    constructor() {
        super({ logStateChanges: true, trackStateHistory: true });
        this.initializeState();
    }
    initializeState() {
        this.setState(this.getStateFromLocalStorage(), StopwatchStoreActions.InitializeState);
    }
    setStateInLocalStorage(currentClockTime) {
        this.setState({ currentClockTime }, StopwatchStoreActions.GetCurrentClockTime);
        localStorage.setItem('stopwacthState', JSON.stringify(this.getState()));
        if (this.getState().isRuning) {
            localStorage.setItem('closingTime', JSON.stringify(new Date()));
        }
    }
    getStateFromLocalStorage() {
        const localState = JSON.parse(localStorage.getItem('stopwacthState'));
        this.getTimeDifference(localState);
        return localState !== null && localState !== void 0 ? localState : initialState;
    }
    startStopwatch(start) {
        const isRuning = start;
        this.setState({ isRuning: true, reset: false }, StopwatchStoreActions.StartRuning);
    }
    pauseStopWatch() {
        const isRuning = false;
        this.setState({ isRuning }, StopwatchStoreActions.PauseRuning);
    }
    getTimeDifference(localState) {
        if (localState === null) {
            return null;
        }
        const closingTime = JSON.parse(localStorage.getItem('closingTime'));
        localState.currentClockTime += closingTime && localState.isRuning ?
            Math.floor((new Date().getTime() - new Date(closingTime).getTime()) / 10) : 0;
    }
    addLap(currenttime) {
        if (this.getState().isRuning) {
            const newLap = { time: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["convertTickToClockTime"])(currenttime), id: this.getState().laps.length };
            let laps = this.getState().laps;
            laps.push(newLap);
            this.setState({ laps }, StopwatchStoreActions.AddLap);
        }
    }
    removeLap(id) {
        const laps = this.getState().laps.filter(lap => lap.id !== id);
        this.setState({ laps }, StopwatchStoreActions.RemoveLap);
    }
    clearAll() {
        this.setState(initialState, StopwatchStoreActions.InitializeState);
    }
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
var StopwatchStoreActions;
(function (StopwatchStoreActions) {
    StopwatchStoreActions["GetCurrentClockTime"] = "GET_CURRENT_CLOKC_TIME";
    StopwatchStoreActions["InitializeState"] = "INITIALIZE_STATE";
    StopwatchStoreActions["StartRuning"] = "START_RUNING";
    StopwatchStoreActions["PauseRuning"] = "PAUSE_RUNING";
    StopwatchStoreActions["AddLap"] = "ADD_LAP";
    StopwatchStoreActions["RemoveLap"] = "REMOVE_LAP";
    StopwatchStoreActions["ClearAll"] = "CLEAR_ALL";
})(StopwatchStoreActions || (StopwatchStoreActions = {}));


/***/ }),

/***/ "./src/app/shared/paddzero.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/paddzero.pipe.ts ***!
  \*****************************************/
/*! exports provided: PaddzeroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaddzeroPipe", function() { return PaddzeroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PaddzeroPipe {
    transform(value) {
        return value < 10 ? '0' + value.toString() : value.toString();
    }
}
PaddzeroPipe.ɵfac = function PaddzeroPipe_Factory(t) { return new (t || PaddzeroPipe)(); };
PaddzeroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paddzero", type: PaddzeroPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaddzeroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paddzero'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/stopwatch.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/stopwatch.service.ts ***!
  \*********************************************/
/*! exports provided: StopWatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopWatchService", function() { return StopWatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-store.service */ "./src/app/shared/app-store.service.ts");





class StopWatchService {
    constructor(appStoreService) {
        this.appStoreService = appStoreService;
        this.latestTime = this.appStoreService.getStateFromLocalStorage().currentClockTime;
        this.currentClock$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.latestTime);
        this.stateHistory = null;
        this.isHistoryVisible = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.tenthSecond$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(10);
        this.isReset = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isRuning = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stopwatch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.isRuning)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(val => (val ? this.tenthSecond$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.latestTime))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((acc, curr) => (curr === 0 || curr === acc ? this.latestTime : this.latestTime + 1), 0))
            .subscribe((val) => {
            const newtick = val;
            this.latestTime = newtick;
            this.currentClock$.next(newtick);
        });
        this.reset$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.isReset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(val => val)).subscribe(() => {
            this.latestTime = 0;
        });
        this.subs.add(this.appStoreService.stateChanged.subscribe(state => {
            if (state) {
                this.isReset.next(state.reset);
                this.isRuning.next(state.isRuning);
            }
        }));
        window.onbeforeunload = () => {
            this.setLatestTimeinLocalStorgae();
        };
    }
    calcTimer(acc, curr) {
        // if (this.isReset) {
        //   return 0;
        // }
        return curr === 0 || curr === acc ? this.latestTime : this.latestTime + 1;
    }
    getLap() {
        this.appStoreService.addLap(this.latestTime);
    }
    viewStateHistory() {
        this.isHistoryVisible = !this.isHistoryVisible;
        this.stateHistory = this.appStoreService.stateHistory;
    }
    ngOnDestroy() {
        this.stopwatch$.unsubscribe();
        this.subs.unsubscribe();
    }
    setLatestTimeinLocalStorgae() {
        this.appStoreService.setStateInLocalStorage(this.latestTime - 1);
    }
}
StopWatchService.ɵfac = function StopWatchService_Factory(t) { return new (t || StopWatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"])); };
StopWatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StopWatchService, factory: StopWatchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopWatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/utilities.ts":
/*!*************************************!*\
  !*** ./src/app/shared/utilities.ts ***!
  \*************************************/
/*! exports provided: convertTickToClockTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTickToClockTime", function() { return convertTickToClockTime; });
const convertTickToClockTime = (tick) => {
    const ms = tick % 100;
    tick = (tick - ms) / 100;
    const secs = tick % 60;
    tick = (tick - secs) / 60;
    const mins = tick % 60;
    const hrs = (tick - mins) / 60;
    const time = { mm: mins.toString(), ss: secs.toString(), ms: ms.toString() };
    return time;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nathansch\Documents\firbasehosting\stopwatch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map