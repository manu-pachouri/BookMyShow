(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\keka_intern_files\bookmyshow\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "4E90":
/*!************************************************!*\
  !*** ./src/app/Services/apiservice.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:5001/bookmyshow';
        this.authUrl = 'https://localhost:5001/authentication';
    }
    register(credentials) {
        return this.http.post(this.authUrl + '/register', credentials);
    }
    login(credentials) {
        return this.http.post(this.authUrl + '/login', credentials);
    }
    logout() {
        return this.http.post(this.authUrl + '/logout', null);
    }
    addMovie(movie) {
        return this.http.post(this.baseUrl + '/movies/add', movie);
    }
    GetMovies() {
        return this.http.get(this.baseUrl + '/movies');
    }
    GetMovieDetail(movieId) {
        return this.http.get(this.baseUrl + `/movies/${movieId}/details`);
    }
    GetTheatres(movieId) {
        return this.http.get(this.baseUrl + `/movies/${movieId}/theatres`);
    }
    GetSeats(theaterId) {
        return this.http.get(this.baseUrl + `/movies/theaters/${theaterId}/seats`);
    }
    BookSeats(seats, movieId, theaterid) {
        return this.http.post(this.baseUrl + `/movies/${movieId}/theaters/${theaterid}/seats/${localStorage.getItem('userId')}`, seats);
    }
    GetTickets() {
        return this.http.get(this.baseUrl + `/movies/mybookings/tickets/${localStorage.getItem('userId')}`);
    }
    cancelTicket(ticketId) {
        return this.http.post(this.baseUrl + `/movies/mybookings/tickets/cancel`, ticketId);
    }
    AddMovie(movie) {
        return this.http.post(this.baseUrl + `/movies/add`, movie);
    }
    DeleteMovie(id) {
        return this.http.delete(this.baseUrl + `/movies/delete/${id}`);
    }
    GetAllTickets() {
        return this.http.get(this.baseUrl + `/adminpanel/tickets`);
    }
    GetAllUsers() {
        return this.http.get(this.authUrl + `/adminpanel/users`);
    }
    DeleteUser(userName) {
        return this.http.delete(this.authUrl + `/adminpanel/users/delete/${userName}`);
    }
    changePassword(change) {
        console.log(change);
        return this.http.post(this.authUrl + `/adminpanel/users/changepass`, change);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "B+sD":
/*!**************************************************!*\
  !*** ./src/app/Services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Cbzf":
/*!******************************************!*\
  !*** ./src/app/auth/auth.intercepter.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        if (localStorage.getItem('access_token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
            });
            return next.handle(clonedReq)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(succ => {
            }, (err) => {
                if (err.status == 401) {
                    localStorage.removeItem('access_token');
                    this.router.navigateByUrl('/login');
                }
            }, () => { }));
        }
        return next.handle(req.clone());
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/notification.service */ "B+sD");
/* harmony import */ var _Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Services/userservice.service */ "pRQr");





