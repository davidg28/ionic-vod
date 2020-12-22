webpackJsonp([3],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenovarPageModule", function() { return RenovarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renovar__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RenovarPageModule = /** @class */ (function () {
    function RenovarPageModule() {
    }
    RenovarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__renovar__["a" /* RenovarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__renovar__["a" /* RenovarPage */]),
            ],
        })
    ], RenovarPageModule);
    return RenovarPageModule;
}());

//# sourceMappingURL=renovar.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_series_buscar_series__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar_filmes_buscar_filmes__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoria_serie_categoria_serie__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_serie_home_serie__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_categoria__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { icon: "ios-film", title: 'Filmes Recentes', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */] },
            { icon: "ios-film", title: 'Séries Recentes', component: __WEBPACK_IMPORTED_MODULE_5__home_serie_home_serie__["a" /* HomeSeriePage */] },
            { icon: "ios-folder-open-outline", title: 'Categoria de Filmes', component: __WEBPACK_IMPORTED_MODULE_6__categoria_categoria__["a" /* CategoriaPage */] },
            { icon: "md-folder-open", title: 'Categoria de Séries', component: __WEBPACK_IMPORTED_MODULE_4__categoria_serie_categoria_serie__["a" /* CategoriaSeriePage */] },
            { icon: "ios-search", title: 'Pesquisar Filmes', component: __WEBPACK_IMPORTED_MODULE_3__buscar_filmes_buscar_filmes__["a" /* BuscarFilmesPage */] },
            { icon: "md-search", title: 'Pesquisar Séries', component: __WEBPACK_IMPORTED_MODULE_2__buscar_series_buscar_series__["a" /* BuscarSeriesPage */] },
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\menu\menu.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #343434; color: #fff">\n\n   <ion-list style="border: none;">\n     <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"  style="background-color: #343434; color: #fff; font-size: 30px; border-bottom: 1px solid #fff" class="botao-menu texto-menu">\n       <ion-icon name="{{p.icon}}"></ion-icon>\n       &nbsp;&nbsp;\n\n     {{p.title}}\n\n     </button>\n\n   </ion-list>\n </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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






var HomeSeriePage = /** @class */ (function () {
    function HomeSeriePage(navCtrl, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.isRefreshing = false;
        this.page = 1;
        this.pages = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
        this.chamarlista();
        this.verificarstatus();
    }
    HomeSeriePage.prototype.verificarstatus = function () {
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
    HomeSeriePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    HomeSeriePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomeSeriePage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    HomeSeriePage.prototype.onKeyVERMAIS = function (event) {
        if (event.key === "Enter") {
            this.doInfinite(1);
        }
    };
    HomeSeriePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    HomeSeriePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    HomeSeriePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    HomeSeriePage.prototype.varFilme = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    HomeSeriePage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.UltimosSeries().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            console.log(_this.lista);
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
        this.FechaCarregando();
    };
    HomeSeriePage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.TodosSeries(this.page).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.DADOS);
                // this.infiniteScroll.complete();
            }
            else {
                _this.lista = objeto_retorno.DADOS;
            }
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        });
    };
    HomeSeriePage.prototype.ionViewDidEnter = function () {
        //this.carregarFeed();
    };
    HomeSeriePage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    HomeSeriePage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    HomeSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-serie',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home-serie\home-serie.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-2  class="esconder-menu">\n          <ion-list style="border-color: transparent !important;">\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n\n            </ion-list>\n        </ion-col>\n\n  <ion-col col-12 col-md-10 col-lg-10 col-xl-10  style="height: 100px">\n        <ion-row>\n\n      <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista">\n <div *ngIf="l.STATUS == 1">\n    <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n         <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent;  padding: 0px; " class="caixa-capa"  (keyup)="onKey($event,l.ID_SERIE)" (click)="varFilme(l.ID_SERIE)">\n          <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n          <span class="fundo-capa"></span>\n          <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n        </button>\n  </div>\n      </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n <button (keyup)="onKeyVERMAIS($event)" ion-button style="width: 100%; background-color: transparent; " class="botao-ver-mais"  (click)="doInfinite(1)">VER MAIS</button>\n<br><br>\n\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home-serie\home-serie.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomeSeriePage);
    return HomeSeriePage;
}());

//# sourceMappingURL=home-serie.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarSeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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






