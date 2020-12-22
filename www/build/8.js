webpackJsonp([8],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilmePageModule", function() { return HomeFilmePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_filme__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeFilmePageModule = /** @class */ (function () {
    function HomeFilmePageModule() {
    }
    HomeFilmePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_filme__["a" /* HomeFilmePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_filme__["a" /* HomeFilmePage */]),
            ],
        })
    ], HomeFilmePageModule);
    return HomeFilmePageModule;
}());

//# sourceMappingURL=home-filme.module.js.map

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

/***/ })

});
//# sourceMappingURL=8.js.map