class AuthGuard {
    constructor(router, notifService, userService) {
        this.router = router;
        this.notifService = notifService;
        this.userService = userService;
    }
    canActivate(route, state) {
        if (localStorage.getItem('access_token') != null) {
            let roles = route.data['permittedRoles'];
            if (roles) {
                if (this.userService.roleMatch(roles))
                    return true;
                else {
                    this.notifService.showWarning("Only Admins are allowed!", "Warning");
                    return false;
                }
            }
            return true;
        }
        else {
            this.notifService.showWarning("Please login to continue", "Warning");
            this.router.navigateByUrl('/login');
        }
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'bookmyshow';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "bg-dark"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".seat[_ngcontent-%COMP%]:hover {\n  background-color: wheat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.intercepter */ "Cbzf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 3500,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                progressBar: true,
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                        timeOut: 3500,
                        positionClass: 'toast-bottom-right',
                        preventDuplicates: true,
                        progressBar: true,
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Services/notification.service */ "B+sD");
/* harmony import */ var _Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/apiservice.service */ "4E90");
/* harmony import */ var _Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/userservice.service */ "pRQr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.userName);
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_10_div_4_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_10_div_5_Template, 8, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isUser());
} }
class HeaderComponent {
    constructor(notificationService, apiService, userService) {
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.userService = userService;
    }
    ngOnInit() { }
    ngDoCheck() {
        this.userName = localStorage.getItem('userName');
    }
    refreshPage() {
        location.replace('');
    }
    checkLogin() {
        if (localStorage.getItem('access_token'))
            return true;
        return false;
    }
    logout() {
        this.apiService.logout().subscribe((response) => {
            console.log(response);
        }, (err) => {
            this.notificationService.showError(err.message, err.name);
        }, () => {
            this.notificationService.showWarning(localStorage.getItem('userId') + ' Logged Out', 'Log Out');
            localStorage.removeItem('access_token');
            localStorage.removeItem('userId');
            localStorage.removeItem('userName');
            this.userName = null;
            location.replace('');
        });
    }
    isUser() {
        return this.userService.isUser();
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { userName: "userName" }, decls: 11, vars: 2, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "fixed-top", "app-header"], [1, "navbar-brand", 3, "click"], ["viewBox", "0 0 88 26", "height", "33.9", "width", "115", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none"], ["d", "M55.433 7.383l-1.444-2.43-2.583 1.213-1.444-2.43L47.38 4.95l-1.445-2.43-2.582 1.215-1.445-2.43-2.582 1.212L37.88.087 35.3 1.3l-5.476 17.591 6.643 2.005a3.516 3.516 0 0 1 3.363-2.45c1.944 0 3.52 1.557 3.52 3.478l-.001.07c.016.315-.021.634-.118.946l6.756 2.042 5.446-17.6", "fill", "#C4242B"], ["d", "M35.52 17.438a.705.705 0 0 1-.591-.705V8.122a.715.715 0 0 1 .724-.717h6.297c.164 0 .329.016.489.043a2.798 2.798 0 0 1 2.336 2.749v6.536a.705.705 0 0 1-.217.51.73.73 0 0 1-.641.195.704.704 0 0 1-.59-.705v-6.536a1.363 1.363 0 0 0-1.377-1.358h-1.372v7.894a.723.723 0 0 1-.86.705.705.705 0 0 1-.59-.705V8.838h-2.75v7.895a.704.704 0 0 1-.216.51.728.728 0 0 1-.642.195M45.99 21.19a.704.704 0 0 1-.592-.706c0-.195.074-.377.209-.51a.73.73 0 0 1 .516-.206c.61 0 1.14-.39 1.315-.97l.748-2.462-2.448-8.083a.722.722 0 0 1 .483-.904.742.742 0 0 1 .896.473l1.82 6.03 1.839-6.026c.091-.34.46-.556.839-.49l.051.011c.392.121.608.528.489.907l-2.52 8.295-.796 2.655c-.206.61-.56 1.106-1.022 1.44-.5.365-1.086.557-1.694.557a.708.708 0 0 1-.133-.012M1.614 15.87h1.428c.788 0 1.43-.633 1.43-1.413v-4.141c0-.687-.498-1.272-1.183-1.391a1.501 1.501 0 0 0-.247-.022l-1.43.001.002 6.965zM.72 17.347a.732.732 0 0 1-.616-.734V3.758c0-.203.077-.391.218-.53a.751.751 0 0 1 .666-.203c.362.062.624.37.624.734v3.656h1.43a2.91 2.91 0 0 1 2.938 2.901l-.001 4.141c0 1.601-1.318 2.902-2.938 2.902H.86a.676.676 0 0 1-.14-.011zM11.096 8.839a1.478 1.478 0 0 0-.246-.02c-.801 0-1.43.62-1.43 1.412v4.313a1.413 1.413 0 0 0 1.43 1.412c.788 0 1.429-.632 1.43-1.412l-.001-4.313c0-.688-.498-1.272-1.183-1.392m-.763 8.564a2.905 2.905 0 0 1-2.42-2.86V10.23c0-.778.304-1.507.858-2.054a2.94 2.94 0 0 1 2.079-.847 2.91 2.91 0 0 1 2.938 2.902l-.001 4.313c0 .775-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847 2.948 2.948 0 0 1-.517-.043M18.902 8.839a1.47 1.47 0 0 0-.245-.02c-.802 0-1.428.62-1.428 1.412v4.313a1.412 1.412 0 0 0 1.428 1.412c.378 0 .733-.146 1.005-.41.273-.268.424-.624.424-1.002V10.23c0-.687-.498-1.27-1.184-1.391m-.762 8.564a2.907 2.907 0 0 1-2.42-2.859v-4.313c0-1.601 1.317-2.903 2.937-2.903.17 0 .34.014.506.043a2.91 2.91 0 0 1 2.431 2.86v4.313c0 .777-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847c-.174 0-.348-.014-.517-.043M24.142 17.434a.733.733 0 0 1-.614-.733V3.758a.735.735 0 0 1 .753-.745.746.746 0 0 1 .754.745v7.66l3.474-3.843a.766.766 0 0 1 .697-.228c.139.024.27.085.379.175.309.28.33.75.052 1.048l-2.615 2.88 2.717 4.902a.705.705 0 0 1 .066.553.732.732 0 0 1-.37.443.755.755 0 0 1-.5.082.749.749 0 0 1-.526-.356l-2.444-4.433-.93 1.013v3.047c0 .202-.08.39-.225.532a.758.758 0 0 1-.668.201M57.41 17.426a2.782 2.782 0 0 1-1.96-1.355.75.75 0 0 1-.068-.569.739.739 0 0 1 .346-.45c.15-.084.33-.114.505-.084a.75.75 0 0 1 .525.358c.199.335.509.546.895.614.42.066.803-.048 1.116-.316.29-.267.442-.648.404-1.016a1.22 1.22 0 0 0-.548-.964l-2.031-1.425a2.708 2.708 0 0 1-1.155-2.013 2.642 2.642 0 0 1 .884-2.152 2.754 2.754 0 0 1 2.24-.694h.001c.856.15 1.555.63 1.95 1.323a.746.746 0 0 1 .07.563.747.747 0 0 1-.348.454.757.757 0 0 1-.504.083.747.747 0 0 1-.526-.357c-.172-.3-.482-.51-.856-.575a1.189 1.189 0 0 0-1.021.296c-.26.238-.403.596-.382.96.019.351.22.694.523.894l2.032 1.404a2.729 2.729 0 0 1 1.177 2.101 2.651 2.651 0 0 1-.906 2.214 2.84 2.84 0 0 1-2.307.714l-.055-.008M63.246 17.447a.75.75 0 0 1-.625-.735V3.77c0-.202.08-.39.226-.533a.762.762 0 0 1 .667-.2.733.733 0 0 1 .615.733v3.655h1.43c.174 0 .348.015.516.045a2.902 2.902 0 0 1 2.42 2.857l.001 6.385a.741.741 0 0 1-.883.734.747.747 0 0 1-.625-.735v-6.384a1.41 1.41 0 0 0-1.43-1.412h-1.429v7.797a.742.742 0 0 1-.754.746.781.781 0 0 1-.13-.01M73.609 8.85a1.429 1.429 0 0 0-1.26.39c-.268.265-.416.62-.416 1v4.316c0 .686.494 1.27 1.173 1.388a1.43 1.43 0 0 0 1.261-.388c.274-.268.424-.622.424-1.001V10.24c0-.687-.497-1.272-1.182-1.391m-.763 8.563a2.903 2.903 0 0 1-2.42-2.857V10.24c-.001-1.6 1.317-2.902 2.937-2.902.169 0 .34.013.506.043a2.91 2.91 0 0 1 2.43 2.859v4.315a2.856 2.856 0 0 1-.867 2.054 2.938 2.938 0 0 1-2.586.803M87.892 8.254a.712.712 0 0 0-.077-.545.781.781 0 0 0-.49-.342.747.747 0 0 0-.864.546 920.42 920.42 0 0 1-1.452 5.726l-.014.056-.013-.056c-.62-2.458-1.447-5.69-1.456-5.724a.706.706 0 0 0-.58-.55.75.75 0 0 0-.85.548c-.01.03-.819 3.268-1.454 5.726l-.014.056-.014-.056c-.618-2.458-1.447-5.695-1.455-5.726a.74.74 0 0 0-.889-.536.73.73 0 0 0-.542.877l2.185 8.632a.754.754 0 0 0 .714.556.708.708 0 0 0 .715-.557c.008-.033.837-3.27 1.456-5.73l.013-.054.016.054c.64 2.483 1.451 5.73 1.452 5.732a.754.754 0 0 0 .715.556.71.71 0 0 0 .714-.559l2.184-8.63", "fill", "#FFF"], [1, "navbar-nav", "ml-auto", "font-size-13px"], ["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "adminpanel", 1, "nav-link", "btn", "btn-default", "text-dark", "p-1", "mr-2"], [1, "text-white"], ["routerLink", "login", 1, "nav-link", "btn", "btn-info", "text-white", "mr-2", "p-1"], [1, "font-size-13px"], ["routerLink", "register", 1, "nav-link", "btn", "btn-warning", "text-dark", "p-1"], ["routerLink", "/movies", 1, "nav-link", "mr-2"], [1, "btn", "btn-danger", "px-1", "font-smaller", "p-1", 3, "click"], ["routerLink", "/movies/add", 1, "nav-link", "mr-2"], ["routerLink", "/adminpanel/users", 1, "nav-link", "mr-2"], ["routerLink", "/allbookings", 1, "nav-link", "mr-2"], ["routerLink", "/mybookings", 1, "nav-link"], [1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.refreshPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BookMyShow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 13, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 9, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkLogin());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: _Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _Services_userservice_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { userName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pRQr":
/*!*************************************************!*\
  !*** ./src/app/Services/userservice.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserService {
    constructor() { }
    roleMatch(allowedRoles) {
        let isMatch = false;
        let token = localStorage.getItem('access_token');
        if (token == null)
            return false;
        let payload = JSON.parse(window.atob(token.split('.')[1]));
        let userRole = payload.role;
        allowedRoles.forEach(element => {
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    }
    isUser() {
        let roles = ['User'];
        return this.roleMatch(roles);
    }
    isAdmin() {
        let roles = ['Admin'];
        return this.roleMatch(roles);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        loadChildren: () => Promise.all(/*! import() | movies-movies-module */[__webpack_require__.e("common"), __webpack_require__.e("movies-movies-module")]).then(__webpack_require__.bind(null, /*! ./movies/movies.module */ "EA54")).then(m => m.MoviesModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("common"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then(m => m.AppFormsModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("common"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then(m => m.AppFormsModule)
    },
    {
        path: 'mybookings',
        loadChildren: () => Promise.all(/*! import() | tickets-tickets-module */[__webpack_require__.e("common"), __webpack_require__.e("tickets-tickets-module")]).then(__webpack_require__.bind(null, /*! ./tickets/tickets.module */ "AkKA")).then(m => m.TicketsModule),
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'allbookings',
        loadChildren: () => Promise.all(/*! import() | tickets-tickets-module */[__webpack_require__.e("common"), __webpack_require__.e("tickets-tickets-module")]).then(__webpack_require__.bind(null, /*! ./tickets/tickets.module */ "AkKA")).then(m => m.TicketsModule),
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        data: {
            permittedRoles: ['Admin']
        }
    },
    {
        path: 'adminpanel',
        loadChildren: () => Promise.all(/*! import() | admin-panel-admin-panel-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-panel-admin-panel-module")]).then(__webpack_require__.bind(null, /*! ./admin-panel/admin-panel.module */ "Dft3")).then(m => m.AdminPanelModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map