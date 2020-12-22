webpackJsonp([32],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidswaltdisneyPageModule", function() { return KidswaltdisneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kidswaltdisney__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KidswaltdisneyPageModule = /** @class */ (function () {
    function KidswaltdisneyPageModule() {
    }
    KidswaltdisneyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kidswaltdisney__["a" /* KidswaltdisneyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kidswaltdisney__["a" /* KidswaltdisneyPage */]),
            ],
        })
    ], KidswaltdisneyPageModule);
    return KidswaltdisneyPageModule;
}());

//# sourceMappingURL=kidswaltdisney.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidswaltdisneyPage; });
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





var KidswaltdisneyPage = /** @class */ (function () {
    function KidswaltdisneyPage(navCtrl, navParams, ApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ApiProvider = ApiProvider;
        this.menu2 = [
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
    KidswaltdisneyPage.prototype.verificarstatus = function () {
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
    KidswaltdisneyPage.prototype.filmes = function (n) {
        this.navCtrl.push('FilmescatPage', { id: n });
    };
    KidswaltdisneyPage.prototype.onKey = function (event, n) {
        if (event.key === "Enter") {
            this.filmes(n);
        }
    };
    KidswaltdisneyPage.prototype.series = function (n) {
        this.navCtrl.push('SerieCatPage', { id: n });
    };
    KidswaltdisneyPage.prototype.onKeyS = function (event, n) {
        if (event.key === "Enter") {
            this.series(n);
        }
    };
    KidswaltdisneyPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    KidswaltdisneyPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    KidswaltdisneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kidswaltdisney',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\kidswaltdisney\kidswaltdisney.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n\n                      </button>\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="text-align: center">\n                  <img src="assets/imgs/walt_disney_PNG28.png" style="width: 300px !important">\n                  <ion-row>\n\n                      <ion-col col-12 col-md-6  >\n                          <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event,\'35\')" (click)="filmes(\'35\')">\n\n                           <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                          </button>\n\n                        </ion-col>\n\n\n                      <ion-col col-12 col-md-6  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeyS($event,\'35\')"  (click)="series(\'35\')">\n\n                 <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n                </button>\n\n              </ion-col>\n\n\n\n            </ion-row>\n\n\n              </ion-col>\n\n\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\kidswaltdisney\kidswaltdisney.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], KidswaltdisneyPage);
    return KidswaltdisneyPage;
}());

//# sourceMappingURL=kidswaltdisney.js.map

/***/ })

});
//# sourceMappingURL=32.js.map