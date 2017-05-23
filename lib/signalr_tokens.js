"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// OpaqueToken not working with @Inject()?
exports.SIGNALR_CONNECTION = new core_1.OpaqueToken('SignalRConnection');
/** @default '/signalr' */
exports.SIGNALR_URL = new core_1.OpaqueToken('SignalRURL');
//# sourceMappingURL=signalr_tokens.js.map