(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "ukCm":
/*!**********************************!*\
  !*** ./src/app/Models/models.ts ***!
  \**********************************/
/*! exports provided: Seat, Register, Login, Movie, Theatre, Ticket, UserCredModel, PassChangeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seat", function() { return Seat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theatre", function() { return Theatre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCredModel", function() { return UserCredModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassChangeModel", function() { return PassChangeModel; });
class Seat {
    constructor() {
        this.booked = false;
    }
}
class Register {
    constructor(args) {
        this.email = args.email;
        this.password = args.password;
        this.confirmPassword = args.confirmPassword;
    }
}
class Login {
    constructor(args) {
        this.email = args.email;
        this.password = args.password;
        this.role = args.role;
    }
}
class Movie {
    constructor() {
        this.fromTime = new Date();
        this.toTime = new Date();
    }
}
class Theatre {
}
class Ticket {
}
class UserCredModel {
}
class PassChangeModel {
}


/***/ })

}]);
//# sourceMappingURL=common.js.map