(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js");
var UI_1 = __webpack_require__(/*! ./services/ui/UI */ "./node_modules/emailjs-com/source/services/ui/UI.js");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.3.2',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(form);
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.3.2');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;


/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h1>Contact me</h1>\r\n</header>\r\n<app-section>\r\n  <ng-container article>\r\n    <form [formGroup]=\"contactForm\" class=\"contact-form\" [class.contact-form-submitted]=\"isSubmitted\" (ngSubmit)=\"onSubmit()\">\r\n      <p>\r\n        <input formControlName=\"name\" type=\"text\" placeholder=\"Name\">\r\n      </p>\r\n      <p>\r\n        <input formControlName=\"email\" type=\"email\" placeholder=\"Email\">\r\n      </p>\r\n      <p>\r\n        <select formControlName=\"occupation\">\r\n        <option value=\"\" disabled selected hidden>Your occupation...</option>\r\n        <option *ngFor=\"let occupation of occupations\" [value]=\"occupation\">\r\n          {{occupation}}\r\n        </option>\r\n      </select>\r\n      </p>\r\n      <p>Why do you need me?</p>\r\n      <p>\r\n        <span formArrayName=\"needs\" class=\"checkbox\" *ngFor=\"let need of needs; let i = index\">\r\n        <input [formControlName]=\"i\" id=\"need_{{i}}\" type=\"checkbox\">\r\n        <label for=\"need_{{i}}\">{{need}}</label>\r\n      </span>\r\n      </p>\r\n      <p>\r\n        <textarea formControlName=\"message\" placeholder=\"Type your message...\"></textarea>\r\n      </p>\r\n      <p class=\"right\">\r\n        <input type=\"submit\" value=\"Send\" [disabled]=\"contactForm.invalid || isSubmitted\">\r\n      </p>\r\n      <p class=\"left\" *ngIf=\"!!result\">\r\n        <span class=\"result\" [class.result-fail]=\"isFail\" [innerHTML]=\"result\"></span>\r\n      </p>\r\n    </form>\r\n  </ng-container>\r\n</app-section>\r\n"

/***/ }),

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");




