webpackJsonp([18],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesTempPageModule", function() { return SeriesTempPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series_temp__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeriesTempPageModule = /** @class */ (function () {
    function SeriesTempPageModule() {
    }
    SeriesTempPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__series_temp__["a" /* SeriesTempPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__series_temp__["a" /* SeriesTempPage */]),
            ],
        })
    ], SeriesTempPageModule);
    return SeriesTempPageModule;
}());

//# sourceMappingURL=series-temp.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesTempPage; });
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




var SeriesTempPage = /** @class */ (function () {
    function SeriesTempPage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl, navController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webIntent = webIntent;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.TITULO = this.navParams.get("titulo");
        this.SERIE = this.navParams.get("serie");
        this.CAPA = this.navParams.get("capa");
    }
    SeriesTempPage.prototype.voltar = function () {
        this.navController.pop();
    };
    SeriesTempPage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    SeriesTempPage.prototype.onKey = function (event, l, t, text, lk, e) {
        if (event.key === "Enter") {
            this.abrir(l, t, text, lk, e);
        }
    };
    SeriesTempPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando episodios..."
        });
        this.loader.present();
    };
    SeriesTempPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    SeriesTempPage.prototype.abrir = function (l, t, text, lk, e) {
        this.navCtrl.push('VerepPage', { id: l, titulo: t, texto: text, link: lk, ep: e, serie: this.SERIE });
    };
    SeriesTempPage.prototype.abrirFilme2 = function (l) {
        var u = "http://www.tplay.live/lista-series/";
        var url = u + l + ".mp4";
        console.log(l);
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: url,
            type: 'application/com.bubblesoft.android.bubbleupnp'
        };
        this.webIntent.startActivity(options).then();
    };
    SeriesTempPage.prototype.verEp = function (n) {
        this.navCtrl.push('VerepPage', { id: n });
    };
    SeriesTempPage.prototype.carregarFeed = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.SerieEp(id).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    SeriesTempPage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    SeriesTempPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-series-temp',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\series-temp\series-temp.html"*/'\n\n  <ion-content padding class="background-body">\n      <ion-buttons left>\n          <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" style="background-color: transparent">\n              <ion-icon name="arrow-back"></ion-icon>\n              <!--<b  style="color: #fff">TEMPORADA {{TITULO}} - {{SERIE}}</b>-->\n          </button>\n        </ion-buttons>\n\n\n      <button ion-button class="caixa-capa esconder-capa-ep" *ngFor="let l of lista" (keyup)="onKey($event,l.ID_VD,l.TITULO,l.SINOPSE,l.LINK,l.EP)" (click)="abrir(l.ID_VD,l.TITULO,l.SINOPSE,l.LINK,l.EP)" style=" width: 300px; height: auto;  ">\n\n\n        <ion-card style="background-color: transparent; box-shadow: none; padding: 0px" class="">\n            <img [src]="CAPA"/>\n            <ion-card-content>\n              <ion-card-title style="white-space: normal !important; color: #fff; height: 100px">\n                  EP {{l.EP}} - {{l.TITULO}}\n                </ion-card-title>\n\n            </ion-card-content>\n          </ion-card>\n</button>\n<br>\n          <ion-list style="background-color: transparent;" class="esconder-capa-ep2" *ngFor="let l of lista" (keyup)="onKey($event,l.ID_VD,l.TITULO,l.SINOPSE,l.LINK,l.EP)" (click)="abrir(l.ID_VD,l.TITULO,l.SINOPSE,l.LINK,l.EP)">\n            <ion-item style="background-color: transparent; color: #fff !important; border: 1px solid rgba(0,0,0,0.3)"> \n              <ion-thumbnail item-start>\n                <img [src]="CAPA">\n              </ion-thumbnail>\n              <h2>EP {{l.EP}}</h2>\n              <p style="color: #fff !important">{{l.TITULO}}</p>\n              <button ion-button clear item-end style="color: #fff !important">Ver</button>\n            </ion-item>\n          </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\series-temp\series-temp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SeriesTempPage);
    return SeriesTempPage;
}());

//# sourceMappingURL=series-temp.js.map

/***/ })

});
//# sourceMappingURL=18.js.map