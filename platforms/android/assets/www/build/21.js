webpackJsonp([21],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playerhtml5PageModule", function() { return Playerhtml5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerhtml5__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Playerhtml5PageModule = /** @class */ (function () {
    function Playerhtml5PageModule() {
    }
    Playerhtml5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playerhtml5__["a" /* Playerhtml5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playerhtml5__["a" /* Playerhtml5Page */]),
            ],
        })
    ], Playerhtml5PageModule);
    return Playerhtml5PageModule;
}());

//# sourceMappingURL=playerhtml5.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playerhtml5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Playerhtml5Page = /** @class */ (function () {
    function Playerhtml5Page(navCtrl, navParams, navController, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navController = navController;
        this.sanitizer = sanitizer;
        this.URL = this.navParams.get("id");
        this.MODO = this.navParams.get("modo");
        this.MODO2 = this.navParams.get("modo2");
        this.LOGADO = localStorage.getItem('LOGADO');
        if (this.MODO === "1") {
            var u = "http://www.tplay.live/lista-series/";
            var url = u + this.URL + "." + this.MODO2 + "." + this.LOGADO + ".mp4";
            this.URL1 = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            var u = "http://www.tplay.live/lista/";
            var url = u + this.URL + "." + this.MODO2 + "." + this.LOGADO + ".mp4";
            this.URL1 = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
    Playerhtml5Page.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    Playerhtml5Page.prototype.voltar = function () {
        this.navController.pop();
    };
    Playerhtml5Page.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    Playerhtml5Page.prototype.aumentar = function (event) {
        if (event.key === "Enter") {
            this.telacheia();
        }
    };
    Playerhtml5Page.prototype.telacheia = function () {
        var vid = document.getElementById("myvideo");
        vid.requestFullscreen();
    };
    Playerhtml5Page.prototype.ionViewDidLoad = function () {
    };
    Playerhtml5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playerhtml5',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\playerhtml5\playerhtml5.html"*/'<ion-content  class="fundo-body" center>\n  <ion-buttons left>\n    <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" class="voltar" style="background-color: transparent">\n        <ion-icon name="arrow-back"></ion-icon> voltar &nbsp;&nbsp;\n    </button>\n  </ion-buttons>\n\n\n  <div id="player-container"></div>\n\n  <video class="afterglow" #myvideo id="myvideo" width="100%" height="500px"  controlsList="nodownload" controls poster="assets/imgs/maxresdefault.jpg" autoplay>\n    <source type="video/mp4" [src]="URL1" />\n  </video>\n\n  <div class="row" >\n    <div class="col" text-center>\n <!-- <button onclick="tocar()" ion-button center   class="botao-play"><ion-icon name="play" style="font-size: 30px"> </ion-icon>&nbsp;&nbsp; Play</button>\n  <button  onclick="parar()"  ion-button class="botao-play"><ion-icon name="pause" style="font-size: 30px"></ion-icon>&nbsp;&nbsp; Pause</button>\n-->  <button  (click)="telacheia()" (keyup)="aumentar($event)" ion-button   class="botao-play"><ion-icon name="md-contract" style="font-size: 30px"></ion-icon>&nbsp;&nbsp; Tela Cheia</button>\n</div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\playerhtml5\playerhtml5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], Playerhtml5Page);
    return Playerhtml5Page;
}());

//# sourceMappingURL=playerhtml5.js.map

/***/ })

});
//# sourceMappingURL=21.js.map