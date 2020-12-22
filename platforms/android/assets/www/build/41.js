webpackJsonp([41],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarSeriesPageModule", function() { return BuscarSeriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_series__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuscarSeriesPageModule = /** @class */ (function () {
    function BuscarSeriesPageModule() {
    }
    BuscarSeriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buscar_series__["a" /* BuscarSeriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buscar_series__["a" /* BuscarSeriesPage */]),
            ],
        })
    ], BuscarSeriesPageModule);
    return BuscarSeriesPageModule;
}());

//# sourceMappingURL=buscar-series.module.js.map

/***/ }),

/***/ 335:
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

/***/ })

});
//# sourceMappingURL=41.js.map