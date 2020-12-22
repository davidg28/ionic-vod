webpackJsonp([14],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhebrevePageModule", function() { return DetalhebrevePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhebreve__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhebrevePageModule = /** @class */ (function () {
    function DetalhebrevePageModule() {
    }
    DetalhebrevePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhebreve__["a" /* DetalhebrevePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhebreve__["a" /* DetalhebrevePage */]),
            ],
        })
    ], DetalhebrevePageModule);
    return DetalhebrevePageModule;
}());

//# sourceMappingURL=detalhebreve.module.js.map

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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhebrevePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trailer_trailer__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DetalhebrevePage = /** @class */ (function () {
    function DetalhebrevePage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl, sanitizer, navController, iab, videoPlayer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webIntent = webIntent;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.navController = navController;
        this.iab = iab;
        this.videoPlayer = videoPlayer;
        this.USER = localStorage.getItem('USUARIO');
        this.LOGADO = localStorage.getItem('LOGADO');
        this.PLAY = localStorage.getItem('PLAY');
        this.verificarstatus();
    }
    DetalhebrevePage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DetalhebrevePage.prototype.voltar = function () {
        this.navController.pop();
    };
    DetalhebrevePage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
        }
    };
    DetalhebrevePage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    DetalhebrevePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando detalhes..."
        });
        this.loader.present();
    };
    DetalhebrevePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    DetalhebrevePage.prototype.carregarFeed = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.embreveDetalhe(id).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.RELACIONADOS = objeto_retorno.RELACIONADOS;
            console.log(_this.lista);
            _this.ID = _this.lista.ID_FILM;
            _this.LINK = _this.lista.LINK;
            _this.LINK2 = _this.lista.LINK2;
            _this.CAPA = _this.lista.CAPA;
            _this.CAPA2 = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.lista.CAPA);
            _this.TITULO = _this.lista.TITULO;
            _this.SINOPSE = _this.lista.SINOPSE;
            _this.NOTA = _this.lista.RATING;
            _this.PAIS = _this.lista.PAIS;
            _this.GENERO = _this.lista.GENERO;
            _this.IDIOMA = _this.lista.IDIOMA;
            _this.DIRETOR = _this.lista.DIRETOR;
            _this.LANCAMENTO = _this.lista.LANCAMENTO;
            _this.FUNDO = _this.lista.FUNDO;
            _this.FAVORITO = _this.lista.FAVORITO;
            _this.TRAILER = _this.lista.TRAILER;
            //console.log(this.RELACIONADOS);
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    DetalhebrevePage.prototype.varTrailer = function (n) {
        this.verificarstatus();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__trailer_trailer__["a" /* TrailerPage */], { id: n });
    };
    DetalhebrevePage.prototype.addFavoritos = function () {
        var _this = this;
        this.verificarstatus();
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.addLembrete(this.USER, id, "0").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Pronto!", "Filme adicionado aos lembretes com sucesso.", "success");
                _this.buttonDisabled = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    DetalhebrevePage.prototype.RFavoritos = function () {
        var _this = this;
        this.verificarstatus();
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.RemoverLembrete(this.USER, id, "0").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Pronto!", "Filme removido dos lembretes.", "success");
                _this.buttonDisabled2 = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    //CARREGAR AO ABRIR PAGINA
    DetalhebrevePage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    DetalhebrevePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhebreve',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\detalhebreve\detalhebreve.html"*/'\n\n<ion-content  class="background-body2" *ngIf="TITULO">\n  <ion-buttons left>\n    <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" class="voltar" style="background-color: transparent">\n        <ion-icon name="arrow-back"></ion-icon> voltar &nbsp;&nbsp;\n    </button>\n  </ion-buttons>\n\n<div  style=" position: absolute !important; z-index: 2; ">\n<br>\n\n  <ion-grid >\n    <ion-row>\n\n\n        <ion-col col-md-2 col-lg-2  col-xl-2 col-sm-12 col-12 style="text-align: right" >\n          <ion-row>\n              <ion-col col-md-3 col-lg-3  col-xl-3 col-sm-12 col-12 style="padding-right: 20px" class="esconder-capa2">\n                  <img *ngIf="CAPA" [src]="CAPA" width="100%" >\n               </ion-col>\n\n\n        <ion-col col-12 class="text-detalhes">\n            <ion-row>\n\n\n                <ion-col col-12 >\n                    <div *ngIf="NOTA <= 2">\n                      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                      <ion-icon name="ios-star-outline" ></ion-icon>\n                      <ion-icon name="ios-star-outline"></ion-icon>\n                      <ion-icon name="ios-star-outline" ></ion-icon>\n                      <ion-icon name="ios-star-outline" ></ion-icon>\n          </div>\n\n        <div *ngIf="NOTA >= 3 && NOTA < 6">\n                      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                      <ion-icon name="ios-star-outline" ></ion-icon>\n                      <ion-icon name="ios-star-outline" ></ion-icon>\n          </div>\n\n<div *ngIf="NOTA >= 6 && NOTA < 8">\n            <ion-icon name="star" style="color: #ffff00"></ion-icon>\n            <ion-icon name="star" style="color: #ffff00"></ion-icon>\n            <ion-icon name="star" style="color: #ffff00"></ion-icon>\n            <ion-icon name="star" style="color: #ffff00"></ion-icon>\n            <ion-icon name="ios-star-outline" ></ion-icon>\n</div>\n\n<div *ngIf="NOTA >= 8">\n  <ion-icon name="star" style="color: #ffff00"></ion-icon>\n  <ion-icon name="star" style="color: #ffff00"></ion-icon>\n  <ion-icon name="star" style="color: #ffff00"></ion-icon>\n  <ion-icon name="star" style="color: #ffff00"></ion-icon>\n  <ion-icon name="star" style="color: #ffff00"></ion-icon>\n</div>\n\n\n\n          </ion-col>\n\n\n\n            <br>\n            <ion-col col-12 >\n                <b>Nota: </b> {{NOTA}}\n                </ion-col>\n\n\n                <ion-col col-md-12 col-lg-12  col-xl-12 col-sm-12 col-12 >\n                    <b>Idioma: </b> {{IDIOMA}}\n                </ion-col>\n\n                <ion-col col-12 >\n                    <b>Classificação: </b> {{NOTA}}\n                </ion-col>\n\n                <ion-col col-12 >\n                    <b>Lançamento: </b> {{LANCAMENTO}}\n                </ion-col>\n\n                <ion-col col-12 >\n                    <b>Diretor: </b> {{DIRETOR}}\n                </ion-col>\n\n                <ion-col col-12 >\n                    <b>Gênero: </b> {{GENERO}}\n                </ion-col>\n\n                <ion-col col-12 >\n                    <b>Lançamento: </b> {{LANCAMENTO}}\n                </ion-col>\n              </ion-row>\n        </ion-col>\n\n\n\n          </ion-row>\n\n\n         </ion-col>\n\n\n         <ion-col col-md-7 col-lg-7 col-xl-7 col-sm-12 col-12 >\n          <ion-row>\n\n\n\n            <ion-col col-12 >\n              <h1 style="font-size: 40px"><b>{{TITULO}}</b></h1>\n              </ion-col>\n\n                  <ion-col col-12 >\n\n                      <b>Sinopse: </b> {{SINOPSE}}\n\n\n                  </ion-col>\n\n\n      </ion-row>\n      <ion-col col-12 >\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n\n        <button *ngIf="FAVORITO == \'0\'" ion-button class="botao-star" [disabled]="buttonDisabled" (keyup)="Adfavorito($event)" (click)="addFavoritos()" >\n            <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n            <p>&nbsp;&nbsp;Receber Lembrete</p>\n        </button>\n\n        <button *ngIf="FAVORITO == \'1\'" ion-button class="botao-star-ativo" [disabled]="buttonDisabled2" (keyup)="rmfavorito($event)" (click)="RFavoritos()">\n            <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n            <p>&nbsp;&nbsp;Remover de lembretes</p>\n        </button>\n\n          <button ion-button *ngIf="TRAILER" class="botao-play" (keyup)="onKeyTrailer($event, TRAILER)" (click)="varTrailer(TRAILER)" >\n            <ion-icon name="logo-youtube" style="font-size: 30px"></ion-icon>\n            <p>&nbsp;&nbsp;Trailer</p>\n          </button>\n\n\n\n\n\n\n\n\n      </ion-col>\n\n\n     </ion-col>\n\n     <ion-col col-md-3 col-lg-3  col-xl-3 col-sm-12 col-12 style="padding-right: 20px" class="esconder-capa">\n      <img *ngIf="CAPA" [src]="CAPA" width="100%" >\n   </ion-col>\n\n\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n\n</div>\n\n\n\n\n<div class="background-filme" >\n    <img [src]="sanitizer.bypassSecurityTrustResourceUrl(FUNDO)" class="capacss">\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\detalhebreve\detalhebreve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__["a" /* VideoPlayer */]])
    ], DetalhebrevePage);
    return DetalhebrevePage;
}());

//# sourceMappingURL=detalhebreve.js.map

/***/ })

});
//# sourceMappingURL=14.js.map