var BuscarSeriesPage = /** @class */ (function () {
    function BuscarSeriesPage(navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.isRefreshing = false;
        this.page = 1;
        this.BOTAO = 0;
        this.menu2 = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
        splashScreen.hide();
        this.verificarstatus();
    }
    BuscarSeriesPage.prototype.verificarstatus = function () {
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
    BuscarSeriesPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    BuscarSeriesPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando séries..."
        });
        this.loader.present();
    };
    BuscarSeriesPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    BuscarSeriesPage.prototype.varFilme = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    BuscarSeriesPage.prototype.atualizar = function () {
        this.navCtrl.setRoot('BuscarSeriesPage');
    };
    BuscarSeriesPage.prototype.atualizar2 = function (event, nextElement) {
        if (event.key === "Enter") {
            this.atualizar();
        }
    };
    BuscarSeriesPage.prototype.ir = function () {
        var n = false;
        this.carregarFeed(n);
    };
    BuscarSeriesPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    BuscarSeriesPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.carregarFeed(true);
    };
    BuscarSeriesPage.prototype.onKey2 = function (event) {
        if (event.key === "Enter") {
            this.ir();
        }
    };
    BuscarSeriesPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    BuscarSeriesPage.prototype.carregarFeed = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.buscarSeries(1, this.buscar).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.EMPRESAS);
                _this.infiniteScroll.complete();
                _this.BOTAO = 1;
            }
            else {
                _this.lista = objeto_retorno.DADOS;
                _this.BOTAO = 1;
            }
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        });
    };
    BuscarSeriesPage.prototype.carregarFeed2 = function () {
        var _this = this;
        this.ApiProvider.buscarSeriesb().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista2 = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    BuscarSeriesPage.prototype.moveFocus = function (nextElement) {
        nextElement.setFocus();
    };
    BuscarSeriesPage.prototype.ionViewDidEnter = function () {
        // this.carregarFeed();
        // this.carregarFeed2();
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    BuscarSeriesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.lista = this.lista2.filter(function (item) {
                return (item.TITULO.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.carregarFeed();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], BuscarSeriesPage.prototype, "sInput", void 0);
    BuscarSeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar-series',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\buscar-series\buscar-series.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2  class="esconder-menu">\n              <ion-list style="border-color: transparent !important;">\n\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                  </button>\n\n\n                </ion-list>\n            </ion-col>\n\n\n            <ion-col col-12 col-md-10 col-lg-10 col-xl-10   >\n                <br><br>\n                <h1 style="color: #fff">Pesquisar séries</h1>\n                <button  ion-button class="btn-avancar" *ngIf="BOTAO == 1" (click)="atualizar()" (keyup)="atualizar2($event)" style="width: 100%;" >PESQUISAR NOVAMENTE</button>\n                <ion-list>\n                  <ion-item class="ion-item" *ngIf="BOTAO == 0" >\n\n                    <ion-input type="text" value="" #searchInput placeholder="Digite o titulo do filme" class="ion-input3" [(ngModel)]="buscar" (keyup)="onKey2($event)" style="color: #fff !important;" ></ion-input>\n\n                  </ion-item>\n                  <!--<span style="font-size: 15px; text-align: right; color: #fff">Aperte para pesquisar</span>-->\n                </ion-list>\n\n                <button *ngIf="BOTAO == 0" ion-button full class="btn-avancar"  id="ctl00_plcPrincipal_btnContrato" (click)="ir()" (keyup)="onKey2($event,b)">\n                    Pesquisar\n                  </button>\n    <br><br>\n\n      <ion-row>\n\n          <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista" >\n              <div >\n                 <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                      <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent;  padding: 0px; " class="caixa-capa" (keyup)="onKey($event,l.ID_SERIE)" (click)="varFilme(l.ID_SERIE)">\n                       <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n                       <span class="fundo-capa"></span>\n                       <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n                     </button>\n               </div>\n                   </ion-col>\n\n\n\n\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\buscar-series\buscar-series.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], BuscarSeriesPage);
    return BuscarSeriesPage;
}());

//# sourceMappingURL=buscar-series.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarFilmesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuscarFilmesPage = /** @class */ (function () {
    function BuscarFilmesPage(navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.isRefreshing = false;
        this.page = 1;
        this.BOTAO = 0;
        this.menu2 = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
        splashScreen.hide();
        this.verificarstatus();
    }
    BuscarFilmesPage.prototype.verificarstatus = function () {
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    BuscarFilmesPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    BuscarFilmesPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    BuscarFilmesPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando filmes..."
        });
        this.loader.present();
    };
    BuscarFilmesPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    BuscarFilmesPage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    BuscarFilmesPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.carregarFeed(true, this.buscar);
    };
    BuscarFilmesPage.prototype.atualizar = function () {
        this.navCtrl.setRoot('BuscarFilmesPage');
    };
    BuscarFilmesPage.prototype.atualizar2 = function (event, nextElement) {
        if (event.key === "Enter") {
            this.atualizar();
        }
    };
    BuscarFilmesPage.prototype.ir = function () {
        var n = false;
        this.carregarFeed(n, this.buscar);
    };
    BuscarFilmesPage.prototype.moveFocus = function (nextElement) {
        nextElement.setFocus();
    };
    BuscarFilmesPage.prototype.carregarFeed = function (newpage, nome) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.buscarFilmes(1, nome).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.EMPRESAS);
                _this.infiniteScroll.complete();
                _this.BOTAO = 1;
            }
            else {
                _this.lista = objeto_retorno.DADOS;
                _this.BOTAO = 1;
            }
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        });
    };
    BuscarFilmesPage.prototype.carregarFeed2 = function () {
        var _this = this;
        this.ApiProvider.buscarFilmesb().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista2 = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    BuscarFilmesPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    BuscarFilmesPage.prototype.onKey2 = function (event) {
        if (event.key === "Enter") {
            this.ir();
        }
    };
    BuscarFilmesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    BuscarFilmesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.lista = this.lista2.filter(function (item) {
                return (item.TITULO.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.carregarFeed(false, this.buscar);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], BuscarFilmesPage.prototype, "sInput", void 0);
    BuscarFilmesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar-filmes',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\buscar-filmes\buscar-filmes.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2 class="esconder-menu" >\n              <ion-list  style="border-color: transparent !important;">\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                    <ion-icon name="{{p.icon}}" style="font-size: 20px; padding: 0px !important"></ion-icon>\n\n                    <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                    <br>\n\n                  {{p.title}}\n\n                  </button>\n\n\n                </ion-list>\n            </ion-col>\n\n\n            <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n              <br><br>\n                <h1 style="color: #fff">Pesquisar Filmes</h1>\n                <button  ion-button class="btn-avancar" *ngIf="BOTAO == 1" (click)="atualizar()" (keyup)="atualizar2($event)" style="width: 100%;" >PESQUISAR NOVAMENTE</button>\n              <ion-list>\n                <ion-item class="ion-item" *ngIf="BOTAO == 0" >\n\n                  <ion-input type="text" value="" #searchInput placeholder="Digite o titulo do filme" class="ion-input3" [(ngModel)]="buscar" (keyup)="onKey2($event)" style="color: #fff !important;" ></ion-input>\n\n                </ion-item>\n                <!--<span style="font-size: 15px; text-align: right; color: #fff">Aperte para pesquisar</span>-->\n              </ion-list>\n\n              <button *ngIf="BOTAO == 0" ion-button full class="btn-avancar"  id="ctl00_plcPrincipal_btnContrato" (click)="ir()" (keyup)="onKey2($event,b)">\n                  Pesquisar\n                </button>\n<br><br>\n      <ion-row>\n          <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista">\n              <div *ngIf="l.STATUS == 1">\n                 <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                      <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent; padding: 0px; " class="caixa-capa" (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n                       <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n                       <span class="fundo-capa"></span>\n                       <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n                     </button>\n               </div>\n               <div *ngIf="l.STATUS == 0" style="width: 500px; position: absolute ; color: #fff">\n<h3>Nenhum Filme encontrado!</h3>\n                </div>\n                   </ion-col>\n\n\n\n\n\n      </ion-row>\n    </ion-col>\n\n  </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\buscar-filmes\buscar-filmes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], BuscarFilmesPage);
    return BuscarFilmesPage;
}());

