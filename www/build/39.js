webpackJsonp([39],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriasPageModule = /** @class */ (function () {
    function CategoriasPageModule() {
    }
    CategoriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */]),
            ],
        })
    ], CategoriasPageModule);
    return CategoriasPageModule;
}());

//# sourceMappingURL=categorias.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(ApiProvider, navCtrl, navParams) {
        this.ApiProvider = ApiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */] },
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
    CategoriasPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    CategoriasPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    CategoriasPage.prototype.filmes = function () {
        this.navCtrl.setRoot('CategoriaPage');
    };
    CategoriasPage.prototype.series = function () {
        this.navCtrl.setRoot('CategoriaSeriePage');
    };
    CategoriasPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    CategoriasPage.prototype.onKeySerie = function (event) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    CategoriasPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categorias\categorias.html"*/'\n\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n      <ion-grid>\n      <ion-row>\n\n        <ion-col col-2  class="esconder-menu">\n            <ion-list style="border-color: transparent !important;">\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n\n              </ion-list>\n          </ion-col>\n\n          <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n              <h2 style="color: #fff">Escolha uma opção</h2>\n              <ion-row>\n\n                  <ion-col col-12 col-md-6  >\n                      <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event)" (click)="filmes()">\n\n                       <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                      </button>\n\n                    </ion-col>\n\n\n                  <ion-col col-12 col-md-6  >\n            <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeySerie($event)"  (click)="series()">\n\n             <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n            </button>\n\n          </ion-col>\n        </ion-row>\n\n\n          </ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categorias\categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ })

});
//# sourceMappingURL=39.js.map