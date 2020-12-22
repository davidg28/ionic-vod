webpackJsonp([15],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerepPageModule", function() { return VerepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verep__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerepPageModule = /** @class */ (function () {
    function VerepPageModule() {
    }
    VerepPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verep__["a" /* VerepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verep__["a" /* VerepPage */]),
            ],
        })
    ], VerepPageModule);
    return VerepPageModule;
}());

//# sourceMappingURL=verep.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_streaming_media__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_web_intent__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(201);
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








var VerepPage = /** @class */ (function () {
    function VerepPage(navCtrl, navParams, webIntent, ApiProvider, loadingCtrl, videoPlayer, navController, iab, streamingMedia) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webIntent = webIntent;
        this.ApiProvider = ApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.videoPlayer = videoPlayer;
        this.navController = navController;
        this.iab = iab;
        this.streamingMedia = streamingMedia;
        this.TITULO = this.navParams.get("titulo");
        this.TEXTO = this.navParams.get("texto");
        this.ID = this.navParams.get("id");
        this.EP = this.navParams.get("ep");
        this.LINK = this.navParams.get("link");
        this.SERIE = this.navParams.get("serie");
        this.PLAY = localStorage.getItem('PLAY');
        this.LOGADO = localStorage.getItem('LOGADO');
        this.verificarstatus();
    }
    VerepPage.prototype.bvoltar = function (event) {
        if (event.key === "Enter") {
            this.voltar();
        }
    };
    VerepPage.prototype.plai = function (event, nextElement, m) {
        if (event.key === "Enter") {
            this.play(nextElement, m);
        }
    };
    VerepPage.prototype.verificarstatus = function () {
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
            console.log(objeto_retorno.DADOS);
            if (DTBS.STATUS == "1") {
            }
            else {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Seu login foi desativado!", "Entre em contato com o administrador para saber o porque.", "error");
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (error) {
            console.log(error);
        });
    };
    //VERIFICAR QUAL PLAYER ESTA CONFIGURADO
    VerepPage.prototype.play = function (id, m) {
        if (this.TEMPO == "0") {
            __WEBPACK_IMPORTED_MODULE_7_sweetalert___default()("Poxa.. acabou os seus dias!", "Renove sua assinatura e continue a usar o Xplay.", "error");
        }
        else {
            var n = this.PLAY;
            if (n === "1") {
                //MX PLAYER
                this.abrirMXP(id, m);
            }
            else if (n === "2") {
                //VLC PLAYER
                this.abrirVLC(id, m);
            }
            else if (n === "3") {
                //PLAYER NATIVO
                this.abrirPlay(id, m);
            }
            else if (n === "4") {
                //PLAYER HTML5
                this.abrirPlayHtml5(id, m);
            }
            else if (n === "5") {
                //ABRIR TODOS
                this.abrirTODOS(id, m);
            }
            else if (n === "7") {
                //nvp
                this.abrirNVP(id, m);
            }
        }
    };
    VerepPage.prototype.abrirNVP = function (l, m) {
        var u = "http://www.tplay.live/lista/";
        var url = u + l + "." + m + "." + this.LOGADO + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: url,
            type: 'application/com.rz.night.player'
        };
        this.webIntent.startActivity(options).then();
    };
    VerepPage.prototype.abrirPlayHtml5 = function (url1, m) {
        this.navCtrl.push('Playerhtml5Page', { id: url1, modo: "1", modo2: m });
    };
    VerepPage.prototype.voltar = function () {
        this.navController.pop();
    };
    VerepPage.prototype.AbreCarregando = function () {
        this.loader = this.loadingCtrl.create({
            content: "Carregando episodios..."
        });
        this.loader.present();
    };
    VerepPage.prototype.FechaCarregando = function () {
        this.loader.dismiss();
    };
    VerepPage.prototype.ionViewDidLoad = function () {
        var id = this.navParams.get("id");
        //this.abrirFilme2(id);
    };
    //ABRIR PLAYER
    VerepPage.prototype.abrirTODOS = function (l, m) {
        var u = "rtsp://www.tplay.live/lista-series/";
        var url1 = u + l + "." + m + "." + this.LOGADO + ".mp4";
        var options = {
            zoom: 'no',
            location: 'yes'
        };
        var url = url1;
        var browser = this.iab.create(url, '_system', options);
    };
    VerepPage.prototype.abrirMXP = function (l, m) {
        var u = "http://www.tplay.live/lista-series/";
        var url = u + l + "." + m + "." + this.LOGADO + ".mp4";
        var options = {
            action: this.webIntent.ACTION_VIEW,
            url: url,
            type: 'application/com.mxtech.videoplayer.ad'
        };
        this.webIntent.startActivity(options).then();
    };
    VerepPage.prototype.abrirVLC = function (l, m) {
        var u = "vlc://www.tplay.live/lista-series/";
        var url1 = u + l + "." + m + "." + this.LOGADO + ".mp4";
        var options = {
            zoom: 'no',
            location: 'yes'
        };
        var url = url1;
        var browser = this.iab.create(url, '_system', options);
    };
    VerepPage.prototype.abrirPlay = function (url1, m) {
        // Playing a video.
        var u = "http://www.tplay.live/lista-series/";
        var url = u + url1 + ".mp4";
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(url, options);
    };
    VerepPage.prototype.MXP = function (event, nextElement, m) {
        if (event.key === "Enter") {
            this.abrirMXP(nextElement, m);
        }
    };
    VerepPage.prototype.VLC = function (event, nextElement, m) {
        if (event.key === "Enter") {
            this.abrirVLC(nextElement, m);
        }
    };
    VerepPage.prototype.NATIVO = function (event, nextElement, m) {
        if (event.key === "Enter") {
            this.abrirPlay(nextElement, m);
        }
    };
    VerepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-verep',template:/*ion-inline-start:"D:\Work\Sources\plextv2-master-novo-master\src\pages\verep\verep.html"*/'\n\n\n\n<ion-content padding class="background-body">\n    <ion-buttons left>\n        <button ion-button icon-only (keyup)="bvoltar($event)" (click)="voltar()" class="voltar" style="background-color: transparent">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n<br>\n<br>\n      </ion-buttons>\n\n\n                  <ion-grid>\n                    <ion-row>\n\n\n\n                      <ion-col col-12 col-md-8>\n<h1 style="font-size: 35px"><b>{{SERIE}}: {{TITULO}} - EP {{EP}}</b></h1>\n<br>\n                                           <b>Sinopse: </b> {{TEXTO}}\n\n\n                      </ion-col>\n\n                      <ion-col col-12 col-md-4 style="text-align: center">\n<br><br><br>\n\n\n  <button ion-button  (keyup)="plai($event,ID, \'1\')" (click)="play(ID, \'1\')" class="botao-play">\n    <ion-icon name="play" style="font-size: 30px"></ion-icon>\n    <p>&nbsp;&nbsp;SERVIDOR 1</p>\n  </button>\n\n  <button ion-button  (keyup)="plai($event,ID, \'2\')" (click)="play(ID, \'2\')" class="botao-play">\n    <ion-icon name="play" style="font-size: 30px"></ion-icon>\n    <p>&nbsp;&nbsp;SERVIDOR 2</p>\n  </button>\n\n                      </ion-col>\n\n\n                    </ion-row>\n                  </ion-grid>\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\Sources\plextv2-master-novo-master\src\pages\verep\verep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__["a" /* VideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], VerepPage);
    return VerepPage;
}());

//# sourceMappingURL=verep.js.map

/***/ })

});
//# sourceMappingURL=15.js.map