//# sourceMappingURL=buscar-filmes.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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






var CategoriaPage = /** @class */ (function () {
    function CategoriaPage(navCtrl, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.menu2 = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
    CategoriaPage.prototype.verificarstatus = function () {
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
    CategoriaPage.prototype.onKey = function (event, n, t) {
        if (event.key === "Enter") {
            this.varFilme(n, t);
        }
    };
    CategoriaPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    CategoriaPage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    CategoriaPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    CategoriaPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    CategoriaPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    CategoriaPage.prototype.varFilme = function (n, t) {
        this.navCtrl.push('FilmescatPage', { id: n, nome: t });
    };
    CategoriaPage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.categorias().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    CategoriaPage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    CategoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoria',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categoria\categoria.html"*/'\n\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n    <ion-grid>\n        <ion-row>\n\n\n\n                <ion-col col-2 class="esconder-menu" >\n\n                    <ion-list style="border-color: transparent !important;">\n\n\n\n\n                      <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                        <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                        <br>\n\n                      {{p.title}}\n                        </button>\n\n\n                      </ion-list>\n                  </ion-col>\n\n                  <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n<h2>Categorias de Filmes</h2>\n\n                      <ion-row>\n          <ion-col col-lg-2 col-sm-3 col-12 *ngFor="let l of lista" >\n\n            <button class="DivCat caixa-cat"  (keyup)="onKey($event,l.ID_CAT, l.NOME)" (click)="varFilme(l.ID_CAT, l.NOME)"> {{l.NOME}} </button>\n\n\n          </ion-col>\n\n\n        </ion-row>\n        </ion-col>\n\n\n\n\n\n\n      </ion-row>\n      </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categoria\categoria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CategoriaPage);
    return CategoriaPage;
}());

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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






var CategoriaSeriePage = /** @class */ (function () {
    function CategoriaSeriePage(navCtrl, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.menu2 = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
    CategoriaSeriePage.prototype.onKey = function (event, n, t) {
        if (event.key === "Enter") {
            this.varFilme(n, t);
        }
    };
    CategoriaSeriePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    CategoriaSeriePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    CategoriaSeriePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    CategoriaSeriePage.prototype.verificarstatus = function () {
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
    CategoriaSeriePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    CategoriaSeriePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    CategoriaSeriePage.prototype.varFilme = function (n, t) {
        this.navCtrl.push('SerieCatPage', { id: n, nome: t });
    };
    CategoriaSeriePage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.categorias().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    CategoriaSeriePage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    CategoriaSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoria-serie',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categoria-serie\categoria-serie.html"*/'\n<ion-content padding class="background-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n    <ion-grid>\n        <ion-row>\n\n\n\n                <ion-col col-2 class="esconder-menu">\n\n                    <ion-list style="border-color: transparent !important;">\n\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n\n                      </ion-list>\n                  </ion-col>\n\n                  <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n<h2>Categorias de Séries</h2>\n<ion-row>\n\n\n        <ion-col col-lg-2 col-sm-3 col-12 *ngFor="let l of lista">\n\n          <button  class="DivCat caixa-cat" (keyup)="onKey($event,l.ID_CAT, l.NOME)"  (click)="varFilme(l.ID_CAT, l.NOME)"> {{l.NOME}} </button>\n\n        </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\categoria-serie\categoria-serie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CategoriaSeriePage);
    return CategoriaSeriePage;
}());

//# sourceMappingURL=categoria-serie.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdultoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdultoPage = /** @class */ (function () {
    function AdultoPage(ApiProvider, navCtrl, navParams) {
        this.ApiProvider = ApiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CONTA = 0;
        this.PIN = localStorage.getItem('PIN');
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
    AdultoPage.prototype.verificarstatus = function () {
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdultoPage.prototype.ionViewDidEnter = function () {
        //this.carregarFeed();
        //this.carregarFeed2();
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    AdultoPage.prototype.contar = function (event, n) {
        if (event.key === "Enter") {
            this.ir();
        }
    };
    AdultoPage.prototype.ir2 = function (event) {
        if (event.key === "Enter") {
        }
    };
    AdultoPage.prototype.ir = function () {
        var _this = this;
        if (this.PIN === this.PIN2) {
            this.navCtrl.setRoot('AdultoFilmesPage');
        }
        else {
            console.log("INCORRETO");
            __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("PIN INCORRETO!", "Tente novamente ou entre em contato com o suporte.", "error").then(function (value) {
                _this.navCtrl.setRoot('AdultoPage');
            });
        }
    };
    AdultoPage.prototype.filmes = function () {
        this.navCtrl.setRoot('KidsfilmePage');
    };
    AdultoPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    AdultoPage.prototype.series = function () {
        this.navCtrl.setRoot('KidsseriePage');
    };
    AdultoPage.prototype.onKeyS = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    AdultoPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    AdultoPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], AdultoPage.prototype, "sInput", void 0);
    AdultoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adulto',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\adulto\adulto.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n              </button>\n\n\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n                  <h2 style="color: #fff">Digite o PIN para acessar</h2>\n\n\n                    <ion-item class="ion-item" >\n\n                      <ion-input type="number"   #searchInput max="4" placeholder="Digite o PIN de 4 digitos" class="ion-input3" (keyup)="contar($event, \'1\')" value="{{teste}}" [(ngModel)]="PIN2" style="color: #fff !important;" ></ion-input>\n\n                    </ion-item>\n                    <button ion-button class="btn-avancar" (click)="ir()" (keyup)="ir2($event)"  style="width: 100%;" >ENTRAR</button>\n\n\n\n              </ion-col>\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\adulto\adulto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdultoPage);
    return AdultoPage;
}());

//# sourceMappingURL=adulto.js.map

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

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbrevePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(42);
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





var EmbrevePage = /** @class */ (function () {
    function EmbrevePage(navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.USER = localStorage.getItem('USUARIO');
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
    }
    EmbrevePage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    EmbrevePage.prototype.onKeySerie = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varSerie(nextElement);
        }
    };
    EmbrevePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    EmbrevePage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    EmbrevePage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalhebrevePage', { id: n });
    };
    EmbrevePage.prototype.varSerie = function (n) {
        this.navCtrl.push('DetalhebrevesPage', { id: n });
    };
    EmbrevePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando favoritos..."
        });
        this.loader.present();
    };
    EmbrevePage.prototype.AbreCarregando2 = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando tela inicial..."
        });
        this.loader.present();
    };
    EmbrevePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    EmbrevePage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.embreve(this.USER).subscribe(function (data) {
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
    EmbrevePage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
        this.menuCtrl.enable(true, 'myMenu');
    };
    EmbrevePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-embreve',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\embreve\embreve.html"*/'\n\n\n<ion-content padding class="fundo-body">\n  <button ion-button  menuToggle class="menu">\n      <ion-icon name="menu" style="color: #fff" ></ion-icon>\n    </button>\n\n  <ion-grid>\n      <ion-row>\n\n        <ion-col col-2   class="esconder-menu">\n            <ion-list style="border-color: transparent !important;">\n\n\n\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n\n\n              </ion-list>\n          </ion-col>\n\n\n          <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="height: 100px">\n\n\n\n\n\n              <div style="width: 100%; height: 10px"></div>\n\n\n\n                          <h1 style="color: #fff">Filmes em breve</h1>\n                        <div style="width: 100%"></div>\n\n\n\n\n                        <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 400px;" *ngIf="STATUS == \'1\'">\n\n\n\n                          <button ion-button *ngFor="let l of lista"  class="caixa-capa" style="width: 240px; height: 355px !important; "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n\n                            <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                            <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n                            <span class="fundo-capa"></span>\n                            <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n                           </button>\n\n                     </ion-scroll>\n\n                     <div *ngIf="STATUS == \'0\'">\n                        <p style="color: #ff0224">Nenhum filme</p>\n                                         </div>\n\n\n\n                <div style="width: 100%; height: 50px"></div>\n\n\n\n\n                    <h1 style="color: #fff">Séries em breve</h1>\n                  <div style="width: 100%"></div>\n                  <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 400px;" *ngIf="STATUS2 == \'1\'">\n\n\n\n                    <button ion-button *ngFor="let l of listaS"  class="caixa-capa" style="width: 240px; height: 355px !important" (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n                      <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n                      <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n                      <span class="fundo-capa"></span>\n                      <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n                  </button>\n\n               </ion-scroll>\n\n               <div *ngIf="STATUS2 == \'0\'">\n<p style="color: #ff0224">Nenhuma série</p>\n               </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              <div style="width: 100%; height: 50px"></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                    </ion-col>\n\n\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\embreve\embreve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], EmbrevePage);
    return EmbrevePage;
}());

