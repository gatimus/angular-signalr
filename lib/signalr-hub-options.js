"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SignalRHubOptions = (function () {
    function SignalRHubOptions() {
        /** @default false */
        this.logging = false;
        /** @default true */
        this.useDefaultPath = true;
    }
    return SignalRHubOptions;
}());
SignalRHubOptions.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
SignalRHubOptions.ctorParameters = function () { return []; };
exports.SignalRHubOptions = SignalRHubOptions;
//# sourceMappingURL=signalr-hub-options.js.map