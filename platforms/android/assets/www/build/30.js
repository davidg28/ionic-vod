webpackJsonp([30],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LancamentosSeriesPageModule", function() { return LancamentosSeriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lancamentos_series__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LancamentosSeriesPageModule = /** @class */ (function () {
    function LancamentosSeriesPageModule() {
    }
    LancamentosSeriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lancamentos_series__["a" /* LancamentosSeriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lancamentos_series__["a" /* LancamentosSeriesPage */]),
            ],
        })
    ], LancamentosSeriesPageModule);
    return LancamentosSeriesPageModule;
}());

//# sourceMappingURL=lancamentos-series.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentosSeriesPage; });
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





var LancamentosSeriesPage = /** @class */ (function () {
    function LancamentosSeriesPage(navCtrl, ApiProvider, loadingCtrl) {
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
        this.chamarlista();
        this.verificarstatus();
    }
    LancamentosSeriesPage.prototype.verificarstatus = function () {
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
    LancamentosSeriesPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    LancamentosSeriesPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    LancamentosSeriesPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    LancamentosSeriesPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando séries..."
        });
        this.loader.present();
    };
    LancamentosSeriesPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    LancamentosSeriesPage.prototype.varFilme = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    LancamentosSeriesPage.prototype.carregarFeed = function () {
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
    LancamentosSeriesPage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.LancamentosSeries(this.page).subscribe(function (data) {
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
    LancamentosSeriesPage.prototype.ionViewDidEnter = function () {
        //this.carregarFeed();
    };
    LancamentosSeriesPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    LancamentosSeriesPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    LancamentosSeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lancamentos-series',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\lancamentos-series\lancamentos-series.html"*/'\n<ion-content padding class="fundo-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-2  class="esconder-menu">\n            <ion-list style="border-color: transparent !important;">\n\n\n\n\n              <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                <br>\n\n              {{p.title}}\n\n                </button>\n\n              </ion-list>\n          </ion-col>\n\n    <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="height: 100px">\n          <ion-row>\n\n        <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista">\n   <div *ngIf="l.STATUS == 1">\n      <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n           <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent;  padding: 0px; " class="caixa-capa" (keyup)="onKey($event,l.ID_SERIE)" (click)="varFilme(l.ID_SERIE)"  >\n            <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n            <span class="fundo-capa"></span>\n            <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n          </button>\n    </div>\n        </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n   <button (click)="doInfinite(1)" (keyup)="onKeyVERMAIS($event)" ion-button style="width: 100%; background-color: transparent; " class="botao-ver-mais">VER MAIS</button>\n  <br><br>\n\n\n        </ion-col>\n\n\n\n\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n\n  </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\lancamentos-series\lancamentos-series.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LancamentosSeriesPage);
    return LancamentosSeriesPage;
}());

//# sourceMappingURL=lancamentos-series.js.map

/***/ })

});
//# sourceMappingURL=30.js.map