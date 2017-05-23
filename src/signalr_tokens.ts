import { OpaqueToken } from '@angular/core';

// OpaqueToken not working with @Inject()?
export const SIGNALR_CONNECTION = new OpaqueToken('SignalRConnection');

/** @default '/signalr' */
export const SIGNALR_URL = new OpaqueToken('SignalRURL');
