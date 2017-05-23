(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angular-signalr.umd"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["angular-signalr.umd"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
// OpaqueToken not working with @Inject()?
exports.SIGNALR_CONNECTION = new core_1.OpaqueToken('SignalRConnection');
/** @default '/signalr' */
exports.SIGNALR_URL = new core_1.OpaqueToken('SignalRURL');


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SignalRHubOptions = (function () {
    function SignalRHubOptions() {
        /** @default false */
        this.logging = false;
        /** @default true */
        this.useDefaultPath = true;
    }
    return SignalRHubOptions;
}());
SignalRHubOptions = __decorate([
    core_1.Injectable()
], SignalRHubOptions);
exports.SignalRHubOptions = SignalRHubOptions;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var signalr_tokens_1 = __webpack_require__(1);
var HubFactory = (function () {
    function HubFactory(connection) {
        this.connection = connection; // https://github.com/angular/angular/issues/12631#issuecomment-269525406
        this.hubDictionary = {};
    }
    HubFactory.prototype.createHub = function (hubName) {
        if (!this.hubDictionary[hubName]) {
            this.hubDictionary[hubName] = this.connection.createHubProxy(hubName);
        }
        return this.hubDictionary[hubName];
    };
    return HubFactory;
}());
HubFactory = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(signalr_tokens_1.SIGNALR_CONNECTION)),
    __metadata("design:paramtypes", [Object])
], HubFactory);
exports.HubFactory = HubFactory;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var signalr_tokens_1 = __webpack_require__(1);
var SignalRService = (function () {
    function SignalRService(connection, errorHandler) {
        var _this = this;
        this.errorHandler = errorHandler;
        this.connection = connection; // https://github.com/angular/angular/issues/12631#issuecomment-269525406
        this.connection.error(function (error) { return _this.errorHandler.handleError(error); });
        // this.registerHubs(['usersOnLine', 'chatHub']);
    }
    Object.defineProperty(SignalRService.prototype, "isConnected", {
        get: function () {
            return this.connection.state <= 1;
        },
        enumerable: true,
        configurable: true
    });
    // private _registerHub(hub: string) {
    //     this._connection.createHubProxy(hub).on('register', () => { });
    // }
    // public registerHubs(hubs: string[]) {
    //     hubs.forEach(hub => this._registerHub(hub));
    // }
    SignalRService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // switch (this._connection.state) {
                //     case $.signalR.connectionState.connected:
                //         return Observable.of(this._connection);
                //     case $.signalR.connectionState.connecting:
                //     case $.signalR.connectionState.reconnecting:
                //         return this.connect().delay(300);
                //     case $.signalR.connectionState.disconnected:
                //         return Observable.fromPromise(Promise.resolve(this._connection.start())).map(() => this._connection);
                // }
                return [2 /*return*/, Promise.resolve(this.connection.start())];
            });
        });
    };
    SignalRService.prototype.disconnect = function () {
        return this.connection.stop(false, true);
    };
    SignalRService.prototype.setToken = function (token) {
        this.connection.qs = 'Authorization=' + token;
    };
    return SignalRService;
}());
SignalRService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(signalr_tokens_1.SIGNALR_CONNECTION)),
    __metadata("design:paramtypes", [Object, core_1.ErrorHandler])
], SignalRService);
exports.SignalRService = SignalRService;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var signalr_tokens_1 = __webpack_require__(1);
var signalr_hub_options_1 = __webpack_require__(2);
/** @default '/signalr' */
exports.SIGNALR_URL_PROVIDER = {
    provide: signalr_tokens_1.SIGNALR_URL,
    useValue: '/signalr',
    multi: false
};
exports.SIGNALR_CONNECTION_PROVIDER = {
    provide: signalr_tokens_1.SIGNALR_CONNECTION,
    useFactory: $.hubConnection,
    deps: [signalr_tokens_1.SIGNALR_URL, signalr_hub_options_1.SignalRHubOptions],
    multi: false
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hub = (function () {
    function Hub(signalR, hubFactory, hubName) {
        this.signalR = signalR;
        // make internal hub
        this.hub = hubFactory.createHub(hubName);
    }
    return Hub;
}());
exports.Hub = Hub;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var signalr_hub_options_1 = __webpack_require__(2);
var signalr_providers_1 = __webpack_require__(5);
var signalr_service_1 = __webpack_require__(4);
var hub_factory_service_1 = __webpack_require__(3);
var SignalRModule = (function () {
    function SignalRModule() {
    }
    return SignalRModule;
}());
SignalRModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        providers: [
            signalr_providers_1.SIGNALR_URL_PROVIDER,
            signalr_hub_options_1.SignalRHubOptions,
            signalr_providers_1.SIGNALR_CONNECTION_PROVIDER,
            signalr_service_1.SignalRService,
            hub_factory_service_1.HubFactory
        ]
    })
], SignalRModule);
exports.SignalRModule = SignalRModule;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var signalr_hub_options_1 = __webpack_require__(2);
exports.SignalRHubOptions = signalr_hub_options_1.SignalRHubOptions;
var signalr_tokens_1 = __webpack_require__(1);
exports.SIGNALR_URL = signalr_tokens_1.SIGNALR_URL;
exports.SIGNALR_CONNECTION = signalr_tokens_1.SIGNALR_CONNECTION;
var signalr_providers_1 = __webpack_require__(5);
exports.SIGNALR_URL_PROVIDER = signalr_providers_1.SIGNALR_URL_PROVIDER;
exports.SIGNALR_CONNECTION_PROVIDER = signalr_providers_1.SIGNALR_CONNECTION_PROVIDER;
var signalr_service_1 = __webpack_require__(4);
exports.SignalRService = signalr_service_1.SignalRService;
var hub_factory_service_1 = __webpack_require__(3);
exports.HubFactory = hub_factory_service_1.HubFactory;
var signalr_module_1 = __webpack_require__(7);
exports.SignalRModule = signalr_module_1.SignalRModule;
var hub_1 = __webpack_require__(6);
exports.Hub = hub_1.Hub;


/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-signalr.umd.js.map