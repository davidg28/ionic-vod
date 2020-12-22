webpackJsonp([38],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaVencidaPageModule", function() { return ContaVencidaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conta_vencida__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContaVencidaPageModule = /** @class */ (function () {
    function ContaVencidaPageModule() {
    }
    ContaVencidaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conta_vencida__["a" /* ContaVencidaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conta_vencida__["a" /* ContaVencidaPage */]),
            ],
        })
    ], ContaVencidaPageModule);
    return ContaVencidaPageModule;
}());

//# sourceMappingURL=conta-vencida.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContaVencidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_menu_menu__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContaVencidaPage = /** @class */ (function () {
    function ContaVencidaPage(navCtrl, ApiProvider, MenuProvider, loadingCtrl, splashScreen, menuCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.MenuProvider = MenuProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.VERSAO = "1";
        this.pages = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */] },
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
        this.isRefreshing = false;
        this.page = 1;
        this.verificarstatus();
    }
    ContaVencidaPage.prototype.selecionar = function () {
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
        console.log("Foi");
    };
    ContaVencidaPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    ContaVencidaPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.enviar();
        }
    };
    ContaVencidaPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    ContaVencidaPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    ContaVencidaPage.prototype.onKey3 = function (event) {
        if (event.key === "Enter") {
            this.renovar();
        }
    };
    ContaVencidaPage.prototype.renovar = function () {
        this.navCtrl.push('RenovarPage');
    };
    ContaVencidaPage.prototype.enviar = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.renovar(this.TITULO).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS == '1') {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Renovado com sucesso!", {
                    buttons: {
                        cancel: false,
                        confirm: false,
                    },
                    timer: 3000,
                    icon: "success",
                }).then(function (value) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Código inválido", "", "error").then(function (value) {
                });
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    ContaVencidaPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    ContaVencidaPage.prototype.openPage2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    ContaVencidaPage.prototype.verificarstatus = function () {
        var _this = this;
        var LGD = localStorage.getItem('LOGADO');
        var USR = localStorage.getItem('USUARIO');
        var DTBS;
        this.ApiProvider.verStatus(USR).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            DTBS = objeto_retorno.DADOS;
            _this.PRAZO = DTBS.PRAZO;
            _this.TEMPO = DTBS.TEMPO;
            _this.DATAFINAL = DTBS.DATAFINAL;
            console.log(_this.PRAZO);
            if (DTBS.PRAZO == "0") {
                _this.selecionar();
            }
            if (DTBS.STATUS == "1") {
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], ContaVencidaPage.prototype, "sInput", void 0);
    ContaVencidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-conta-vencida',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\conta-vencida\conta-vencida.html"*/'\n\n\n<ion-content  class="fundo-body">\n\n\n    <button ion-button  menuToggle class="menu">\n      <ion-icon name="menu" style="color: #fff" ></ion-icon>\n    </button>\n\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2  class="esconder-menu">\n              <ion-list style="border-color: transparent !important;  padding: 0px !important">\n\n\n\n\n\n\n\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                  </button>\n\n\n\n\n\n\n                </ion-list>\n            </ion-col>\n\n      <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="height: 100px; text-align: center">\n\n\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n        <h1 style="color: #fff; font-size: 55px"> Faltam {{PRAZO}} dias</h1>\n        <h1 style="color: #fff; font-size: 35px">Sua assinatura termina no dia: {{DATAFINAL}}</h1>\n        <br><Br>\n          <h2 *ngIf="TEMPO == 0" style="color: #fff">Digite o código para renovar sua assinatura </h2>\n\n          <ion-item class="ion-item" *ngIf="TEMPO == 0">\n\n              <ion-input type="text"   #searchInput m placeholder="Digite aqui" class="ion-input3" [(ngModel)]="TITULO" style="color: #fff !important;" (keyup)="onKey($event, \'1\')"></ion-input>\n\n            </ion-item>\n            <button *ngIf="TEMPO == 0" ion-button class="btn-avancar botao-play botao-detalhe" (keyup)="onKey($event, \'1\')" (click)="enviar()"  style="width: 100%;" >RENOVAR</button>\n\n\n\n\n\n\n          </ion-col>\n\n\n\n\n\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\conta-vencida\conta-vencida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */]])
    ], ContaVencidaPage);
    return ContaVencidaPage;
}());

//# sourceMappingURL=conta-vencida.js.map

/***/ })

});
//# sourceMappingURL=38.js.map