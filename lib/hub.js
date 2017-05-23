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
//# sourceMappingURL=hub.js.map