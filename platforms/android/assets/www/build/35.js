webpackJsonp([35],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmescatPageModule", function() { return FilmescatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filmescat__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilmescatPageModule = /** @class */ (function () {
    function FilmescatPageModule() {
    }
    FilmescatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filmescat__["a" /* FilmescatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filmescat__["a" /* FilmescatPage */]),
            ],
        })
    ], FilmescatPageModule);
    return FilmescatPageModule;
}());

//# sourceMappingURL=filmescat.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmescatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmescatPage = /** @class */ (function () {
    function FilmescatPage(navCtrl, navController, ApiProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navController = navController;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.NOME = this.navParams.get("nome");
        this.isRefreshing = false;
        this.page = 1;
        this.pages = [
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
    }
    FilmescatPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    FilmescatPage.prototype.onKey = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varFilme(nextElement);
        }
    };
    FilmescatPage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            this.openPage(nextElement);
        }
    };
    FilmescatPage.prototype.onKeyVERMAIS = function (event) {
        if (event.key === "Enter") {
            this.doInfinite(1);
        }
    };
    FilmescatPage.prototype.voltar = function () {
        this.navController.pop();
    };
    FilmescatPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando filmes..."
        });
        this.loader.present();
    };
    FilmescatPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    FilmescatPage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    FilmescatPage.prototype.carregarFeed = function () {
        var _this = this;
        this.AbreCarregando();
        var id = this.navParams.get("id");
        this.ApiProvider.CatFilmes(id, this.page).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            _this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    FilmescatPage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        var id = this.navParams.get("id");
        this.AbreCarregando();
        this.ApiProvider.CatFilmes(id, this.page).subscribe(function (data) {
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
    FilmescatPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    FilmescatPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    FilmescatPage.prototype.ionViewDidEnter = function () {
        this.carregarFeed();
    };
    FilmescatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filmescat',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\filmescat\filmescat.html"*/'\n<ion-content padding class="background-body">\n    <button ion-button  menuToggle class="menu">\n        <ion-icon name="menu" style="color: #fff" ></ion-icon>\n      </button>\n\n      <ion-grid>\n          <ion-row>\n\n            <ion-col col-2  class="esconder-menu">\n                <ion-list style="border-color: transparent !important;">\n\n\n\n\n                  <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                    <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                    <br>\n\n                  {{p.title}}\n\n                    </button>\n\n\n                  </ion-list>\n              </ion-col>\n\n        <ion-col col-12 col-md-10 col-lg-10 col-xl-10  style="height: 100px">\n            <ion-buttons left>\n                <button ion-button icon-only class="voltar" (click)="voltar()" style="background-color: transparent">\n                    <ion-icon name="arrow-back"></ion-icon> voltar &nbsp;&nbsp;\n                </button>\n              </ion-buttons>\n\n\n              <ion-row>\n\n            <ion-col col-lg-2 col-sm-3 col-4 *ngFor="let l of lista">\n       <div *ngIf="l.STATUS == 1">\n          <div class="estrela-capa"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n               <button ion-button  style="box-shadow: 1px 2px 20px #000; background-color: transparent; padding: 0px; " class="caixa-capa" (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)"  >\n                <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n                <span class="fundo-capa"></span>\n                <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n              </button>\n        </div>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n\n        <button (keyup)="onKeyVERMAIS($event)" (click)="doInfinite(1)"  class="botao-ver-mais" ion-button style="width: 100%; background-color: transparent; ">VER MAIS</button>\n        <br><br>\n\n\n            </ion-col>\n\n\n\n\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\filmescat\filmescat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FilmescatPage);
    return FilmescatPage;
}());

//# sourceMappingURL=filmescat.js.map

/***/ })

});
//# sourceMappingURL=35.js.map