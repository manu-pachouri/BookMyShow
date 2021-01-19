(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tickets-tickets-module"],{

/***/ "AkKA":
/*!*******************************************!*\
  !*** ./src/app/tickets/tickets.module.ts ***!
  \*******************************************/
/*! exports provided: TicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModule", function() { return TicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-routing.module */ "hYTt");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets/tickets.component */ "Bxg5");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-print */ "m1XX");






class TicketsModule {
}
TicketsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketsModule });
TicketsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketsModule_Factory(t) { return new (t || TicketsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_4__["NgxPrintModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketsModule, { declarations: [_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
        ngx_print__WEBPACK_IMPORTED_MODULE_4__["NgxPrintModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
                    ngx_print__WEBPACK_IMPORTED_MODULE_4__["NgxPrintModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Bxg5":
/*!******************************************************!*\
  !*** ./src/app/tickets/tickets/tickets.component.ts ***!
  \******************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _Models_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Models/models */ "ukCm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/apiservice.service */ "4E90");
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/notification.service */ "B+sD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_userservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Services/userservice.service */ "pRQr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ "m1XX");









function TicketsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "THERE ARE NO BOOKINGS.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TicketsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "YOU HAVE NO BOOKINGS.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TicketsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const t_r3 = ctx.$implicit; const index_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.cancelTicket(t_r3.ticketId, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Print Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", t_r3.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", t_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("TicketId: ", t_r3.ticketId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Movie Title: ", t_r3.movieTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Seat Booked: ", t_r3.seatId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Theater Name: ", t_r3.theaterName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("printSectionId", t_r3.imageUrl);
} }
class TicketsComponent {
    constructor(apiService, notService, router, UserService) {
        this.apiService = apiService;
        this.notService = notService;
        this.router = router;
        this.UserService = UserService;
        this.tickets = [];
    }
    ngOnInit() {
        if (this.router.url.indexOf('allbookings') > -1) {
            this.GetAllTickets();
        }
        else
            this.GetUserTickets();
    }
    cancelTicket(ticketId, index) {
        this.apiService.cancelTicket(ticketId).subscribe(response => { }, error => { this.notService.showError("Error during Cancellation", "Error"); }, () => {
            this.notService.showInfo("Your ticket has been cancelled!", "Success");
            this.tickets.splice(index, 1);
        });
    }
    GetUserTickets() {
        this.apiService.GetTickets().subscribe(response => {
            this.tickets = [];
            console.log(response);
            for (let key in response) {
                let tic = new _Models_models__WEBPACK_IMPORTED_MODULE_0__["Ticket"]();
                tic.ticketId = response[key].id;
                tic.imageUrl = response[key].imageUrl;
                tic.seatId = response[key].seatId;
                tic.movieTitle = response[key].movieTitle;
                tic.theaterName = response[key].theaterName;
                this.tickets.push(tic);
            }
        }, error => {
            this.notService.showError("Error during tickets retreival", "Error");
        });
    }
    GetAllTickets() {
        this.apiService.GetAllTickets()
            .subscribe(response => {
            console.log(response);
            this.tickets = [];
            console.log(response);
            for (let key in response) {
                let tic = new _Models_models__WEBPACK_IMPORTED_MODULE_0__["Ticket"]();
                tic.ticketId = response[key].id;
                tic.imageUrl = response[key].imageUrl;
                tic.seatId = response[key].seatId;
                tic.movieTitle = response[key].movieTitle;
                tic.theaterName = response[key].theaterName;
                this.tickets.push(tic);
            }
        }, error => {
            this.notService.showError("Error during tickets retreival", "Error");
        });
    }
    isUser() {
        return this.UserService.isUser();
    }
    isAdmin() {
        return this.UserService.isAdmin();
    }
}
TicketsComponent.ɵfac = function TicketsComponent_Factory(t) { return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
TicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TicketsComponent, selectors: [["app-tickets"]], decls: 4, vars: 3, consts: [["class", "display-4 ml-4 text-white mt-4", 4, "ngIf"], [1, "pt-2", "px-4", "d-flex", "flex-col", "m-0", "flex-wrap", "text-white", "mt-4"], ["class", "media py-4 col-sm-6", 3, "id", 4, "ngFor", "ngForOf"], [1, "display-4", "ml-4", "text-white", "mt-4"], [1, "media", "py-4", "col-sm-6", 3, "id"], [1, "align-self-center", "img-thumbnail", "img-fluid", "mr-3", 2, "width", "30%", 3, "src"], [1, "media-body"], [1, "btn", "btn-info", "mt-3", "p-1", 3, "click"], ["ngxPrint", "", 1, "btn", "btn-primary", "p-1", "ml-2", "mt-3", 3, "printSectionId"]], template: function TicketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TicketsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TicketsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TicketsComponent_div_3_Template, 15, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tickets.length == 0 && ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tickets.length == 0 && ctx.isUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tickets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_print__WEBPACK_IMPORTED_MODULE_7__["NgxPrintDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tickets',
                templateUrl: './tickets.component.html',
                styles: []
            }]
    }], function () { return [{ type: _Services_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _Services_userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "hYTt":
/*!***************************************************!*\
  !*** ./src/app/tickets/tickets-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TicketsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsRoutingModule", function() { return TicketsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets/tickets.component */ "Bxg5");





const routes = [{
        path: '',
        component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_2__["TicketsComponent"]
    }];
class TicketsRoutingModule {
}
TicketsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketsRoutingModule });
TicketsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketsRoutingModule_Factory(t) { return new (t || TicketsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "m1XX":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js ***!
  \*******************************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NgxPrintDirective {
    constructor() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        function (cssFileName) {
            return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
        });
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    getHtmlContents() {
        /** @type {?} */
        let printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        let innards = printContents.getElementsByTagName('input');
        for (var i = 0; i < innards.length; i++) {
            innards[i].defaultValue = innards[i].value;
        }
        return printContents.innerHTML;
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(function() {
                window.print();
                setTimeout(function() { window.close(); }, 0);
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
NgxPrintDirective.ɵfac = function NgxPrintDirective_Factory(t) { return new (t || NgxPrintDirective)(); };
NgxPrintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxPrintDirective, selectors: [["button", "ngxPrint", ""]], hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPrintDirective_click_HostBindingHandler() { return ctx.print(); });
    } }, inputs: { useExistingCss: "useExistingCss", printDelay: "printDelay", printStyle: "printStyle", styleSheetFile: "styleSheetFile", printSectionId: "printSectionId", printTitle: "printTitle" } });
NgxPrintDirective.propDecorators = {
    printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "button[ngxPrint]"
            }]
    }], function () { return []; }, { useExistingCss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleSheetFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], printSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintModule {
}
NgxPrintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPrintModule });
NgxPrintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxPrintModule_Factory(t) { return new (t || NgxPrintModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPrintModule, { declarations: [NgxPrintDirective], exports: [NgxPrintDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxPrintDirective],
                imports: [],
                exports: [NgxPrintDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ })

}]);
//# sourceMappingURL=tickets-tickets-module.js.map