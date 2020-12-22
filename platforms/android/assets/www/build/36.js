webpackJsonp([36],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favoritos__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritosPageModule = /** @class */ (function () {
    function FavoritosPageModule() {
    }
    FavoritosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */]),
            ],
        })
    ], FavoritosPageModule);
    return FavoritosPageModule;
}());

//# sourceMappingURL=favoritos.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(42);
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






var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.USER = localStorage.getItem('USUARIO');
        this.menu = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */] },
            { icon: "ios-clock", title: 'Em Breve', component: 'EmbrevePage' },
            { icon: "ios-heart", title: 'Favoritos', component: 'FavoritosPage' },
            { icon: "ios-star", title: 'Lançamentos', component: 'LancamentosPage' },
            { icon: "ios-football", title: 'Kids', component: 'KidsPage' },
            { icon: "ios-closed-captioning", title: 'Legendados', component: 'LegendadosPage' },
            { icon: "ios-easel-outline", title: '4k', component: 'QuatrokPage' },
            { icon: "ios-film", title: 'Todos os Filmes', component: 'HomeFilmePage' },
            { icon: "ios-desktop-outline", title: 'Todas as Séries', component: 'HomeSeriePage' },
            { icon: "ios-folder-open", title: 'Categorias', component: 'CategoriasPage' },
            { icon: "ios-search", title: 'Pesquisar', component: 'PesquisarPage' },
            { icon: "ios-lock", title: 'XXX', component: 'AdultoPage' },
            { icon: "ios-send", title: 'Pedir Filme e Séries', component: 'PedirPage' },
            { icon: "ios-phone-portrait-outline", title: 'Instale no celular', component: 'QrcodePage' },
            { icon: "ios-settings", title: 'Configurações', component: 'OpcaoPage' },
            { icon: "ios-card", title: 'Assinatura', component: 'ContaVencidaPage' },
            { icon: "ios-exit-outline", title: 'Sair', component: 'LoginPage' },
        ];
        this.verificarstatus();
    }
    FavoritosPage.prototype.verificarstatus = function () {
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
    FavoritosPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    FavoritosPage.prototype.onKeySerie = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varSerie(nextElement);
        }
    };
    FavoritosPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    FavoritosPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    FavoritosPage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    FavoritosPage.prototype.varSerie = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    FavoritosPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando favoritos..."
        });
        this.loader.present();
    };
    FavoritosPage.prototype.AbreCarregando2 = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando tela inicial..."
        });
        this.loader.present();
    };
    FavoritosPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    FavoritosPage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.favoritos(this.USER).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.listaS = objeto_retorno.DADOS2;
            _this.STATUS = _this.lista[0].STATUS;
            _this.STATUS2 = _this.listaS[0].STATUS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    FavoritosPage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
        this.menuCtrl.enable(true, 'myMenu');
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\favoritos\favoritos.html"*/'\n\n\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2   class="esconder-menu">\n              <ion-list style="border-color: transparent !important;">\n\n\n\n\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                  </button>\n\n\n                </ion-list>\n            </ion-col>\n\n\n            <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="height: 100px">\n\n\n\n\n\n                <div style="width: 100%; height: 10px"></div>\n\n\n\n                            <h1 style="color: #fff">Filmes favoritos</h1>\n                          <div style="width: 100%"></div>\n\n\n\n\n                          <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 400px;" *ngIf="STATUS == \'1\'" class="caixa-scrol">\n\n\n\n\n              <button ion-button *ngFor="let l of lista"  class="caixa-capa-home" style="width: 240px; height: 355px  "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n\n                <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n                <span class="fundo-capa"></span>\n                <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n               </button>\n\n                       </ion-scroll>\n\n                       <div *ngIf="STATUS == \'0\'">\n                          <p style="color: #ff0224">Nenhum filme favoritado</p>\n                                           </div>\n\n\n\n                  <div style="width: 100%; height: 50px"></div>\n\n\n\n\n                      <h1 style="color: #fff">Séries favoritas</h1>\n                    <div style="width: 100%"></div>\n                    <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 400px;" *ngIf="STATUS2 == \'1\'" class="caixa-scrol">\n\n\n\n                      <button ion-button *ngFor="let l of listaS"  class="caixa-capa-home" style="width: 240px; height: 355px" (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n                        <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                        <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n                        <span class="fundo-capa"></span>\n                        <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n                    </button>\n\n                 </ion-scroll>\n\n                 <div *ngIf="STATUS2 == \'0\'">\n<p style="color: #ff0224">Nenhuma série favoritada</p>\n                 </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                <div style="width: 100%; height: 50px"></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                      </ion-col>\n\n\n\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\favoritos\favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ })

});
//# sourceMappingURL=36.js.map