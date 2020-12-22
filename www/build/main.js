webpackJsonp([48],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/abrir-video/abrir-video.module": [
		286,
		46
	],
	"../pages/abrirserie/abrirserie.module": [
		284,
		45
	],
	"../pages/adulto-filmes/adulto-filmes.module": [
		287,
		44
	],
	"../pages/adulto/adulto.module": [
		285,
		43
	],
	"../pages/buscar-filmes/buscar-filmes.module": [
		291,
		42
	],
	"../pages/buscar-series/buscar-series.module": [
		288,
		41
	],
	"../pages/cadastrar/cadastrar.module": [
		290,
		40
	],
	"../pages/categoria-serie/categoria-serie.module": [
		292,
		12
	],
	"../pages/categoria/categoria.module": [
		289,
		11
	],
	"../pages/categorias/categorias.module": [
		297,
		39
	],
	"../pages/conta-vencida/conta-vencida.module": [
		295,
		38
	],
	"../pages/detalhe-filme/detalhe-filme.module": [
		293,
		1
	],
	"../pages/detalhebreve/detalhebreve.module": [
		294,
		14
	],
	"../pages/detalhebreves/detalhebreves.module": [
		296,
		13
	],
	"../pages/embreve/embreve.module": [
		298,
		37
	],
	"../pages/favoritos/favoritos.module": [
		299,
		36
	],
	"../pages/filmescat/filmescat.module": [
		300,
		35
	],
	"../pages/home-filme/home-filme.module": [
		301,
		8
	],
	"../pages/home-serie/home-serie.module": [
		302,
		10
	],
	"../pages/kids/kids.module": [
		304,
		34
	],
	"../pages/kidsfilme/kidsfilme.module": [
		303,
		33
	],
	"../pages/kidsserie/kidsserie.module": [
		306,
		7
	],
	"../pages/kidswaltdisney/kidswaltdisney.module": [
		305,
		32
	],
	"../pages/lancamentos-filmes/lancamentos-filmes.module": [
		307,
		31
	],
	"../pages/lancamentos-series/lancamentos-series.module": [
		311,
		30
	],
	"../pages/lancamentos/lancamentos.module": [
		308,
		29
	],
	"../pages/legendados-filmes/legendados-filmes.module": [
		310,
		28
	],
	"../pages/legendados-series/legendados-series.module": [
		318,
		6
	],
	"../pages/legendados/legendados.module": [
		309,
		27
	],
	"../pages/lembrete/lembrete.module": [
		312,
		26
	],
	"../pages/login/login.module": [
		313,
		47
	],
	"../pages/menu/menu.module": [
		316,
		9
	],
	"../pages/opcao/opcao.module": [
		315,
		25
	],
	"../pages/pagamento/pagamento.module": [
		314,
		24
	],
	"../pages/pedir/pedir.module": [
		317,
		23
	],
	"../pages/pesquisar/pesquisar.module": [
		319,
		22
	],
	"../pages/playerhtml5/playerhtml5.module": [
		320,
		21
	],
	"../pages/qrcode/qrcode.module": [
		321,
		20
	],
	"../pages/quatrok/quatrok.module": [
		324,
		19
	],
	"../pages/quatrokfilmes/quatrokfilmes.module": [
		322,
		0
	],
	"../pages/quatrokseries/quatrokseries.module": [
		323,
		2
	],
	"../pages/renovar/renovar.module": [
		325,
		3
	],
	"../pages/renovar2/renovar2.module": [
		326,
		4
	],
	"../pages/serie-cat/serie-cat.module": [
		327,
		5
	],
	"../pages/series-temp/series-temp.module": [
		329,
		18
	],
	"../pages/trailer/trailer.module": [
		330,
		17
	],
	"../pages/ver-serie/ver-serie.module": [
		328,
		16
	],
	"../pages/verep/verep.module": [
		331,
		15
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navParams, navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.USUARIO = this.navParams.get('USUARIO');
        this.SENHA = this.navParams.get('SENHA');
    }
    LoginPage.prototype.moveFocus = function (nextElement) {
        console.log(nextElement);
        nextElement.setFocus();
    };
    LoginPage.prototype.onKey = function (event, nextElement) {
        console.log(event.key);
        if (event.key === "Enter") {
            console.log(nextElement);
            nextElement.setFocus();
        }
    };
    LoginPage.prototype.onKey2 = function (event, nextElement, en) {
        if (event.key === "Enter") {
            //document.getElementById("ctl00_plcPrincipal_btnContrato").click();
            //en.setFocus();
            this.login();
        }
        else if (event.key === "ArrowUp") {
            nextElement.setFocus();
        }
        else if (event.key === "ArrowDown") {
            document.getElementById("ctl00_plcPrincipal_btnContrato").click();
        }
    };
    LoginPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Verificando dados..."
        });
        this.loader.present();
    };
    LoginPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.AbreCarregando();
        this.numero = Math.floor(Math.random() * 156747891789);
        this.ApiProvider.login(this.USUARIO, this.SENHA, this.numero).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            //console.log(this.lista);
            if (_this.lista.STATUS == 1) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                localStorage.setItem("LOGADO", _this.numero);
                localStorage.setItem("ETAPA", "1");
                localStorage.setItem("NOME", _this.lista.NOME);
                localStorage.setItem("PIN", _this.lista.PIN);
                localStorage.setItem("USUARIO", _this.USUARIO);
                localStorage.setItem("PREMIUM", _this.lista.PREMIUM);
                localStorage.setItem("PLAY", "3");
                //swal("Logado com sucesso!", "Seja bem vindo de volta " + this.lista.NOME, "success");
                _this.FechaCarregando();
            }
            else if (_this.lista.STATUS == 2) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Usuário ou senha incorretos!", "Tente novamente ou entre em contato com o administrador", "error");
                _this.FechaCarregando();
            }
            else if (_this.lista.STATUS == 0) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.FechaCarregando();
            }
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    LoginPage.prototype.cadastrar = function () {
        this.navCtrl.setRoot('CadastrarPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        this.menuCtrl.enable(false, 'myMenu');
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "sInput", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\login\login.html"*/'\n<ion-content padding class="background-body22">\n\n\n\n\n\n\n\n\n\n\n\n  <div style="height: 60px"></div>\n\n  <div style="max-width: 500px; margin: 0 auto;" >\n    <p style="color: #fff; text-align: center;"  class="font-padrao"><img src="assets/imgs/logow2.png" width="100%" >\n\n    </p>\n  </div>\n\n<div style="max-width: 500px; margin: 0 auto;" >\n\n    <h6 style="color: #fff; text-align: left;">Digite suas informações</h6>\n<!--<button ion-button  (click)="searchInput.setFocus()" style="width: 100%; background-color: #008645">Clique para digitar o usuário</button>\n-->\n    <ion-list>\n      <ion-item class="ion-item" >\n\n        <ion-input type="text"   #searchInput value="" placeholder="Usuário" class="ion-input3" [(ngModel)]="USUARIO" style="color: #fff !important; " (keyup)="onKey($event,b)"></ion-input>\n\n      </ion-item>\n        </ion-list>\n\n    <ion-list>\n\n      <ion-item class="ion-item" style="text-align: right">\n\n          <ion-input type="password" value="" #b placeholder="Senha" class="ion-input3" [(ngModel)]="SENHA" autocomplete="new-password" (keyup)="onKey2($event,searchInput,en)" style="color: #fff !important;"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button full #en class="btn-avancar botao-play botao-detalhe" id="ctl00_plcPrincipal_btnContrato" (click)="login()">\n      Entrar\n    </button>\n<br>\n    <button ion-button full #en class="btn-avancar botao-play botao-detalhe" id="ctl00_plcPrincipal_btnContrato" (click)="cadastrar()">\n      Cadastre-se\n    </button>\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\login\login.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuProvider = /** @class */ (function () {
    function MenuProvider() {
    }
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id_ngx__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_menu_menu__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_video_player__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_availability__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_exoplayer__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/abrirserie/abrirserie.module#AbrirseriePageModule', name: 'AbrirseriePage', segment: 'abrirserie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adulto/adulto.module#AdultoPageModule', name: 'AdultoPage', segment: 'adulto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/abrir-video/abrir-video.module#AbrirVideoPageModule', name: 'AbrirVideoPage', segment: 'abrir-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adulto-filmes/adulto-filmes.module#AdultoFilmesPageModule', name: 'AdultoFilmesPage', segment: 'adulto-filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-series/buscar-series.module#BuscarSeriesPageModule', name: 'BuscarSeriesPage', segment: 'buscar-series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar/cadastrar.module#CadastrarPageModule', name: 'CadastrarPage', segment: 'cadastrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-filmes/buscar-filmes.module#BuscarFilmesPageModule', name: 'BuscarFilmesPage', segment: 'buscar-filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categoria-serie/categoria-serie.module#CategoriaSeriePageModule', name: 'CategoriaSeriePage', segment: 'categoria-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-filme/detalhe-filme.module#DetalheFilmePageModule', name: 'DetalheFilmePage', segment: 'detalhe-filme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhebreve/detalhebreve.module#DetalhebrevePageModule', name: 'DetalhebrevePage', segment: 'detalhebreve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conta-vencida/conta-vencida.module#ContaVencidaPageModule', name: 'ContaVencidaPage', segment: 'conta-vencida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhebreves/detalhebreves.module#DetalhebrevesPageModule', name: 'DetalhebrevesPage', segment: 'detalhebreves', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/embreve/embreve.module#EmbrevePageModule', name: 'EmbrevePage', segment: 'embreve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filmescat/filmescat.module#FilmescatPageModule', name: 'FilmescatPage', segment: 'filmescat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-filme/home-filme.module#HomeFilmePageModule', name: 'HomeFilmePage', segment: 'home-filme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-serie/home-serie.module#HomeSeriePageModule', name: 'HomeSeriePage', segment: 'home-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kidsfilme/kidsfilme.module#KidsfilmePageModule', name: 'KidsfilmePage', segment: 'kidsfilme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kids/kids.module#KidsPageModule', name: 'KidsPage', segment: 'kids', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kidswaltdisney/kidswaltdisney.module#KidswaltdisneyPageModule', name: 'KidswaltdisneyPage', segment: 'kidswaltdisney', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kidsserie/kidsserie.module#KidsseriePageModule', name: 'KidsseriePage', segment: 'kidsserie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lancamentos-filmes/lancamentos-filmes.module#LancamentosFilmesPageModule', name: 'LancamentosFilmesPage', segment: 'lancamentos-filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lancamentos/lancamentos.module#LancamentosPageModule', name: 'LancamentosPage', segment: 'lancamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legendados/legendados.module#LegendadosPageModule', name: 'LegendadosPage', segment: 'legendados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legendados-filmes/legendados-filmes.module#LegendadosFilmesPageModule', name: 'LegendadosFilmesPage', segment: 'legendados-filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lancamentos-series/lancamentos-series.module#LancamentosSeriesPageModule', name: 'LancamentosSeriesPage', segment: 'lancamentos-series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lembrete/lembrete.module#LembretePageModule', name: 'LembretePage', segment: 'lembrete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagamento/pagamento.module#PagamentoPageModule', name: 'PagamentoPage', segment: 'pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opcao/opcao.module#OpcaoPageModule', name: 'OpcaoPage', segment: 'opcao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir/pedir.module#PedirPageModule', name: 'PedirPage', segment: 'pedir', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legendados-series/legendados-series.module#LegendadosSeriesPageModule', name: 'LegendadosSeriesPage', segment: 'legendados-series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisar/pesquisar.module#PesquisarPageModule', name: 'PesquisarPage', segment: 'pesquisar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playerhtml5/playerhtml5.module#Playerhtml5PageModule', name: 'Playerhtml5Page', segment: 'playerhtml5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quatrokfilmes/quatrokfilmes.module#QuatrokfilmesPageModule', name: 'QuatrokfilmesPage', segment: 'quatrokfilmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quatrokseries/quatrokseries.module#QuatrokseriesPageModule', name: 'QuatrokseriesPage', segment: 'quatrokseries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quatrok/quatrok.module#QuatrokPageModule', name: 'QuatrokPage', segment: 'quatrok', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renovar/renovar.module#RenovarPageModule', name: 'RenovarPage', segment: 'renovar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renovar2/renovar2.module#Renovar2PageModule', name: 'Renovar2Page', segment: 'renovar2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-cat/serie-cat.module#SerieCatPageModule', name: 'SerieCatPage', segment: 'serie-cat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-serie/ver-serie.module#VerSeriePageModule', name: 'VerSeriePage', segment: 'ver-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series-temp/series-temp.module#SeriesTempPageModule', name: 'SeriesTempPage', segment: 'series-temp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trailer/trailer.module#TrailerPageModule', name: 'TrailerPage', segment: 'trailer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verep/verep.module#VerepPageModule', name: 'VerepPage', segment: 'verep', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_web_intent__["a" /* WebIntent */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id_ngx__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_12__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_video_player__["a" /* VideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_exoplayer__["a" /* AndroidExoplayer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(ApiProvider, platform, statusBar, splashScreen) {
        this.ApiProvider = ApiProvider;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.IF_ETAPA = localStorage.getItem('ETAPA') ? localStorage.getItem('ETAPA').length : null;
        this.verificarStatus();
        this.initializeApp();
        this.teste();
        //this.carregarFeed2();
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: "ios-home", title: 'Início', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.etapaPage = function () {
        if (this.IF_ETAPA == null) {
            this.rootPage = 'LoginPage';
        }
        else {
            this.ETAPA = localStorage.getItem('ETAPA');
            if (this.ETAPA == '1') {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else if (this.ETAPA == '0') {
                this.rootPage = 'PagamentoPage';
            }
        }
    };
    MyApp.prototype.etapa = function () {
        var _this = this;
        if (this.IF_ETAPA == null) {
            this.etapaPage();
        }
        else {
            this.LOGADO = localStorage.getItem('LOGADO');
            this.USER = localStorage.getItem('USUARIO');
            this.ApiProvider.verificar(this.LOGADO, this.USER).subscribe(function (data) {
                var response = data;
                var objeto_retorno = JSON.parse(response._body);
                _this.DATA = objeto_retorno.DADOS;
                if (_this.DATA.LOGADO == _this.LOGADO) {
                    localStorage.setItem("PIN", _this.DATA.PIN);
                    _this.etapaPage();
                }
                else if (_this.DATA.LOGADO2 == _this.LOGADO) {
                    localStorage.setItem("PIN", _this.DATA.PIN);
                    _this.etapaPage();
                }
                else if (_this.DATA.LOGADO3 == _this.LOGADO) {
                    localStorage.setItem("PIN", _this.DATA.PIN);
                    _this.etapaPage();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Seu usuario logou em outro dispositivo!", "Só é possivel acessar por um dispositivo. Por favor realize o login para deslogar do outro.", "error");
                    localStorage.removeItem("ETAPA");
                    _this.rootPage = 'LoginPage';
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    MyApp.prototype.verificarStatus = function () {
        var _this = this;
        if (this.IF_ETAPA == null) {
            this.etapaPage();
        }
        else {
            this.LOGADO = localStorage.getItem('LOGADO');
            this.USER = localStorage.getItem('USUARIO');
            this.ApiProvider.verStatus(this.USER).subscribe(function (data) {
                var response = data;
                var objeto_retorno = JSON.parse(response._body);
                _this.DATA2 = objeto_retorno.DADOS;
                //console.log(this.DATA2);
                if (_this.DATA2.STATUS == "1") {
                    _this.etapa();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    MyApp.prototype.teste = function () {
        // console.log(Math.floor(Math.random() * 156747891789));
    };
    MyApp.prototype.carregarFeed2 = function () {
        var _this = this;
        this.ApiProvider.categorias().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.CATEGORIA = objeto_retorno.DADOS;
        }, function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPage2 = function (id, nome) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot('FilmescatPage', { id: id, nome: nome });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\app\app.html"*/'<ion-menu [content]="content" id="myMenu">\n\n\n\n  <ion-content style="background-color: #343434; color: #fff">\n\n    <ion-list>\n      <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n        <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n        <br>\n\n      {{p.title}}\n\n      </button>\n\n      <!--<button menuClose ion-item *ngFor="let p of CATEGORIA" (click)="openPage2(p.ID_CAT, p.NOME)" style="background-color: #343434; color: #fff">\n        {{p.NOME}}\n      </button>-->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.baseApi = "http://api.tplay.live/";
        this.USUARIOID = localStorage.getItem('USUARIO');
    }
    ApiProvider.prototype.inicio = function () {
        return this.http.get(this.baseApi + "inicio.php?type=inicio");
    };
    ApiProvider.prototype.TodosFilmes = function (page, pages) {
        if (page === void 0) { page = 31; }
        if (pages === void 0) { pages = 30; }
        return this.http.get(this.baseApi + "teste.php?type=filme&page=" + page);
    };
    ApiProvider.prototype.TodosSeries = function (page, pages) {
        if (page === void 0) { page = 31; }
        if (pages === void 0) { pages = 30; }
        return this.http.get(this.baseApi + "teste-serie.php?type=series&page=" + page);
    };
    ApiProvider.prototype.LancamentosFilmes = function (page, pages) {
        if (page === void 0) { page = 31; }
        if (pages === void 0) { pages = 30; }
        return this.http.get(this.baseApi + "lancamentos.php?type=filmes&page=" + page);
    };
    ApiProvider.prototype.LancamentosSeries = function (page, pages) {
        if (page === void 0) { page = 31; }
        if (pages === void 0) { pages = 30; }
        return this.http.get(this.baseApi + "lancamentos.php?type=series&page=" + page);
    };
    ApiProvider.prototype.favoritos = function (ID) {
        return this.http.get(this.baseApi + "favoritos.php?type=lista&user=" + ID);
    };
    ApiProvider.prototype.embreve = function (ID) {
        return this.http.get(this.baseApi + "embreve.php?type=lista");
    };
    ApiProvider.prototype.embreveDetalhe = function (ID) {
        return this.http.get(this.baseApi + "embreve.php?type=detalhe&id=" + ID + "&user=" + this.USUARIOID);
    };
    ApiProvider.prototype.embreveDetalheSerie = function (ID) {
        return this.http.get(this.baseApi + "embreve.php?type=detalhebreve&id=" + ID + "&user=" + this.USUARIOID);
    };
    ApiProvider.prototype.upLembrete = function (filme, modo) {
        return this.http.get(this.baseApi + "embreve.php?type=upLembrete&user=" + this.USUARIOID + "&filme=" + filme + "&modo=" + modo);
    };
    ApiProvider.prototype.addLembrete = function (usuario, filme, modo) {
        return this.http.get(this.baseApi + "embreve.php?type=addLembrete&user=" + usuario + "&filme=" + filme + "&modo=" + modo);
    };
    ApiProvider.prototype.RemoverLembrete = function (usuario, filme, modo) {
        return this.http.get(this.baseApi + "embreve.php?type=delete&user=" + usuario + "&filme=" + filme + "&modo=" + modo);
    };
    ApiProvider.prototype.addFavorito = function (usuario, filme, modo) {
        return this.http.get(this.baseApi + "favoritos.php?type=add&user=" + usuario + "&filme=" + filme + "&modo=" + modo);
    };
    ApiProvider.prototype.RemoverFavorito = function (usuario, filme, modo) {
        return this.http.get(this.baseApi + "favoritos.php?type=delete&user=" + usuario + "&filme=" + filme + "&modo=" + modo);
    };
    ApiProvider.prototype.UltimosFilmes = function () {
        return this.http.get(this.baseApi + "teste.php?type=filme");
    };
    ApiProvider.prototype.CatFilmes = function (id, page) {
        if (page === void 0) { page = 31; }
        return this.http.get(this.baseApi + "teste.php?type=filmecat&id=" + id + "&page=" + page);
    };
    ApiProvider.prototype.Categorias = function () {
        return this.http.get(this.baseApi + "teste.php?type=CatFilmes");
    };
    ApiProvider.prototype.FilmeDetalhe = function (n) {
        return this.http.get(this.baseApi + "teste.php?type=detalhe&id=" + n + "&user=" + this.USUARIOID);
    };
    ApiProvider.prototype.categorias = function () {
        return this.http.get(this.baseApi + "teste.php?type=categorias");
    };
    ApiProvider.prototype.UltimosSeries = function () {
        return this.http.get(this.baseApi + "teste-serie.php?type=series");
    };
    ApiProvider.prototype.SerieDetalhe = function (n) {
        return this.http.get(this.baseApi + "teste-serie.php?type=detalhe&id=" + n + "&user=" + this.USUARIOID);
    };
    ApiProvider.prototype.SerieEp = function (n) {
        return this.http.get(this.baseApi + "teste-serie.php?type=ep&id=" + n);
    };
    ApiProvider.prototype.CatSeries = function (id, page) {
        if (page === void 0) { page = 31; }
        return this.http.get(this.baseApi + "teste-serie.php?type=seriescat&id=" + id + "&page=" + page);
    };
    ApiProvider.prototype.login = function (u, s, n) {
        return this.http.get(this.baseApi + "login.php?type=login&usuario=" + u + "&senha=" + s + "&numero=" + n);
    };
    ApiProvider.prototype.cadastrar = function (u, s, n, email, nome) {
        return this.http.get(this.baseApi + "login.php?type=cadastrar&usuario=" + u + "&senha=" + s + "&numero=" + n + "&email=" + email + "&nome=" + nome);
    };
    ApiProvider.prototype.verificar = function (n, u) {
        return this.http.get(this.baseApi + "login.php?type=verificar&usuario=" + u + "&numero=" + n);
    };
    ApiProvider.prototype.verStatus = function (u) {
        return this.http.get(this.baseApi + "login.php?type=verStatus&usuario=" + u);
    };
    ApiProvider.prototype.verificaV = function (v) {
        return this.http.get(this.baseApi + "versao.php?v=" + v + "&user=" + this.USUARIOID);
    };
    ApiProvider.prototype.enviar = function (v) {
        return this.http.get(this.baseApi + "pedido.php?v=" + v + "&i=" + this.USUARIOID);
    };
    ApiProvider.prototype.renovar = function (v) {
        return this.http.get(this.baseApi + "renovar.php?codigo=" + v + "&i=" + this.USUARIOID);
    };
    ApiProvider.prototype.renovar2 = function (v, u) {
        return this.http.get(this.baseApi + "renovar.php?codigo=" + v + "&i=" + u);
    };
    ApiProvider.prototype.verPIN = function (v) {
        return this.http.get(this.baseApi + "pin.php?i=" + this.USUARIOID);
    };
    ApiProvider.prototype.buscarFilmesb = function () {
        return this.http.get(this.baseApi + "buscar.php?type=bfilmes");
    };
    ApiProvider.prototype.buscarFilmes = function (page, nome) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.baseApi + "buscar.php?type=filmes&page=" + page + "&titulo=" + nome);
    };
    ApiProvider.prototype.buscarSeriesb = function () {
        return this.http.get(this.baseApi + "buscar.php?type=bseries");
    };
    ApiProvider.prototype.buscarSeries = function (page, nome) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.baseApi + "buscar.php?type=series&page=" + page + "&titulo=" + nome);
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(42);
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.VERSAO = "1";
        this.pages = [
            { icon: "ios-home", title: 'Início', component: HomePage_1 },
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
        this.carregarFeed();
        //this.verificaVersao();
        this.verificarstatus();
        //localStorage.setItem("MENU", this.pages);
        //this.chamarlista();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.focusInput = function (input) { };
    HomePage.prototype.moveFocus = function (nextElement) {
        console.log(nextElement);
        nextElement.setFocus();
    };
    HomePage.prototype.carregarFeed = function () {
        var _this = this;
        this.ApiProvider.inicio().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            //localStorage.setItem("DADOS", objeto_retorno.DADOS);
            _this.lista = objeto_retorno.DADOS;
            _this.listaS = objeto_retorno.DADOS2;
            _this.listaEP = objeto_retorno.DADOS3;
            _this.listaFM = objeto_retorno.FDESTAQUES;
            _this.listaSM = objeto_retorno.SDESTAQUES;
            _this.listaWLT = objeto_retorno.DADOSWALT;
            _this.listaACAO = objeto_retorno.DADOSACAO;
            _this.BANNER = objeto_retorno.BANNER;
            _this.LETREIRO_STATUS = objeto_retorno.LETREIRO.STATUS;
            _this.TITULOS1 = _this.listaWLT[0]['TITULO_SESSAO'];
            _this.TITULOS2 = _this.listaACAO[0]['TITULO_SESSAO'];
            _this.LETREIRO = objeto_retorno.LETREIRO.TITULO;
            //console.log(objeto_retorno);
            //this.FechaCarregando();
        }, function (error) {
            console.log(error);
            _this.FechaCarregando();
        });
    };
    HomePage.prototype.onKey = function (event, nextElement) {
        console.log(event.key);
        if (event.key === "Enter" || event.key === "0") {
            this.varFilme(nextElement);
        }
    };
    //VERIFICAR SE ESTA COM PRAZO
    HomePage.prototype.verificarstatus = function () {
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
    //VERIFICAR SE ESTA ATUALIZADO
    HomePage.prototype.verificaVersao = function () {
        var _this = this;
        this.ApiProvider.verificaV(this.VERSAO).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.VS = objeto_retorno.DADOS.VERSAO;
            _this.LEMBRETE = objeto_retorno.LEMBRETE;
            _this.LEMBRETE2 = objeto_retorno.LEMBRETE2;
            localStorage.setItem("PREMIUM", objeto_retorno.DADOS.PREMIUM);
            //console.log(this.LEMBRETE2);
            if (_this.LEMBRETE.STATUS === "1") {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()(_this.LEMBRETE.TITULO + " Esta disponível!", "Você pode encontrar em últimos filmes, em categorias ou no menu Pesquisar.", "success", { timer: 3000, buttons: [false] })
                    .then(function (value) {
                    _this.updateLembrete(_this.LEMBRETE.ID, _this.LEMBRETE.MODO);
                });
            }
            if (_this.LEMBRETE2.STATUS === "1") {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()(_this.LEMBRETE2.TITULO + " Esta disponível!", "Você pode encontrar em últimas séries, em categorias ou no menu Pesquisar.", "success", { timer: 3000, buttons: [false] })
                    .then(function (value) {
                    _this.updateLembrete(_this.LEMBRETE2.ID, _this.LEMBRETE2.MODO);
                });
            }
            if (_this.VS > _this.VERSAO) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Nova atualização disponivel!", "Procure o servidor do aplicativo para realizar a atualização.", "success");
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.updateLembrete = function (filme, modo) {
        var _this = this;
        this.ApiProvider.upLembrete(filme, modo).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            console.log(objeto_retorno);
            _this.navCtrl.setRoot(HomePage_1);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.onKeyBANNER = function (event, nextElement, T) {
        if (event.key === "Enter") {
            this.verbanner(nextElement, T);
        }
    };
    HomePage.prototype.onKeySerie = function (event, nextElement) {
        if (event.key === "Enter") {
            this.varSerie(nextElement);
        }
    };
    HomePage.prototype.onKeyMENU = function (event, nextElement) {
        if (event.key === "Enter") {
            //this.AbreCarregando();
            this.openPage(nextElement);
        }
    };
    HomePage.prototype.onKeyPesquisar = function (event) {
        if (event.key === "Enter") {
            this.pesquisarPage();
        }
    };
    HomePage.prototype.pesquisarPage = function () {
        this.navCtrl.setRoot('PesquisarPage');
    };
    HomePage.prototype.onKeyEp = function (event, l, t, text, lk, e, s) {
        if (event.key === "Enter") {
            this.abrirEp(l, t, text, lk, e, s);
        }
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.navCtrl.setRoot(page.component);
    };
    HomePage.prototype.openPage2 = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.inicio = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.inicio2 = function () {
        this.navCtrl.setRoot('HomeSeriePage');
    };
    HomePage.prototype.filmes = function () {
        this.navCtrl.setRoot('FilmescatPage');
    };
    HomePage.prototype.serie = function () {
        this.navCtrl.setRoot('CategoriaSeriePage');
    };
    HomePage.prototype.pesquisars = function () {
        this.navCtrl.setRoot('BuscarSeriesPage');
    };
    HomePage.prototype.pesquisarf = function () {
        this.navCtrl.setRoot('BuscarFilmesPage');
    };
    HomePage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando tela inicial..."
        });
        this.loader.present();
    };
    HomePage.prototype.AbreCarregando2 = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando tela inicial..."
        });
        this.loader.present();
    };
    HomePage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    HomePage.prototype.verbanner = function (ID, T) {
        if (T == '0') {
            this.navCtrl.push('DetalheFilmePage', { id: ID });
        }
        else {
            this.navCtrl.push('VerSeriePage', { id: ID });
        }
    };
    HomePage.prototype.varFilme = function (n) {
        this.navCtrl.push('DetalheFilmePage', { id: n });
    };
    HomePage.prototype.varSerie = function (n) {
        this.navCtrl.push('VerSeriePage', { id: n });
    };
    HomePage.prototype.abrirEp = function (l, t, text, lk, e, s) {
        this.navCtrl.push('VerepPage', { id: l, titulo: t, texto: text, link: lk, ep: e, serie: s });
    };
    HomePage.prototype.chamarlista = function (newpage) {
        var _this = this;
        if (newpage === void 0) { newpage = false; }
        this.AbreCarregando();
        this.ApiProvider.TodosFilmes(this.page).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (newpage) {
                _this.lista = _this.lista.concat(objeto_retorno.DADOS);
                console.log(_this.lista);
                _this.infiniteScroll.complete();
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
    HomePage.prototype.ionViewDidEnter = function () {
        //this.AbreCarregando();
        this.menuCtrl.enable(true, 'myMenu');
        //document.getElementById("menu").click();
        this.splashScreen.hide();
        setTimeout(function () {
            //this.sInput.setFocus();
        }, 500);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.isRefreshing = true;
        this.chamarlista();
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.infiniteScroll = infiniteScroll;
        this.chamarlista(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "sInput", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home\home.html"*/'\n\n<ion-content  class="fundo-body">\n\n<div class="letreiro" *ngIf="LETREIRO_STATUS == \'1\'" >\n  <marquee><b class="titulo-letreiro">{{LETREIRO}}</b></marquee>\n</div>\n  <button ion-button  menuToggle class="menu">\n    <ion-icon name="menu" style="color: #fff" ></ion-icon>\n  </button>\n\n\n\n\n  <div class="prazo1" >\n    <button ion-button #searchInput color="light" class="botao-inicial" (keyup)="onKeyPesquisar($event)" (click)="pesquisarPage()" style="width: 250px">Pesquisar</button>\n  </div>\n\n  <div class="prazo">\nVocê tem: <b>{{PRAZO}}</b> Dias\n  </div>\n\n  <ion-grid>\n      <ion-row>\n\n        <ion-col col-2  class="esconder-menu">\n            <ion-list style="border-color: transparent !important;  padding: 0px !important">\n\n\n\n<!--<img src="assets/imgs/lite.png">-->\n\n\n\n             <!-- <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 20px; padding: 0px !important"></ion-icon>\n\n                  &nbsp;\n               <span style="font-size: 20px;">{{p.title}}</span>\n\n                </button>-->\n\n\n                <button id="menu" menuClose ion-item no-lines *ngFor="let p of pages" (keyup)="onKeyMENU($event,p)" (click)="openPage(p)" autofocus  style="background-color: transparent; color: #fff; font-size: 15px;"  class="botao-menu texto-menu">\n                  <ion-icon name="{{p.icon}}" style="font-size: 90px; padding: 0px !important"></ion-icon>\n                  <br>\n\n                {{p.title}}\n\n                </button>\n\n\n\n              </ion-list>\n          </ion-col>\n\n    <ion-col col-12 col-md-10 col-lg-10 col-xl-10 style="height: 100px">\n\n<div class="banner-inicial" *ngFor="let b of BANNER" [style.backgroundImage]="\'url(\' + b.IMAGEM + \')\'">\n\n  <div class="banner-inicial-interno">\n<h1 class="titulo-inicial"> {{b.TITULO}} <BR> <span style="font-size: 20px;">Nota: <ion-icon name="ios-star"></ion-icon> {{b.NOTA}}</span>   </h1>\n\n<p class="texto-inicial"> {{b.DESCRICAO}} </p>\n<button ion-button color="light" class="botao-inicial" (keyup)="onKeyBANNER($event,b.ID,b.TIPO)" (click)="verbanner(b.ID,b.TIPO)">Assitir</button>\n  </div>\n\n</div>\n\n\n\n  <div style="width: 100%; height: 10px"></div>\n\n\n\n              <h1 style="color: #fff">Últimos filmes adicionados</h1>\n            <div style="width: 100%"></div>\n\n\n\n\n            <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;" class="caixa-scrol">\n\n\n\n              <button ion-button *ngFor="let l of lista"  class="caixa-capa-home" style="width: 240px; height: 355px ; "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n\n               <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n               <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n               <span class="fundo-capa"></span>\n               <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n              </button>\n\n\n         </ion-scroll>\n\n\n\n\n\n  <div style="width: 100%; height: 10px"></div>\n\n\n\n  <h1 style="color: #fff">Filmes mais assistidos</h1>\n<div style="width: 100%"></div>\n\n\n\n\n<ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;" class="caixa-scrol">\n\n\n\n  <button ion-button *ngFor="let l of listaFM"  class="caixa-capa-home" style="width: 240px; height: 355px ; "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n\n   <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n   <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n   <span class="fundo-capa"></span>\n   <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n  </button>\n\n\n</ion-scroll>\n\n\n\n\n\n\n<div style="width: 100%; height: 10px"></div>\n\n\n\n<h1 style="color: #fff">{{TITULOS1}}</h1>\n<div style="width: 100%"></div>\n\n\n\n\n<ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;" class="caixa-scrol">\n\n\n<span *ngFor="let l of listaWLT">\n<button ion-button  *ngIf="l.MODO == \'0\'"   class="caixa-capa-home" style="width: 240px; height: 355px ; "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)" >\n\n <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n <span class="fundo-capa"></span>\n <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n</button>\n\n\n\n<button ion-button *ngIf="l.MODO == \'1\'"  class="caixa-capa-home" style="width: 240px; height: 355px " (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n  <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n  <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n  <span class="fundo-capa"></span>\n  <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n</button>\n\n\n\n</span>\n\n\n\n\n\n\n\n\n\n</ion-scroll>\n\n\n\n\n\n<div style="width: 100%; height: 10px"></div>\n\n\n\n<h1 style="color: #fff">{{TITULOS2}}</h1>\n<div style="width: 100%"></div>\n\n\n\n\n<ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;" class="caixa-scrol">\n\n\n\n<button ion-button *ngFor="let l of listaACAO"  class="caixa-capa-home" style="width: 240px; height: 355px ; "  (keyup)="onKey($event,l.ID_FILM)" (click)="varFilme(l.ID_FILM)">\n\n <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n\n <span class="fundo-capa"></span>\n <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n\n\n</button>\n\n\n</ion-scroll>\n\n\n\n\n\n    <div style="width: 100%; height: 50px"></div>\n\n\n\n\n        <h1 style="color: #fff">Últimas séries adicionadas</h1>\n      <div style="width: 100%"></div>\n      <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;"  class="caixa-scrol">\n\n\n\n        <button ion-button *ngFor="let l of listaS"  class="caixa-capa-home" style="width: 240px; height: 355px " (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n            <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n            <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n            <span class="fundo-capa"></span>\n            <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n        </button>\n\n\n   </ion-scroll>\n\n\n\n    <div style="width: 100%; height: 50px"></div>\n\n\n\n\n        <h1 style="color: #fff">Séries mais assistidas </h1>\n      <div style="width: 100%"></div>\n      <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;"  class="caixa-scrol">\n\n\n\n        <button ion-button *ngFor="let l of listaSM"  class="caixa-capa-home" style="width: 240px; height: 355px " (keyup)="onKeySerie($event,l.ID_SERIE)" (click)="varSerie(l.ID_SERIE)">\n            <div class="estrela-capa-home"><ion-icon name="ios-star"></ion-icon> {{l.RATING}} </div>\n            <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n            <span class="fundo-capa"></span>\n            <p class="titulo-filmes"><b >{{l.TITULO}}</b></p>\n\n        </button>\n\n\n   </ion-scroll>\n\n\n\n\n\n\n\n  <div style="width: 100%; height: 50px"></div>\n\n\n\n      <h1 style="color: #fff">Últimos Episódios adicionados</h1>\n    <div style="width: 100%"></div>\n\n\n    <ion-scroll id="teste" scrollX="true" style="white-space: nowrap; height: 410px;"  class="caixa-scrol">\n\n\n\n        <button ion-button *ngFor="let l of listaEP"  class="caixa-capa-home" style="width: 240px; height: 355px ; background-color: #000; "  (keyup)="onKeyEp($event,l.ID_SERIE, l.TITULO, l.SINOPSE, l.LINK, l.EP, l.SERIE)" (click)="abrirEp(l.ID_SERIE, l.TITULO, l.SINOPSE, l.LINK, l.EP, l.SERIE)">\n\n          <img class="img2-capa" [src]="l.CAPA" width="100%"  height="100%">\n          <span class="fundo-capa-ep"></span>\n          <p class="titulo-filmes-ep"><b >\n            {{l.SERIE}}\n            <br><br>\n            Temp {{l.TEMP}} EP {{l.EP}}: {{l.TITULO}}\n\n          </b></p>\n        </button>\n\n\n   </ion-scroll>\n\n\n\n\n\n\n\n\n\n\n\n\n  <div style="width: 100%; height: 50px"></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </ion-col>\n\n\n\n\n\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map