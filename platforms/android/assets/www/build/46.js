webpackJsonp([46],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirVideoPageModule", function() { return AbrirVideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abrir_video__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbrirVideoPageModule = /** @class */ (function () {
    function AbrirVideoPageModule() {
    }
    AbrirVideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__abrir_video__["a" /* AbrirVideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__abrir_video__["a" /* AbrirVideoPage */]),
            ],
        })
    ], AbrirVideoPageModule);
    return AbrirVideoPageModule;
}());

//# sourceMappingURL=abrir-video.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrirVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbrirVideoPage = /** @class */ (function () {
    function AbrirVideoPage(navCtrl, navParams, navController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navController = navController;
        this.URL = this.navParams.get("id");
        this.TITULO = this.navParams.get("titulo");
    }
    AbrirVideoPage.prototype.voltar = function () {
        this.navController.pop();
    };
    AbrirVideoPage.prototype.ionViewDidLoad = function () {
        //  document.getElementById("play").click();
    };
    AbrirVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abrir-video',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\abrir-video\abrir-video.html"*/'\n\n<ion-content class="background-body" >\n    <ion-buttons left>\n        <button ion-button icon-only (click)="voltar()" style="background-color: transparent">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <div style="text-align: center">\n\n\n<h2>{{TITULO}}</h2>\n\n\n<button ion-button (click)="abrirPlay()">ABRIR PLAYER</button>\n\n\n</div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\abrir-video\abrir-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AbrirVideoPage);
    return AbrirVideoPage;
}());

//# sourceMappingURL=abrir-video.js.map

/***/ })

});
//# sourceMappingURL=46.js.map