//# sourceMappingURL=embreve.js.map

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

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeFilmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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






var HomeFilmePage = /** @class */ (function () {
    function HomeFilmePage(navCtrl, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.isRefreshing = false;
        this.page = 1;
        this.pages = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */] },
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
        this.chamarlista();
        this.verificarstatus();
    }
    HomeFilmePage.prototype.verificarstatus = function () {
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
    HomeFilmePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    HomeFilmePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomeFilmePage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    HomeFilmePage.prototype.onKeyVERMAIS = function (event) {
        if (event.key === "Enter") {
            this.doInfinite(1);
        }
    };
    HomeFilmePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    HomeFilmePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando filmes..."
        });
        this.loader.present();
    };
    HomeFilmePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    HomeFilmePage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    HomeFilmePage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.TodosFilmes().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            console.log(_this.lista);
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
        this.FechaCarregando();
    };
    HomeFilmePage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.TodosFilmes(this.page).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.DADOS);
                // this.infiniteScroll.complete();
            }
            else {
                _this.lista = objeto_retorno.DADOS;
            }
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        });
    };
    HomeFilmePage.prototype.ionViewDidEnter = function () {
        //this.carregarFeed();
    };
    HomeFilmePage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    HomeFilmePage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    HomeFilmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-filme',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home-filme\home-filme.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-2 class="esconder-menu" >\n          <ion-list style="border-color: transparent !important;">\n\n\n\n\n            <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n              <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n              <br>\n\n            {{p.title}}\n\n              </button>\n\n\n            </ion-list>\n        </ion-col>\n\n  <ion-col col-12 col-md-10 col-lg-10 col-xl-10  style="height: 100px">\n        <ion-row>\n\n      <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista">\n <div *ngIf="l.STATUS == 1">\n    <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n         <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent; padding: 0px; " class="caixa-capa" (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n          <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n          <span class="fundo-capa"></span>\n          <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n        </button>\n  </div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n <button  (keyup)="onKeyVERMAIS($event)"  class="botao-ver-mais" ion-button style="width: 100%; background-color: transparent; " (click)="doInfinite(1)">VER MAIS</button>\n<br><br>\n\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home-filme\home-filme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomeFilmePage);
    return HomeFilmePage;
}());