const routes = [
    {
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }
];
let ContactRoutingModule = class ContactRoutingModule {
};
ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactRoutingModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes animation {\n  0% {\n    -webkit-transform: scale(1.5, 1.5);\n  }\n  50% {\n    -webkit-transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n  }\n}\n@keyframes animation {\n  0% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n  50% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n}\n/* Portfolio hover animations */\n/* inRight */\n@-webkit-keyframes in-right {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-right {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inLeft */\n@-webkit-keyframes in-left {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-left {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inTop */\n@-webkit-keyframes in-top {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-top {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inBottom */\n@-webkit-keyframes in-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* outRight */\n@-webkit-keyframes out-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes out-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n/* outLeft */\n@-webkit-keyframes out-left {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes out-left {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n/* outTop */\n@-webkit-keyframes out-top {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes out-top {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n/* outBottom */\n@-webkit-keyframes out-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes out-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n.contact-form:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n.checkbox {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 1em;\n}\n@media (max-width: 600px) {\n  .checkbox {\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n.result {\n  color: #2ca02c;\n}\n.result-fail {\n  color: #bd2031;\n}\n.result-fail a {\n  color: inherit;\n}\n.left {\n  width: 75%;\n}\n.right {\n  width: 25%;\n  text-align: right;\n}\nheader {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXE15a3l0YV9EYXRza29cXFByb2plY3RzXFxuaWtcXG5pa2RhdHNrby5naXRodWIuaW8vc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXE15a3l0YV9EYXRza29cXFByb2plY3RzXFxuaWtcXG5pa2RhdHNrby5naXRodWIuaW8vc3RkaW4iLCJzcmMvYXBwL2NvbnRhY3QvQzpcXFVzZXJzXFxNeWt5dGFfRGF0c2tvXFxQcm9qZWN0c1xcbmlrXFxuaWtkYXRza28uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UEE7RUFDRTtJQUNFLGtDQUFBO0VDdlBGO0VEeVBBO0lBQ0UsOEJBQUE7RUN2UEY7RUR5UEE7SUFDRSxrQ0FBQTtFQ3ZQRjtBQUNGO0FEK1FBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDdlBGO0VEeVBBO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFQ3ZQRjtFRHlQQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUN2UEY7QUFDRjtBRCtQQSwrQkFBQTtBQUVBLFlBQUE7QUFDQTtFQUNFO0lBQ0UsMENBQUE7RUM5UEY7RURnUUE7SUFDRSx1Q0FBQTtFQzlQRjtBQUNGO0FEZ1JBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VDOVBGO0VEZ1FBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFQzlQRjtBQUNGO0FEc1FBLFdBQUE7QUFDQTtFQUNFO0lBQ0UsMkNBQUE7RUNwUUY7RURzUUE7SUFDRSx1Q0FBQTtFQ3BRRjtBQUNGO0FEc1JBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VDcFFGO0VEc1FBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFQ3BRRjtBQUNGO0FENFFBLFVBQUE7QUFDQTtFQUNFO0lBQ0UsMkNBQUE7RUMxUUY7RUQ0UUE7SUFDRSx1Q0FBQTtFQzFRRjtBQUNGO0FENFJBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VDMVFGO0VENFFBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFQzFRRjtBQUNGO0FEa1JBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsMENBQUE7RUNoUkY7RURrUkE7SUFDRSx1Q0FBQTtFQ2hSRjtBQUNGO0FEa1NBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VDaFJGO0VEa1JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFQ2hSRjtBQUNGO0FEd1JBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsdUNBQUE7RUN0UkY7RUR3UkE7SUFDRSwwQ0FBQTtFQ3RSRjtBQUNGO0FEd1NBO0VBQ0U7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VDdFJGO0VEd1JBO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ3RSRjtBQUNGO0FEOFJBLFlBQUE7QUFDQTtFQUNFO0lBQ0UsdUNBQUE7RUM1UkY7RUQ4UkE7SUFDRSwyQ0FBQTtFQzVSRjtBQUNGO0FEOFNBO0VBQ0U7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VDNVJGO0VEOFJBO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFQzVSRjtBQUNGO0FEb1NBLFdBQUE7QUFDQTtFQUNFO0lBQ0UsdUNBQUE7RUNsU0Y7RURvU0E7SUFDRSwyQ0FBQTtFQ2xTRjtBQUNGO0FEb1RBO0VBQ0U7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VDbFNGO0VEb1NBO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFQ2xTRjtBQUNGO0FEMFNBLGNBQUE7QUFDQTtFQUNFO0lBQ0UsdUNBQUE7RUN4U0Y7RUQwU0E7SUFDRSwwQ0FBQTtFQ3hTRjtBQUNGO0FEMFRBO0VBQ0U7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VDeFNGO0VEMFNBO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ3hTRjtBQUNGO0FEbFRFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDb1RKO0FDcFRBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEdVRGO0FDclRFO0VBTEY7SUFNSSxjQUFBO0lBQ0EsbUJBQUE7RUR3VEY7QUFDRjtBQ3RUQTtFQUNFLGNDWE07QUZvVVI7QUN2VEU7RUFDRSxjQ2ZFO0FGd1VOO0FDeFRJO0VBQ0UsY0FBQTtBRDBUTjtBQ3RUQTtFQUNFLFVBQUE7QUR5VEY7QUN2VEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUQwVEY7QUN4VEE7RUFDRSxhQUFBO0FEMlRGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGNhIHtcclxuICAvLyBjbGVhcmFmdGVyXHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB2YSB7XHJcbiAgLy8gdmVydGljYWwgYWxpZ25tZW50XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICYgPiAqIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gY2wge1xyXG4gIC8vIGNsZWFuIGxpc3RzXHJcbiAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMDtcclxuICAmID4gKiB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIG5vc2VsZWN0IHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuQG1peGluIG5vdHJhbnNmb3JtIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tb3otdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1zLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1vLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4gbm90cmFuc2l0aW9uIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRkdXJhdGlvbjogMC4ycywgJGRlbGF5OiAwcywgJHRyYW5zaXRpb246IGFsbCwgJGVhc2luZzogZWFzZS1pbi1vdXQpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkZGVsYXkgJGVhc2luZztcclxuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkZGVsYXkgJGVhc2luZztcclxuICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRkZWxheSAkZWFzaW5nO1xyXG4gIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkZGVsYXkgJGVhc2luZztcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGRlbGF5ICRlYXNpbmc7XHJcbn1cclxuQG1peGluIGJveC1zaXppbmcoJGJveDogYm9yZGVyLWJveCkge1xyXG4gIC1tb3otYm94LXNpemluZzogJGJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6ICRib3g7XHJcbiAgYm94LXNpemluZzogJGJveDtcclxufVxyXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAkaW5zZXQ6IGluc2V0IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpIHtcclxuICAtbW96LWJveC1zaGFkb3c6ICRzaGFkb3csICRpbnNldDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3csICRpbnNldDtcclxuICBib3gtc2hhZG93OiAkc2hhZG93LCAkaW5zZXQ7XHJcbn1cclxuQG1peGluIGdyYWRpZW50LWgoJGxlZnQ6ICMwMDAwZmYsICRyaWdodDogI2ZmZmYwMCwgJHNoaWZ0TGVmdDogMCUsICRzaGlmdFJpZ2h0OiAxMDAlKSB7XHJcbiAgYmFja2dyb3VuZDogJGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJGxlZnQgJHNoaWZ0TGVmdCwgJHJpZ2h0ICRzaGlmdFJpZ2h0KTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgbGluZWFyLFxyXG4gICAgbGVmdCB0b3AsXHJcbiAgICByaWdodCB0b3AsXHJcbiAgICBjb2xvci1zdG9wKCRzaGlmdExlZnQsICRsZWZ0KSxcclxuICAgIGNvbG9yLXN0b3AoJHNoaWZ0UmlnaHQsICRyaWdodClcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgbGVmdCxcclxuICAgICRsZWZ0ICRzaGlmdExlZnQsXHJcbiAgICAkcmlnaHQgJHNoaWZ0UmlnaHRcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkbGVmdCAkc2hpZnRMZWZ0LCAkcmlnaHQgJHNoaWZ0UmlnaHQpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJGxlZnQgJHNoaWZ0TGVmdCwgJHJpZ2h0ICRzaGlmdFJpZ2h0KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0ICRzaGlmdExlZnQsICRyaWdodCAkc2hpZnRSaWdodCk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXHJcbiAgICAgIHN0YXJ0Q29sb3JzdHI9JGxlZnQsXHJcbiAgICAgIGVuZENvbG9yc3RyPSRyaWdodCxcclxuICAgICAgR3JhZGllbnRUeXBlPTFcclxuICAgICk7XHJcbn1cclxuQG1peGluIGdyYWRpZW50LXYoJHRvcDogIzAwMDBmZiwgJGJvdHRvbTogI2ZmZmYwMCwgJHNoaWZ0VG9wOiAwJSwgJHNoaWZ0Qm90dG9tOiAxMDAlKSB7XHJcbiAgYmFja2dyb3VuZDogJHRvcDtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgJHNoaWZ0VG9wLCAkYm90dG9tICRzaGlmdEJvdHRvbSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcclxuICAgIGxpbmVhcixcclxuICAgIGxlZnQgdG9wLFxyXG4gICAgbGVmdCBib3R0b20sXHJcbiAgICBjb2xvci1zdG9wKCRzaGlmdFRvcCwgJHRvcCksXHJcbiAgICBjb2xvci1zdG9wKCRzaGlmdEJvdHRvbSwgJGJvdHRvbSlcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG9wLFxyXG4gICAgJHRvcCAkc2hpZnRUb3AsXHJcbiAgICAkYm90dG9tICRzaGlmdEJvdHRvbVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAkc2hpZnRUb3AsICRib3R0b20gJHNoaWZ0Qm90dG9tKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHRvcCAkc2hpZnRUb3AsICRib3R0b20gJHNoaWZ0Qm90dG9tKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkdG9wICRzaGlmdFRvcCwgJGJvdHRvbSAkc2hpZnRCb3R0b20pO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFxyXG4gICAgICBzdGFydENvbG9yc3RyPSR0b3AsXHJcbiAgICAgIGVuZENvbG9yc3RyPSRib3R0b20sXHJcbiAgICAgIEdyYWRpZW50VHlwZT0wXHJcbiAgICApO1xyXG59XHJcbkBtaXhpbiBncmFkaWVudC1yKCRpbm5lcjogIzAwMDBmZiwgJG91dGVyOiAjZmZmZjAwLCAkc2hpZnRJbm5lcjogMCUsICRzaGlmdE91dGVyOiAxMDAlKSB7XHJcbiAgYmFja2dyb3VuZDogJGlubmVyO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgY2VudGVyLFxyXG4gICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICRpbm5lciAkc2hpZnRJbm5lcixcclxuICAgICRvdXRlciAkc2hpZnRPdXRlclxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcclxuICAgIHJhZGlhbCxcclxuICAgIGNlbnRlciBjZW50ZXIsXHJcbiAgICAwcHgsXHJcbiAgICBjZW50ZXIgY2VudGVyLFxyXG4gICAgJHNoaWZ0T3V0ZXIsXHJcbiAgICBjb2xvci1zdG9wKCRzaGlmdElubmVyLCAkaW5uZXIpLFxyXG4gICAgY29sb3Itc3RvcCgkc2hpZnRPdXRlciwgJG91dGVyKVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXHJcbiAgICBjZW50ZXIsXHJcbiAgICBlbGxpcHNlIGNvdmVyLFxyXG4gICAgJGlubmVyICRzaGlmdElubmVyLFxyXG4gICAgJG91dGVyICRzaGlmdE91dGVyXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoXHJcbiAgICBjZW50ZXIsXHJcbiAgICBlbGxpcHNlIGNvdmVyLFxyXG4gICAgJGlubmVyICRzaGlmdElubmVyLFxyXG4gICAgJG91dGVyICRzaGlmdE91dGVyXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgY2VudGVyLFxyXG4gICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICRpbm5lciAkc2hpZnRJbm5lcixcclxuICAgICRvdXRlciAkc2hpZnRPdXRlclxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXHJcbiAgICAkaW5uZXIgJHNoaWZ0SW5uZXIsXHJcbiAgICAkb3V0ZXIgJHNoaWZ0T3V0ZXJcclxuICApO1xyXG59XHJcbkBtaXhpbiBncmFkaWVudC1hKCRjb2xvcjE6ICMwMDAwZmYsICRjb2xvcjI6ICNmZmZmMDAsICRhbmdsZTogNDUsICRzaGlmdDE6IDAlLCAkc2hpZnQyOiAxMDAlKSB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDBmZjtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgoJGFuZ2xlKzApZGVnLCAkY29sb3IxIDAlLCAkY29sb3IyIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICBsaW5lYXIsXHJcbiAgICBsZWZ0IHRvcCxcclxuICAgIHJpZ2h0IGJvdHRvbSxcclxuICAgIGNvbG9yLXN0b3AoMCUsICRjb2xvcjEpLFxyXG4gICAgY29sb3Itc3RvcCgxMDAlLCAkY29sb3IyKVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoKCRhbmdsZSswKWRlZywgJGNvbG9yMSAwJSwgJGNvbG9yMiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoKCRhbmdsZSswKWRlZywgJGNvbG9yMSAwJSwgJGNvbG9yMiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCgkYW5nbGUrMClkZWcsICRjb2xvcjEgMCUsICRjb2xvcjIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCgkYW5nbGUrMClkZWcsICRjb2xvcjEgMCUsICRjb2xvcjIgMTAwJSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXHJcbiAgICAgIHN0YXJ0Q29sb3JzdHI9JGNvbG9yMSxcclxuICAgICAgZW5kQ29sb3JzdHI9JGNvbG9yMixcclxuICAgICAgR3JhZGllbnRUeXBlPTFcclxuICAgICk7XHJcbn1cclxuQG1peGluIHJvdGF0ZSgkYW5nbGU6IDQ1ZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSk7XHJcbn1cclxuQG1peGluIHRyYW5zbGF0ZSgkeDogMCwgJHk6IDAgKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XHJcbn1cclxuQG1peGluIHRyYW5zbGF0ZTNkKCR4OiAwLCAkeTogMCwgJHo6IDAgKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbn1cclxuQG1peGluIHNjYWxlWFkoJHNjYWxlWDogMS41LCAkc2NhbGVZOiAxLjUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxufVxyXG5AbWl4aW4gc2NhbGUoJHNjYWxlOiAxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUpO1xyXG59XHJcbkBtaXhpbiByb3RhdGUoJGRlZzogMzBkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoJGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWcpO1xyXG59XHJcbkBtaXhpbiByb3RhdGVzY2FsZSgkc2NhbGVYOiAxLCAkc2NhbGVZOiAxLCAkYW5nbGU6IC00NWRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSkgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSkgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG59XHJcbkBtaXhpbiB0cmFuc2xhdGVzY2FsZSgkeDogMCwgJHk6IDAsICR6OiAwLCAkc2NhbGVYOiAxLCAkc2NhbGVZOiAxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeikgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbn1cclxuQG1peGluIHJvbGwoJHBlcnNwZWN0aXZlOiA5MDBweCwgJHJvdGF0ZVk6IDkwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgcm90YXRlWSgkcm90YXRlWSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgcm90YXRlWSgkcm90YXRlWSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSByb3RhdGVZKCRyb3RhdGVZKTtcclxuICAtby10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgcm90YXRlWSgkcm90YXRlWSk7XHJcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHJvdGF0ZVkoJHJvdGF0ZVkpO1xyXG59XHJcbiRzY2FsZTogMS41O1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlLCAkc2NhbGUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBhbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSwgJHNjYWxlKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBhbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSwgJHNjYWxlKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoJHNjYWxlLCAkc2NhbGUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSwgJHNjYWxlKTtcclxuICB9XHJcbn1cclxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0aW9uOiBhbmltYXRpb24sICRkdXJhdGlvbjogMzBzKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi8qIFBvcnRmb2xpbyBob3ZlciBhbmltYXRpb25zICovXHJcbiRzcGVlZDogMC4zcztcclxuLyogaW5SaWdodCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBpbi1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBpbi1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBpbi1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gaW5SaWdodCgkYW5pbWF0aW9uOiBpbi1yaWdodCwgJGR1cmF0aW9uOiAkc3BlZWQpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG59XHJcbi8qIGluTGVmdCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBpbi1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBpbi1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBpbi1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gaW5MZWZ0KCRhbmltYXRpb246IGluLWxlZnQsICRkdXJhdGlvbjogJHNwZWVkKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxufVxyXG4vKiBpblRvcCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgaW4tdG9wIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBpbi10b3Age1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBpblRvcCgkYW5pbWF0aW9uOiBpbi10b3AsICRkdXJhdGlvbjogJHNwZWVkKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxufVxyXG4vKiBpbkJvdHRvbSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgaW4tYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIGluLWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBpbi1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIGluQm90dG9tKCRhbmltYXRpb246IGluLWJvdHRvbSwgJGR1cmF0aW9uOiAkc3BlZWQpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG59XHJcbi8qIG91dFJpZ2h0ICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBvdXQtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgb3V0LXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG91dC1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gb3V0UmlnaHQoJGFuaW1hdGlvbjogb3V0LXJpZ2h0LCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuLyogb3V0TGVmdCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgb3V0LWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG91dC1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBvdXQtbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIG91dExlZnQoJGFuaW1hdGlvbjogb3V0LWxlZnQsICRkdXJhdGlvbjogJHNwZWVkKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxufVxyXG4vKiBvdXRUb3AgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIG91dC10b3Age1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgb3V0LXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgb3V0LXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgb3V0LXRvcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIG91dFRvcCgkYW5pbWF0aW9uOiBvdXQtdG9wLCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuLyogb3V0Qm90dG9tICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBvdXQtYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG91dC1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIG91dEJvdHRvbSgkYW5pbWF0aW9uOiBvdXQtYm90dG9tLCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuIiwiQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBhbmltYXRpb24ge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgfVxuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgfVxufVxuLyogUG9ydGZvbGlvIGhvdmVyIGFuaW1hdGlvbnMgKi9cbi8qIGluUmlnaHQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBpbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW4tcmlnaHQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBpbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogaW5MZWZ0ICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGluLWxlZnQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpbi1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi8qIGluVG9wICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW4tdG9wIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGluLXRvcCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpbi10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogaW5Cb3R0b20gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBpbi1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi8qIG91dFJpZ2h0ICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBvdXQtcmlnaHQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBvdXQtcmlnaHQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBvdXQtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG59XG4vKiBvdXRMZWZ0ICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LWxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBvdXQtbGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBvdXQtbGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBvdXQtbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG4vKiBvdXRUb3AgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgb3V0LXRvcCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBvdXQtdG9wIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG91dC10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxufVxuLyogb3V0Qm90dG9tICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG91dC1ib3R0b20ge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBvdXQtYm90dG9tIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLnJlc3VsdCB7XG4gIGNvbG9yOiAjMmNhMDJjO1xufVxuLnJlc3VsdC1mYWlsIHtcbiAgY29sb3I6ICNiZDIwMzE7XG59XG4ucmVzdWx0LWZhaWwgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubGVmdCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5yaWdodCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufSIsIkBpbXBvcnQgJ35zcmMvYXNzZXRzL3N0eWxlcy9taXhpbnMnO1xyXG5AaW1wb3J0ICd+c3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgQGluY2x1ZGUgY2EoKTtcclxufVxyXG4uY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuLnJlc3VsdCB7XHJcbiAgY29sb3I6ICRncmVlbjtcclxuXHJcbiAgJi1mYWlsIHtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubGVmdCB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4ucmlnaHQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYmx1ZTogIzAwNjI5NTtcclxuJGxpZ2h0Ymx1ZTogIzliZTFmYjtcclxuJGxpZ2h0ZXJibHVlOiAjYzVlZmZkO1xyXG4kcmVkOiAjYmQyMDMxO1xyXG4kZ3JlZW46ICMyY2EwMmM7XHJcbiRibGFjazogIzIzMWYyMDtcclxuJGdyYXktYmc6ICNmMmYyZTk7XHJcbiRncmF5LWJvcmRlcjogI2U4ZThjNjtcclxuJGdyYXktc2hhZG93OiAjZGFkOWJhO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");






let ContactComponent = class ContactComponent {
    constructor(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.occupations = [
            'Business owner',
            'HR manager',
            'Developer',
            'Friend'
        ];
        this.needs = ['Permanent job', 'Project', 'Consultation'];
        this.result = null;
        this.unsubscribeStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.setForm();
        this.contactService
            .getResult()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeStream))
            .subscribe(({ isFail, message }) => {
            this.isSubmitted = false;
            this.isFail = isFail;
            this.result = message;
            if (!isFail) {
                this.contactForm.reset();
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribeStream.next();
    }
    onSubmit() {
        if (this.contactForm.invalid) {
            return;
        }
        this.isSubmitted = true;
        this.result = null;
        const needs = this.contactForm.value.needs
            .map((x, i) => x && this.needs[i])
            .filter(x => !!x)
            .join(', ');
        const contactFormValue = Object.assign({}, this.contactForm.value, { needs: needs || 'unspecified reason' });
        this.contactService.submitContactForm(contactFormValue);
    }
    setForm() {
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            needs: this.fb.array(this.needs.map(x => !1)),
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







let ContactModule = class ContactModule {
};
ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]
    })
], ContactModule);



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);




let ContactService = class ContactService {
    constructor() {
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getResult() {
        return this.result;
    }
    submitContactForm(contactFormValue) {
        emailjs_com__WEBPACK_IMPORTED_MODULE_3__["send"]('gmail', 'nikdatsko_contact_form', contactFormValue, 'user_epLRYw7lhfXeRFIyhhy04')
            .then(() => {
            this.result.next({
                isFail: false,
                message: 'Your message has been sent successfully!'
            });
        })
            .catch(error => {
            console.log(error);
            let message;
            if (error.status) {
                if (error.status === 405) {
                    message = `It's impossible to send messages from here so if you really want to use this form do it from
            <a href="http://nik.niklenburg.com/contact" target="_blank">nik.niklenburg.com</a>`;
                }
                else if (error.status === -1) {
                    message =
                        'Message sending has failed. Please, check you Internet connection or try later.';
                }
                else {
                    message = error.status + '. ' + error.message;
                }
            }
            else {
                message = error;
            }
            this.result.next({
                isFail: true,
                message
            });
        });
    }
};
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map