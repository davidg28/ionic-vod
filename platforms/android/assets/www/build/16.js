webpackJsonp([16],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerSeriePageModule", function() { return VerSeriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_serie__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerSeriePageModule = /** @class */ (function () {
    function VerSeriePageModule() {
    }
    VerSeriePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ver_serie__["a" /* VerSeriePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ver_serie__["a" /* VerSeriePage */]),
            ],
        })
    ], VerSeriePageModule);
    return VerSeriePageModule;
}());

//# sourceMappingURL=ver-serie.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerSeriePage = /** @class */ (function () {
    function VerSeriePage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl, navController, sanitizer) {
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
    VerSeriePage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    VerSeriePage.prototype.voltar = function () {
        this.navController.pop();
    };
    //ENTER COM CONTROLE
    VerSeriePage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    VerSeriePage.prototype.rmfavorito = function (event) {
        if (event.key === "Enter") {
            this.RFavoritos();
        }
    };
    VerSeriePage.prototype.Adfavorito = function (event) {
        if (event.key === "Enter") {
            this.addFavoritos();
        }
    };
    //ABRIR
    VerSeriePage.prototype.onKey = function (event, n, t) {
        if (event.key === "Enter") {
            this.varTemporada(n, t);
        }
    };
    VerSeriePage.prototype.onKeySerie = function (event, n) {
        if (event.key === "Enter") {
            this.varSerie(n);
        }
    };
    VerSeriePage.prototype.varSerie = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    //funções
    VerSeriePage.prototype.addFavoritos = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.addFavorito(this.USER, id, "1").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()("Pronto!", "Série adicionada aos favoritos.", "success");
                _this.buttonDisabled = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    VerSeriePage.prototype.varTrailer = function (n) {
        this.navCtrl.push('TrailerPage', { id: n });
    };
    VerSeriePage.prototype.RFavoritos = function () {
        var _this = this;
        this.verificarstatus();
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.RemoverFavorito(this.USER, id, "1").subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS = '1') {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()("Pronto!", "Série removida dos favoritos com sucesso.", "success");
                _this.buttonDisabled2 = true;
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    VerSeriePage.prototype.onKeyTrailer = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varTrailer(nextElement);
        }
    };
    VerSeriePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando detalhes..."
        });
        this.loader.present();
    };
    VerSeriePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    VerSeriePage.prototype.abrirFilme = function (l) {
        this.verificarstatus();
        var u = "http://www.tplay.live/lista/";
        var url = u + l + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: l,
            type: 'application/vnd.android.package-archive'
        };
        this.webIntent.startActivity(options).then();
    };
    VerSeriePage.prototype.varTemporada = function (n, t) {
        this.verificarstatus();
        this.navCtrl.push('SeriesTempPage', { id: n, titulo: t, serie: this.TITULO, capa: this.CAPA });
    };
    VerSeriePage.prototype.carregarFeed = function () {
        var _this = this;
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.SerieDetalhe(id).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
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
    VerSeriePage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    VerSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-serie',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\ver-serie\ver-serie.html"*/'\n\n<ion-content  class="background-body2" *ngIf="TITULO">\n  <ion-buttons left>\n    <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" style="background-color: transparent">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-buttons>\n\n  <div  style=" position: absolute !important; z-index: 2; ">\n\n    <br>\n\n    <div style="" class="esconder-capa2">\n\n      <a  ><img *ngIf="CAPA"  src="http://clipart-library.com/images/6Tp5aga7c.png" width="100px" class="play-mobile" >\n      <img *ngIf="CAPA" [src]="CAPA" width="100%" style="object-fit: cover; height: 200px" ></a>\n    \n      <h1 style="font-size: 40px; margin-left: 10px"><b>{{TITULO}}</b></h1>\n    \n    \n    \n      <div *ngIf="NOTA <= 2" >\n        <ion-icon name="star" style="color: #ffff00" style="margin-left: 10px"></ion-icon>\n        <ion-icon name="ios-star-outline" ></ion-icon>\n        <ion-icon name="ios-star-outline"></ion-icon>\n        <ion-icon name="ios-star-outline" ></ion-icon>\n        <ion-icon name="ios-star-outline" ></ion-icon>\n    </div>\n    \n    <div *ngIf="NOTA >= 3 && NOTA < 6" style="margin-left: 10px">\n        <ion-icon name="star" style="color: #ffff00"></ion-icon>\n        <ion-icon name="star" style="color: #ffff00"></ion-icon>\n        <ion-icon name="star" style="color: #ffff00"></ion-icon>\n        <ion-icon name="ios-star-outline" ></ion-icon>\n        <ion-icon name="ios-star-outline" ></ion-icon>\n    </div>\n    \n    <div *ngIf="NOTA >= 6 && NOTA < 8" style="margin-left: 10px">\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="ios-star-outline" ></ion-icon>\n    </div>\n    \n    <div *ngIf="NOTA >= 8" style="margin-left: 10px">\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    </div>\n    \n    \n    \n    \n    \n      <p style="margin-left: 10px"> {{SINOPSE}}</p>\n    </div>\n\n      <ion-grid >\n        <ion-row>\n   \n\n            <ion-col col-md-2 col-lg-2  col-xl-2 col-sm-12 col-12 style="text-align: right">\n              <ion-row class="text-detalhes">\n            <ion-col col-12>\n                <ion-row >\n\n\n                    <ion-col col-12 >\n                        <div *ngIf="NOTA <= 2" class="esconder-capa">\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n              </div>\n\n            <div *ngIf="NOTA >= 3 && NOTA < 6" class="esconder-capa">\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n                          <ion-icon name="ios-star-outline" ></ion-icon>\n              </div>\n\n    <div *ngIf="NOTA >= 6 && NOTA < 8" class="esconder-capa">\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="star" style="color: #ffff00"></ion-icon>\n                <ion-icon name="ios-star-outline" ></ion-icon>\n    </div>\n\n    <div *ngIf="NOTA >= 8" class="esconder-capa">\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n      <ion-icon name="star" style="color: #ffff00"></ion-icon>\n    </div>\n\n\n\n              </ion-col>\n\n\n\n                <br>\n                <ion-col col-12  class="esconder-capa">\n                    <b>Nota: </b> {{NOTA}}\n                    </ion-col>\n\n\n                    <ion-col col-md-12 col-lg-12  col-xl-12 col-sm-12 col-12 >\n                        <b>Idioma: </b> {{IDIOMA}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Classificação: </b> {{NOTA}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Lançamento: </b> {{LANCAMENTO}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Diretor: </b> {{DIRETOR}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Gênero: </b> {{GENERO}}\n                    </ion-col>\n\n                    <ion-col col-12 >\n                        <b>Lançamento: </b> {{LANCAMENTO}}\n                    </ion-col>\n                  </ion-row>\n\n\n<br>\n<button *ngIf="FAVORITO == \'0\'" ion-button class="botao-star" [disabled]="buttonDisabled" (keyup)="Adfavorito($event)" style="width: 100%" (click)="addFavoritos()">\n    <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n    <p>&nbsp;&nbsp;Add aos favoritos</p>\n</button>\n\n<button *ngIf="FAVORITO == \'1\'" ion-button class="botao-star-ativo" [disabled]="buttonDisabled2" (keyup)="rmfavorito($event)" style="width: 100%" (click)="RFavoritos()">\n    <ion-icon name="star" style="font-size: 30px" ></ion-icon>\n    <p>&nbsp;&nbsp;Remover dos favoritos</p>\n</button>\n<br>\n<button ion-button *ngIf="TRAILER" class="botao-play" (keyup)="onKeyTrailer($event, TRAILER)" (click)="varTrailer(TRAILER)" style="width: 100%" >\n    <ion-icon name="logo-youtube" style="font-size: 30px"></ion-icon>\n    <p>&nbsp;&nbsp;Trailer</p>\n  </button>\n\n\n\n            </ion-col>\n\n\n\n              </ion-row>\n\n\n             </ion-col>\n\n\n             <ion-col col-md-7 col-lg-7 col-xl-7 col-sm-12 col-12 >\n              <ion-row>\n\n\n\n                <ion-col col-12  class="esconder-capa">\n                  <h1 style="font-size: 40px"><b>{{TITULO}}</b></h1>\n                  </ion-col>\n\n                      <ion-col col-12 class="esconder-capa" >\n\n                          <b>Sinopse: </b> {{SINOPSE}}\n\n\n                      </ion-col>\n\n\n          </ion-row>\n          <ion-col col-12 >\n            <div class="esconder-capa">\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n\n            <br>\n            <br>\n            </div>\n<br>\n<h3>Temporadas:</h3>\n            <button ion-button color="light" *ngFor="let l of listaTemp"  (keyup)="onKey($event,l.ID_STMP, l.TEMPORADA)" (click)="varTemporada(l.ID_STMP, l.TEMPORADA)" class="botao-play">Temporada {{l.TEMPORADA}}</button>\n\n\n\n\n\n\n          </ion-col>\n\n\n         </ion-col>\n\n         <ion-col col-md-3 col-lg-3  col-xl-3 col-sm-12 col-12 style="padding-right: 20px" class="esconder-capa">\n          <img *ngIf="CAPA" [src]="CAPA" width="100%" >\n       </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n\n      <div padding>\n      <div style="width: 100%; height: 50px"></div>\n\n\n\n\n      &nbsp;&nbsp;&nbsp; <h1 style="color: #fff">Séries relacionadas</h1>\n    <div style="width: 100%"></div>\n    <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;"  class="caixa-scrol">\n\n\n\n      <button ion-button *ngFor="let l of RELACIONADOS"  class="caixa-capa-home" style="width: 240px; height: 355px " (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n          <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n          <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n          <span class="fundo-capa"></span>\n          <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n      </button>\n\n\n </ion-scroll>\n\n\n</div>\n\n\n\n\n    </div>\n\n\n\n\n    <div class="background-filme" >\n        <img [src]="sanitizer.bypassSecurityTrustResourceUrl(FUNDO)" class="capacss">\n        </div>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\ver-serie\ver-serie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VerSeriePage);
    return VerSeriePage;
}());

//# sourceMappingURL=ver-serie.js.map

/***/ })

});
//# sourceMappingURL=16.js.map