//# sourceMappingURL=home-filme.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KidsPage = /** @class */ (function () {
    function KidsPage(navCtrl, navParams, ApiProvider) {
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
    KidsPage.prototype.verificarstatus = function () {
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    KidsPage.prototype.filmes = function () {
        this.navCtrl.setRoot('KidsfilmePage');
    };
    KidsPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    KidsPage.prototype.series = function () {
        this.navCtrl.setRoot('KidsseriePage');
    };
    KidsPage.prototype.walt = function () {
        this.navCtrl.setRoot('KidswaltdisneyPage');
    };
    KidsPage.prototype.onKeyS = function (event) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    KidsPage.prototype.onKeyD = function (event) {
        if (event.key === "Enter") {
            this.walt();
        }
    };
    KidsPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    KidsPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    KidsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kids',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\kids\kids.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n\n                      </button>\n\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n                  <h2 style="color: #fff">Escolha uma opção</h2>\n                  <ion-row>\n\n                      <ion-col col-12 col-md-4  >\n                          <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event)" (click)="filmes()">\n\n                           <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                          </button>\n\n                        </ion-col>\n\n\n                      <ion-col col-12 col-md-4  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeyS($event)"  (click)="series()">\n\n                 <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n                </button>\n\n              </ion-col>\n\n\n\n              <ion-col col-12 col-md-4  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeyD($event)"  (click)="walt()">\n\n                 <img src="assets/imgs/walt_disney_PNG28.png" style="width: 70% !important">\n\n                </button>\n\n              </ion-col>\n            </ion-row>\n\n\n              </ion-col>\n\n\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\kids\kids.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], KidsPage);
    return KidsPage;
}());

//# sourceMappingURL=kids.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LancamentosPage = /** @class */ (function () {
    function LancamentosPage(navCtrl, ApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.isRefreshing = false;
        this.page = 1;
        this.pages = [
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
        // this.chamarlista();
        this.verificarstatus();
    }
    LancamentosPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    LancamentosPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    LancamentosPage.prototype.onKeys = function (event, nextElement) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    LancamentosPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    LancamentosPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    LancamentosPage.prototype.filmes = function () {
        this.navCtrl.setRoot('LancamentosFilmesPage');
    };
    LancamentosPage.prototype.series = function () {
        this.navCtrl.setRoot('LancamentosSeriesPage');
    };
    LancamentosPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando filmes..."
        });
        this.loader.present();
    };
    LancamentosPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    LancamentosPage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    LancamentosPage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.LancamentosFilmes().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            console.log(_this.lista);
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
        this.FechaCarregando();
    };
    LancamentosPage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.LancamentosFilmes(this.page).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.DADOS);
                // this.infiniteScroll.complete();
            }
            else {
                _this.lista = objeto_retorno.DADOS;
            }
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
            if (_this.isRefreshing) {
                _this.refresher.complete();
                _this.isRefreshing = false;
            }
        });
    };
    LancamentosPage.prototype.ionViewDidEnter = function () {
        //this.carregarFeed();
    };
    LancamentosPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    LancamentosPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    LancamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lancamentos',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\lancamentos\lancamentos.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2 class="esconder-menu">\n              <ion-list style="border-color: transparent !important;  padding: 0px !important">\n\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                  </button>\n\n                </ion-list>\n            </ion-col>\n\n            <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n                <h2 style="color: #fff">Escolha uma opção</h2>\n                <ion-row>\n\n                    <ion-col col-12 col-md-6  >\n                        <button ion-button  class="caixa-capa caixa-menu" style="width: 100%; padding: 20px"  (keyup)="onKey($event)" (click)="filmes()" >\n\n                         <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                        </button>\n\n                      </ion-col>\n\n\n                    <ion-col col-12 col-md-6  >\n              <button ion-button  class="caixa-capa caixa-menu" style="width: 100%; padding: 20px"  (keyup)="onKeys($event)" (click)="series()" >\n\n               <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n              </button>\n\n            </ion-col>\n          </ion-row>\n\n\n\n\n\n\n              </ion-col>\n\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\lancamentos\lancamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LancamentosPage);
    return LancamentosPage;
}());

//# sourceMappingURL=lancamentos.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LegendadosPage = /** @class */ (function () {
    function LegendadosPage(ApiProvider, navCtrl, navParams) {
        this.ApiProvider = ApiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    LegendadosPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    LegendadosPage.prototype.filmes = function () {
        this.navCtrl.setRoot('LegendadosFilmesPage');
    };
    LegendadosPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    LegendadosPage.prototype.series = function () {
        this.navCtrl.setRoot('LegendadosSeriesPage');
    };
    LegendadosPage.prototype.onKeyS = function (event) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    LegendadosPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    LegendadosPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    LegendadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legendados',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\legendados\legendados.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n\n                      </button>\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n                  <h2 style="color: #fff">Escolha uma opção</h2>\n                  <ion-row>\n\n                      <ion-col col-12  col-md-6 col-lg-6 col-xl-6 >\n                          <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event)" (click)="filmes()">\n\n                           <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                          </button>\n\n                        </ion-col>\n\n\n                      <ion-col col-12  col-md-6 col-lg-6 col-xl-6  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeyS($event)"  (click)="series()">\n\n                 <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n                </button>\n\n              </ion-col>\n            </ion-row>\n\n\n              </ion-col>\n\n\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\legendados\legendados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LegendadosPage);
    return LegendadosPage;
}());

