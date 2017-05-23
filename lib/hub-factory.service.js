"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signalr_tokens_1 = require("./signalr_tokens");
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
HubFactory.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
HubFactory.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [signalr_tokens_1.SIGNALR_CONNECTION,] },] },
]; };
exports.HubFactory = HubFactory;
//# sourceMappingURL=hub-factory.service.js.map