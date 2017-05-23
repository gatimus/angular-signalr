"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var signalr_hub_options_1 = require("./signalr-hub-options");
var signalr_providers_1 = require("./signalr_providers");
var signalr_service_1 = require("./signalr.service");
var hub_factory_service_1 = require("./hub-factory.service");
var SignalRModule = (function () {
    function SignalRModule() {
    }
    return SignalRModule;
}());
SignalRModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
SignalRModule.ctorParameters = function () { return []; };
exports.SignalRModule = SignalRModule;
//# sourceMappingURL=signalr.module.js.map