//# sourceMappingURL=legendados.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
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








var OpcaoPage = /** @class */ (function () {
    function OpcaoPage(navCtrl, ApiProvider, MenuProvider, loadingCtrl, splashScreen, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.MenuProvider = MenuProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.pages = [
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
        this.isRefreshing = false;
        this.page = 1;
        this.PLAY = localStorage.getItem('PLAY');
        splashScreen.hide();
        this.config(this.PLAY);
        this.verificarstatus();
    }
    OpcaoPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    OpcaoPage.prototype.openDeveloper = function (id) {
        window.open('market://developer?id=' + id, '_system', 'location=yes');
    };
    OpcaoPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Player alterado com sucesso!',
            duration: 3000
        });
        toast.present();
    };
    OpcaoPage.prototype.verificarstatus = function () {
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
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    OpcaoPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    OpcaoPage.prototype.onKey = function (event, nextElement) {
        console.log(event.key);
        if (event.key === "Enter") {
            this.SavePlay(nextElement);
        }
    };
    OpcaoPage.prototype.SavePlay = function (n) {
        localStorage.setItem("PLAY", n);
        this.config(n);
        // swal("Pronto!", "Player padrão alterado com sucesso!", "success");
        this.presentToast();
    };
    OpcaoPage.prototype.config = function (n) {
        if (n === "1") {
            this.PLAYER = "MX PLAYER";
        }
        else if (n === "2") {
            this.PLAYER = "VLC PLAYER";
        }
        else if (n === "3") {
            this.PLAYER = "PLAYER NATIVO";
        }
        else if (n === "4") {
            this.PLAYER = "PLAYER HTML5";
        }
    };
    OpcaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opcao',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\opcao\opcao.html"*/'<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n  <ion-grid>\n      <ion-row>\n\n        <ion-col col-2 class="esconder-menu">\n            <ion-list style="border-color: transparent !important;  padding: 0px !important">\n\n\n\n\n\n\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n\n\n\n              </ion-list>\n          </ion-col>\n\n    <ion-col col-12 col-md-10 col-lg-10 col-xl-10  style="height: 100px">\n\n\n\n\n\n  <div style="width: 100%; height: 10px"></div>\n\n\n  <h3 style="color: #fff">Player configurado: <B>{{PLAYER}}</B></h3>\n  <div style="width: 100%; "></div>\n              <h1 style="color: #fff">Escolha outro player desejado</h1>\n            <div style="width: 100%"></div>\n\n\n            <ion-row>\n\n\n              <ion-col col-12 col-md-4 col-lg-4 col-xl-4  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event, \'7\')" (click)="SavePlay(\'7\')" >\n\n                 <img src="assets/imgs/NightVideoPlayer.png" style="width: 70% !important">\n\n                </button>\n                <button  class="caixa-baixar" ion-button full (keyup)="onKey($event, \'com.rz.night.player\')" (click)="SavePlay(\'com.rz.night.player\')">Baixar MX Player</button>\n              </ion-col>\n\n              <ion-col col-12 col-md-4 col-lg-4 col-xl-4  >\n                  <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event, \'1\')" (click)="SavePlay(\'1\')" >\n\n                   <img src="assets/imgs/mxp.png" style="width: 70% !important">\n\n                  </button>\n                  <button  class="caixa-baixar" ion-button full (keyup)="onKey($event, \'com.mxtech.videoplayer.ad\')" (click)="SavePlay(\'com.mxtech.videoplayer.ad\')">Baixar MX Player</button>\n                </ion-col>\n\n\n              <ion-col col-12 col-md-4 col-lg-4 col-xl-4  >\n        <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event, \'2\')"  (click)="SavePlay(\'2\')">\n\n         <img src="assets/imgs/vlc.png" style="width: 70% !important">\n\n        </button>\n        <button ion-button full  class="caixa-baixar" (keyup)="onKey($event, \'org.videolan.vlc\')" (click)="SavePlay(\'org.videolan.vlc\')">Baixar VLC Player</button>\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 col-lg-4 col-xl-4  >\n        <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event, \'3\')"  (click)="SavePlay(\'3\')">\n\n         <img src="assets/imgs/android.png" style="width: 70% !important">\n\n        </button>\n\n      </ion-col>\n\n\n    <ion-col col-12 col-md-4 col-lg-4 col-xl-4 >\n        <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event, \'4\')"  (click)="SavePlay(\'4\')">\n\n         <img src="assets/imgs/html5.png" style="width: 70% !important">\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n\n        </ion-col>\n\n\n\n\n\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\opcao\opcao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], OpcaoPage);
    return OpcaoPage;
}());

//# sourceMappingURL=opcao.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirPage; });
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





var PedirPage = /** @class */ (function () {
    function PedirPage(navCtrl, navController, ApiProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navController = navController;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
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
    PedirPage.prototype.verificarstatus = function () {
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
    PedirPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.enviar();
        }
    };
    PedirPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    PedirPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    PedirPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    PedirPage.prototype.enviar = function () {
        var _this = this;
        this.AbreCarregando();
        this.ApiProvider.enviar(this.TITULO).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Enviado com sucesso!", "", "success").then(function (value) {
                _this.navCtrl.setRoot('PedirPage');
            });
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    PedirPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    PedirPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], PedirPage.prototype, "sInput", void 0);
    PedirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedir',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\pedir\pedir.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n\n                      </button>\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n                  <h2 style="color: #fff">Digite o filme que deseja </h2>\n\n                  <ion-item class="ion-item" >\n\n                      <ion-input type="text"   #searchInput m placeholder="Digite aqui" class="ion-input3" [(ngModel)]="TITULO" style="color: #fff !important;" (keyup)="onKey($event, \'1\')"></ion-input>\n\n                    </ion-item>\n                    <button ion-button class="btn-avancar" (keyup)="onKey($event, \'1\')" (click)="enviar()"  style="width: 100%;" >ENVIAR</button>\n\n\n              </ion-col>\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\pedir\pedir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PedirPage);
    return PedirPage;
}());

