webpackJsonp([40],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPageModule", function() { return CadastrarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarPageModule = /** @class */ (function () {
    function CadastrarPageModule() {
    }
    CadastrarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar__["a" /* CadastrarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar__["a" /* CadastrarPage */]),
            ],
        })
    ], CadastrarPageModule);
    return CadastrarPageModule;
}());

//# sourceMappingURL=cadastrar.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(42);
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





var CadastrarPage = /** @class */ (function () {
    function CadastrarPage(navParams, navCtrl, ApiProvider, loadingCtrl, splashScreen, menuCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.USUARIO = this.navParams.get('USUARIO');
        this.SENHA = this.navParams.get('SENHA');
        splashScreen.hide();
    }
    CadastrarPage.prototype.moveFocus = function (nextElement) {
        console.log(nextElement);
        nextElement.setFocus();
    };
    CadastrarPage.prototype.onKey = function (event, nextElement) {
        console.log(event.key);
        if (event.key === "Enter") {
            console.log(nextElement);
            nextElement.setFocus();
        }
    };
    CadastrarPage.prototype.onKey2 = function (event, nextElement, en) {
        if (event.key === "Enter") {
            //document.getElementById("ctl00_plcPrincipal_btnContrato").click();
            //en.setFocus();
            this.cadastrar();
        }
        else if (event.key === "ArrowUp") {
            nextElement.setFocus();
        }
        else if (event.key === "ArrowDown") {
            document.getElementById("ctl00_plcPrincipal_btnContrato").click();
        }
    };
    CadastrarPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Verificando dados..."
        });
        this.loader.present();
    };
    CadastrarPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    CadastrarPage.prototype.cadastrar = function () {
        var _this = this;
        this.AbreCarregando();
        this.numero = Math.floor(Math.random() * 156747891789);
        this.ApiProvider.cadastrar(this.USUARIO, this.SENHA, this.numero, this.EMAIL, this.NOME).subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista = objeto_retorno.DADOS;
            //console.log(this.lista);
            if (_this.lista.STATUS == 1) {
                _this.navCtrl.setRoot('Renovar2Page', { user: _this.USUARIO });
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
    CadastrarPage.prototype.voltar = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    CadastrarPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'myMenu');
        setTimeout(function () {
            _this.sInput.setFocus();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], CadastrarPage.prototype, "sInput", void 0);
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\cadastrar\cadastrar.html"*/'\n<ion-content padding class="background-body_cadastro">\n\n\n\n\n\n\n\n\n\n\n\n    <div style="height: 60px"></div>\n\n    <div style="max-width: 500px; margin: 0 auto;" >\n      <p style="color: #fff; text-align: center;"  class="font-padrao"><img src="assets/imgs/logow2.png" width="100%" >\n\n      </p>\n    </div>\n\n  <div style="max-width: 500px; margin: 0 auto;" >\n\n      <h6 style="color: #fff; text-align: left;">Digite suas informações</h6>\n  <!--<button ion-button  (click)="searchInput.setFocus()" style="width: 100%; background-color: #008645">Clique para digitar o usuário</button>\n  -->\n      <ion-list>\n        <ion-item class="ion-item" style="">\n\n          <ion-input type="text"   #searchInput value="" placeholder="Nome" class="ion-input3" [(ngModel)]="NOME" style="color: #fff !important; " (keyup)="onKey($event,b)"></ion-input>\n\n        </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-item class="ion-item" style="">\n\n                <ion-input type="text"   #searchInput value="" placeholder="E-mail" class="ion-input3" [(ngModel)]="EMAIL" style="color: #fff !important; " (keyup)="onKey($event,b)"></ion-input>\n\n              </ion-item>\n                </ion-list>\n\n          <ion-list>\n              <ion-item class="ion-item" style="">\n\n                <ion-input type="text"   #searchInput value="" placeholder="Usuário" class="ion-input3" [(ngModel)]="USUARIO" style="color: #fff !important; " (keyup)="onKey($event,b)"></ion-input>\n\n              </ion-item>\n                </ion-list>\n\n\n      <ion-list>\n\n        <ion-item class="ion-item" style="text-align: right">\n\n            <ion-input type="password" value="" #b placeholder="Senha" class="ion-input3" [(ngModel)]="SENHA" autocomplete="new-password" (keyup)="onKey2($event,searchInput,en)" style="color: #fff !important;"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n\n      <button ion-button full #en class="btn-avancar botao-play botao-detalhe" id="ctl00_plcPrincipal_btnContrato" (click)="cadastrar()">\n        Cadastre-se\n      </button>\n\n\n    <br>\n    <br>\n\n\n    <button ion-button full #en class="btn-avancar botao-play botao-detalhe" id="ctl00_plcPrincipal_btnContrato" (click)="voltar()">\n        Já tem cadastro?\n      </button>\n\n\n</div>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\cadastrar\cadastrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ })

});
//# sourceMappingURL=40.js.map