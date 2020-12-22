webpackJsonp([45],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirseriePageModule", function() { return AbrirseriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abrirserie__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbrirseriePageModule = /** @class */ (function () {
    function AbrirseriePageModule() {
    }
    AbrirseriePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__abrirserie__["a" /* AbrirseriePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__abrirserie__["a" /* AbrirseriePage */]),
            ],
        })
    ], AbrirseriePageModule);
    return AbrirseriePageModule;
}());

//# sourceMappingURL=abrirserie.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrirseriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbrirseriePage = /** @class */ (function () {
    function AbrirseriePage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webIntent = webIntent;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.ID = this.navParams.get("id");
    }
    AbrirseriePage.prototype.abrirFilme = function (l) {
        var u = "http://www.tplay.live/lista/";
        var url = u + l + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: url,
            type: 'application/vnd.android.package-archive'
        };
        this.webIntent.startActivity(options).then();
    };
    AbrirseriePage.prototype.abrirFilme2 = function (l) {
        var u = "http://www.tplay.live/lista-series/";
        var url = u + l + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: url,
            type: 'application/org.videolan.vlc'
        };
        this.webIntent.startActivity(options).then();
    };
    AbrirseriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abrirserie',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\abrirserie\abrirserie.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><b  style="color: #fff">Escolha seu player</b></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background-body">\n  <button ion-button (click)="abrirFilme(ID)" full> Reproduzir no MX PLAYER</button>\n  <button ion-button (click)="abrirFilme2(ID)" full> Reproduzir no VLC PLAYER</button>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\abrirserie\abrirserie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], AbrirseriePage);
    return AbrirseriePage;
}());

//# sourceMappingURL=abrirserie.js.map

/***/ })

});
//# sourceMappingURL=45.js.map