//# sourceMappingURL=pedir.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PesquisarPage = /** @class */ (function () {
    function PesquisarPage(ApiProvider, navCtrl, navParams) {
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
    PesquisarPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    PesquisarPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    PesquisarPage.prototype.onKeys = function (event) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    PesquisarPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    PesquisarPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    PesquisarPage.prototype.filmes = function () {
        this.navCtrl.setRoot('BuscarFilmesPage');
    };
    PesquisarPage.prototype.series = function () {
        this.navCtrl.setRoot('BuscarSeriesPage');
    };
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\pesquisar\pesquisar.html"*/'\n\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n    <ion-grid>\n        <ion-row>\n\n          <ion-col col-2  class="esconder-menu">\n              <ion-list style="border-color: transparent !important;">\n\n\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                  </button>\n\n                </ion-list>\n            </ion-col>\n\n            <ion-col col-12 col-md-10 col-lg-10 col-xl-10  >\n                <h2 style="color: #fff">Escolha uma opção</h2>\n                <ion-row>\n\n                    <ion-col col-12 col-md-6  >\n                        <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event)" (click)="filmes()">\n\n                         <img src="assets/imgs/filmes.png" style="width: 70% !important">\n\n                        </button>\n\n                      </ion-col>\n\n\n                    <ion-col col-12 col-md-6  >\n              <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeys($event)"  (click)="series()">\n\n               <img src="assets/imgs/tv.png" style="width: 70% !important">\n\n              </button>\n\n            </ion-col>\n          </ion-row>\n\n\n            </ion-col>\n\n        </ion-row>\n      </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\pesquisar\pesquisar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QrcodePage = /** @class */ (function () {
    function QrcodePage(ApiProvider, navCtrl, navParams) {
        this.ApiProvider = ApiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    QrcodePage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    QrcodePage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
        }
    };
    QrcodePage.prototype.onKeyS = function (event) {
        if (event.key === "Enter") {
        }
    };
    QrcodePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    QrcodePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrcode',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\qrcode\qrcode.html"*/'\n<ion-content padding class="background-body">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n                      </button>\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n\n                  <ion-row>\n\n                      <ion-col col-12 col-md-12  text-center>\n\n  <h2 style="color: #fff">Escaneie o qr code</h2>\n                        <img src="../assets/imgs/qrcode.png" width="450px">\n<br>\n<p>\n  Para instalar no celular você pode escanear o QR CODE<br>ou acessar pelo seu navegador o link bit.ly/xplayp2\n</p>\n                        </ion-col>\n\n\n\n            </ion-row>\n\n\n              </ion-col>\n\n\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\qrcode\qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuatrokPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuatrokPage = /** @class */ (function () {
    function QuatrokPage(ApiProvider, navCtrl, navParams) {
        this.ApiProvider = ApiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PREMIUM = localStorage.getItem('PREMIUM');
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
    QuatrokPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    QuatrokPage.prototype.filmes = function () {
        this.navCtrl.setRoot('QuatrokfilmesPage');
    };
    QuatrokPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.filmes();
        }
    };
    QuatrokPage.prototype.series = function () {
        this.navCtrl.setRoot('QuatrokseriesPage');
    };
    QuatrokPage.prototype.onKeyS = function (event) {
        if (event.key === "Enter") {
            this.series();
        }
    };
    QuatrokPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    QuatrokPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    QuatrokPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quatrok',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\quatrok\quatrok.html"*/'\n<ion-content padding class="background-body4k">\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n  <ion-grid>\n      <ion-row>\n\n\n\n              <ion-col col-2 class="esconder-menu" >\n\n                  <ion-list style="border-color: transparent !important;">\n\n\n\n\n                    <button id="menu" menuClose ion-item no-lines *ngFor="let p of menu2" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                      <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                      <br>\n\n                    {{p.title}}\n                      </button>\n\n                    </ion-list>\n                </ion-col>\n\n                <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n\n<div *ngIf="PREMIUM == \'1\'">\n                  <bR>\n                <h1 style="color: #fff; text-align: center">SELECIONE UMA OPÇÃO</h1>\n <br>\n                  <ion-row>\n\n                      <ion-col col-12 col-md-6  >\n                          <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKey($event)" (click)="filmes()">\n\n                           <img src="assets/imgs/filmes4k.png" style="width: 70% !important">\n\n                          </button>\n\n                        </ion-col>\n\n\n                      <ion-col col-12 col-md-6  >\n                <button ion-button  class="caixa-capa" style="width: 100%; padding: 20px" (keyup)="onKeyS($event)"  (click)="series()">\n\n                 <img src="assets/imgs/series4k.png" style="width: 70% !important">\n\n                </button>\n\n              </ion-col>\n            </ion-row>\n\n  </div>\n\n\n\n  <div *ngIf="PREMIUM == \'0\'">\n    <bR>\n      <h1 style="color: #fff; text-align: center">Acesso negado!\n        <br>\n        Entre em contato com o suporte para mais informações.</h1>\n<br>\n\n  </div>\n\n              </ion-col>\n\n\n\n\n    </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\quatrok\quatrok.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuatrokPage);
    return QuatrokPage;
}());

//# sourceMappingURL=quatrok.js.map

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

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenovarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__embreve_embreve__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favoritos_favoritos__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lancamentos_lancamentos__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kids_kids__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__legendados_legendados__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quatrok_quatrok__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_filme_home_filme__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_serie_home_serie__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categorias_categorias__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pesquisar_pesquisar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__adulto_adulto__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pedir_pedir__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__qrcode_qrcode__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__opcao_opcao__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__conta_vencida_conta_vencida__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_api__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















