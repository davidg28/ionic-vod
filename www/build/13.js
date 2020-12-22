webpackJsonp([13],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhebrevesPageModule", function() { return DetalhebrevesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhebreves__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhebrevesPageModule = /** @class */ (function () {
    function DetalhebrevesPageModule() {
    }
    DetalhebrevesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhebreves__["a" /* DetalhebrevesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhebreves__["a" /* DetalhebrevesPage */]),
            ],
        })
    ], DetalhebrevesPageModule);
    return DetalhebrevesPageModule;
}());

//# sourceMappingURL=detalhebreves.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailerPage; });
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




var TrailerPage = /** @class */ (function () {
    function TrailerPage(navCtrl, navParams, sanitizer, navController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.navController = navController;
        this.URL = this.navParams.get("id");
    }
    TrailerPage.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    TrailerPage.prototype.voltar = function () {
        this.navController.pop();
    };
    TrailerPage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    TrailerPage.prototype.ionViewDidLoad = function () {
        this.URL1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.URL + "?&autoplay=1");
    };
    TrailerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trailer',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\trailer\trailer.html"*/'\n\n\n<ion-content class="background-body2">\n    <ion-buttons left>\n        <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" class="voltar" style="background-color: transparent">\n            <ion-icon name="arrow-back"></ion-icon> voltar &nbsp;&nbsp;\n        </button>\n      </ion-buttons>\n\n  <iframe width="100%" height="100%" [src]="URL1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\trailer\trailer.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'noSanitize' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TrailerPage);
    return TrailerPage;
}());

