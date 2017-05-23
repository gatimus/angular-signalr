"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalr_tokens_1 = require("./signalr_tokens");
var signalr_hub_options_1 = require("./signalr-hub-options");
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
//# sourceMappingURL=signalr_providers.js.map