/**
 * Generated class for the RenovarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenovarPage = /** @class */ (function () {
    function RenovarPage(navCtrl, navController, ApiProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navController = navController;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.menu = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */] },
            { icon: "ios-clock", title: 'Em Breve', component: __WEBPACK_IMPORTED_MODULE_3__embreve_embreve__["a" /* EmbrevePage */] },
            { icon: "ios-heart", title: 'Favoritos', component: __WEBPACK_IMPORTED_MODULE_4__favoritos_favoritos__["a" /* FavoritosPage */] },
            { icon: "ios-star", title: 'Lançamentos', component: __WEBPACK_IMPORTED_MODULE_5__lancamentos_lancamentos__["a" /* LancamentosPage */] },
            { icon: "ios-football", title: 'Kids', component: __WEBPACK_IMPORTED_MODULE_6__kids_kids__["a" /* KidsPage */] },
            { icon: "ios-closed-captioning", title: 'Legendados', component: __WEBPACK_IMPORTED_MODULE_7__legendados_legendados__["a" /* LegendadosPage */] },
            { icon: "ios-easel-outline", title: '4k', component: __WEBPACK_IMPORTED_MODULE_8__quatrok_quatrok__["a" /* QuatrokPage */] },
            { icon: "ios-film", title: 'Todos os Filmes', component: __WEBPACK_IMPORTED_MODULE_9__home_filme_home_filme__["a" /* HomeFilmePage */] },
            { icon: "ios-desktop-outline", title: 'Todas as Séries', component: __WEBPACK_IMPORTED_MODULE_10__home_serie_home_serie__["a" /* HomeSeriePage */] },
            { icon: "ios-folder-open", title: 'Categorias', component: __WEBPACK_IMPORTED_MODULE_11__categorias_categorias__["a" /* CategoriasPage */] },
            { icon: "ios-search", title: 'Pesquisar', component: __WEBPACK_IMPORTED_MODULE_12__pesquisar_pesquisar__["a" /* PesquisarPage */] },
            { icon: "ios-lock", title: 'XXX', component: __WEBPACK_IMPORTED_MODULE_13__adulto_adulto__["a" /* AdultoPage */] },
            { icon: "ios-send", title: 'Pedir Filme e Séries', component: __WEBPACK_IMPORTED_MODULE_14__pedir_pedir__["a" /* PedirPage */] },
            { icon: "ios-phone-portrait-outline", title: 'Instale no celular', component: __WEBPACK_IMPORTED_MODULE_15__qrcode_qrcode__["a" /* QrcodePage */] },
            { icon: "ios-settings", title: 'Configurações', component: __WEBPACK_IMPORTED_MODULE_16__opcao_opcao__["a" /* OpcaoPage */] },
            { icon: "ios-card", title: 'Assinatura', component: __WEBPACK_IMPORTED_MODULE_18__conta_vencida_conta_vencida__["a" /* ContaVencidaPage */] },
            { icon: "ios-exit-outline", title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_17__login_login__["a" /* LoginPage */] },
        ];
        this.verificarstatus();
    }
    RenovarPage.prototype.verificarstatus = function () {
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
                __WEBPACK_IMPORTED_MODULE_19_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RenovarPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.enviar();
        }
    };
    RenovarPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando..."
        });
        this.loader.present();
    };
    RenovarPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    RenovarPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    RenovarPage.prototype.enviar = function () {
        var _this = this;
        this.AbreCarregando();
        var USR = localStorage.getItem('USUARIO');
        this.ApiProvider.renovar(USR).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            if (_this.lista.STATUS == '1') {
                __WEBPACK_IMPORTED_MODULE_19_sweetalert___default()("Renovado com sucesso!", "", "success").then(function (value) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_19_sweetalert___default()("Código inválido", "", "error").then(function (value) {
                });
            }
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    RenovarPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    RenovarPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], RenovarPage.prototype, "sInput", void 0);
    RenovarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-renovar',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\renovar\renovar.html"*/'\n<ion-content padding class="background-body">\n    <button ion-button  menuToggle class="menu">\n      <ion-icon name="menu" style="color: #fff" ></ion-icon>\n    </button>\n\n    <ion-grid>\n        <ion-row>\n\n\n\n                <ion-col col-2 class="esconder-menu" >\n\n                    <ion-list style="border-color: transparent !important;">\n                        <button menuClose ion-item no-lines *ngFor="let p of menu" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" style="background-color: transparent; color: #fff; font-size: 15px; "  class="botao-menu texto-menu">\n                          <ion-icon name="{{p.icon}}" style="font-size: 90px"></ion-icon>\n                          <br>\n\n                        {{p.title}}\n\n                        </button>\n\n                      </ion-list>\n                  </ion-col>\n\n                  <ion-col col-12 col-md-10 col-lg-10 col-xl-10 >\n                    <h2 style="color: #fff">Digite o código para renovar sua assinatura </h2>\n\n                    <ion-item class="ion-item" >\n\n                        <ion-input type="text"   #searchInput m placeholder="Digite aqui" class="ion-input3" [(ngModel)]="TITULO" style="color: #fff !important;" (keyup)="onKey($event, \'1\')"></ion-input>\n\n                      </ion-item>\n                      <button ion-button class="btn-avancar botao-play botao-detalhe" (keyup)="onKey($event, \'1\')" (click)="enviar()"  style="width: 100%;" >RENOVAR</button>\n\n\n                </ion-col>\n\n\n\n\n      </ion-row>\n      </ion-grid>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\renovar\renovar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_20__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RenovarPage);
    return RenovarPage;
}());

//# sourceMappingURL=renovar.js.map

/***/ })

});
//# sourceMappingURL=3.js.map