//# sourceMappingURL=trailer.js.map

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

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhebrevesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trailer_trailer__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__series_temp_series_temp__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetalhebrevesPage = /** @class */ (function () {
    function DetalhebrevesPage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl, navController, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webIntent = webIntent;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.sanitizer = sanitizer;
        this.USER = localStorage.getItem('USUARIO');
        this.verificarstatus();
    }
    DetalhebrevesPage.prototype.verificarstatus = function () {
        var _this = this;
        var LGD = localStorage.getItem('LOGADO');
        var USR = localStorage.getItem('USUARIO');
        var DTBS;
        this.ApiProvider.verStatus(USR).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            DTBS = objeto_retorno.DADOS;
            if (DTBS.STATUS == "1") {
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DetalhebrevesPage.prototype.voltar = function () {
        this.navController.pop();
    };
    //ENTER COM CONTROLE
    DetalhebrevesPage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    DetalhebrevesPage.prototype.rmfavorito = function (event) {
        if (event.key === "Enter") {
            this.RFavoritos();
        }
    };
    DetalhebrevesPage.prototype.Adfavorito = function (event) {
        if (event.key === "Enter") {
            this.addFavoritos();
        }
    };
    //ABRIR
    DetalhebrevesPage.prototype.onKey = function (event, n, t) {
        if (event.key === "Enter") {
            this.varTemporada(n, t);
        }
    };
    //funções
    DetalhebrevesPage.prototype.addFavoritos = function () {
        var _this = this;
        this.verificarstatus();
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.addLembrete(this.USER, id, "1").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Pronto!", "Série adicionada aos lembretes com sucesso.", "success");
                _this.buttonDisabled = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    DetalhebrevesPage.prototype.varTrailer = function (n) {
        this.verificarstatus();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trailer_trailer__["a" /* TrailerPage */], { id: n });
    };
    DetalhebrevesPage.prototype.RFavoritos = function () {
        var _this = this;
        this.verificarstatus();
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.RemoverLembrete(this.USER, id, "1").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Pronto!", "Série removida dos lembretes com sucesso.", "success");
                _this.buttonDisabled2 = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    DetalhebrevesPage.prototype.onKeyTrailer = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varTrailer(nextElement);
        }
    };
    DetalhebrevesPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando detalhes..."
        });
        this.loader.present();
    };
    DetalhebrevesPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    DetalhebrevesPage.prototype.abrirFilme = function (l) {
        var u = "http://www.tplay.live/lista/";
        var url = u + l + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: l,
            type: 'application/vnd.android.package-archive'
        };
        this.webIntent.startActivity(options).then();
    };
    DetalhebrevesPage.prototype.varTemporada = function (n, t) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__series_temp_series_temp__["a" /* SeriesTempPage */], { id: n, titulo: t, serie: this.TITULO, capa: this.CAPA });
    };
    DetalhebrevesPage.prototype.carregarFeed = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.embreveDetalheSerie(id).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            console.log(_this.lista);
            _this.listaTemp = objeto_retorno.DADOS2;
            _this.RELACIONADOS = objeto_retorno.RELACIONADOS;
            _this.CAPA = _this.lista.CAPA;
            _this.CAPA2 = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.lista.CAPA);
            _this.LINK = _this.lista.LINK;
            _this.TITULO = _this.lista.TITULO;
            _this.SINOPSE = _this.lista.SINOPSE;
            _this.NOTA = _this.lista.RATTING;
            _this.PAIS = _this.lista.PAIS;
            _this.GENERO = _this.lista.GENERO;
            _this.IDIOMA = _this.lista.IDIOMA;
            _this.DIRETOR = _this.lista.DIRETOR;
            _this.LANCAMENTO = _this.lista.LANCAMENTO;
            _this.FUNDO = _this.lista.FUNDO;
            _this.FAVORITO = _this.lista.FAVORITO;
            _this.TRAILER = _this.lista.TRAILER;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    DetalhebrevesPage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    DetalhebrevesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhebreves',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\detalhebreves\detalhebreves.html"*/'\n\n<ion-content  class="background-body2" *ngIf="TITULO">\n  <ion-buttons left>\n    <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" style="background-color: transparent">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-buttons>\n\n  <div  style=" position: absolute !important; z-index: 2; ">\n\n    <br>\n      <ion-grid >\n        <ion-row>\n            <ion-col col-md-3 col-lg-3  col-xl-3 col-sm-12 col-12 style="padding-right: 20px" class="esconder-capa2">\n                <img *ngIf="CAPA" [src]="CAPA" width="100%" >\n             </ion-col>\n\n            <ion-col col-md-2 col-lg-2  col-xl-2 col-sm-12 col-12 style="text-align: right">\n              <ion-row class="text-detalhes">\n            <ion-col col-12>\n                <ion-row >\n\n\n                    <ion-col col-12 >\n                        <div *ngIf="NOTA <= 2">\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n              </div>\n\n            <div *ngIf="NOTA >= 3 && NOTA < 6">\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n              </div>\n\n    <div *ngIf="NOTA >= 6 && NOTA < 8">\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="ios-star-outline" ></ion-icon>\n    </div>\n\n    <div *ngIf="NOTA >= 8">\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    </div>\n\n\n\n              </ion-col>\n\n\n\n                <br>\n                <ion-col col-12 >\n                    <b>Nota: </b> {{NOTA}}\n                    </ion-col>\n\n\n                    <ion-col col-md-12 col-lg-12  col-xl-12 col-sm-12 col-12 >\n                        <b>Idioma: </b> {{IDIOMA}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Classificação: </b> {{NOTA}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Lançamento: </b> {{LANCAMENTO}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Diretor: </b> {{DIRETOR}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Gênero: </b> {{GENERO}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Lançamento: </b> {{LANCAMENTO}}\n                    </ion-col>\n                  </ion-row>\n\n\n<br>\n<button *ngIf="FAVORITO == \'0\'" ion-button class="botao-star" [disabled]="buttonDisabled" (keyup)="Adfavorito($event)" style="width: 100%" (click)="addFavoritos()">\n    <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n    <p>&nbsp;&nbsp;Receber lembrete</p>\n</button>\n\n<button *ngIf="FAVORITO == \'1\'" ion-button class="botao-star-ativo" [disabled]="buttonDisabled2" (keyup)="rmfavorito($event)" style="width: 100%" (click)="RFavoritos()">\n    <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n    <p>&nbsp;&nbsp;Remover de lembretes</p>\n</button>\n<br>\n<button ion-button *ngIf="TRAILER" class="botao-play" (keyup)="onKeyTrailer($event, TRAILER)" (click)="varTrailer(TRAILER)" style="width: 100%" >\n    <ion-icon name="logo-youtube" style="font-size: 30px"></ion-icon>\n    <p>&nbsp;&nbsp;Trailer</p>\n  </button>\n\n\n\n            </ion-col>\n\n\n\n              </ion-row>\n\n\n             </ion-col>\n\n\n             <ion-col col-md-7 col-lg-7 col-xl-7 col-sm-12 col-12 >\n              <ion-row>\n\n\n\n                <ion-col col-12 >\n                  <h1 style="font-size: 40px"><b>{{TITULO}}</b></h1>\n                  </ion-col>\n\n                      <ion-col col-12 >\n\n                          <b>Sinopse: </b> {{SINOPSE}}\n\n\n                      </ion-col>\n\n\n          </ion-row>\n          <ion-col col-12 >\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n\n            <br>\n            <br>\n\n\n\n\n\n\n\n          </ion-col>\n\n\n         </ion-col>\n\n         <ion-col col-md-3 col-lg-3  col-xl-3 col-sm-12 col-12 style="padding-right: 20px" class="esconder-capa">\n          <img *ngIf="CAPA" [src]="CAPA" width="100%" >\n       </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n\n    </div>\n\n\n\n\n    <div class="background-filme" >\n        <img [src]="sanitizer.bypassSecurityTrustResourceUrl(FUNDO)" class="capacss">\n        </div>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\detalhebreves\detalhebreves.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DetalhebrevesPage);
    return DetalhebrevesPage;
}());

//# sourceMappingURL=detalhebreves.js.map

/***/ })

});
//# sourceMappingURL=13.js.map