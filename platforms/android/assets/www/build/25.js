webpackJsonp([25],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcaoPageModule", function() { return OpcaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opcao__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpcaoPageModule = /** @class */ (function () {
    function OpcaoPageModule() {
    }
    OpcaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opcao__["a" /* OpcaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opcao__["a" /* OpcaoPage */]),
            ],
        })
    ], OpcaoPageModule);
    return OpcaoPageModule;
}());

//# sourceMappingURL=opcao.module.js.map

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

/***/ })

});
//# sourceMappingURL=25.js.map