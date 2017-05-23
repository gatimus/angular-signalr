import { OpaqueToken, FactoryProvider, ValueProvider, Injectable } from '@angular/core';
import { SIGNALR_URL, SIGNALR_CONNECTION } from './signalr_tokens';
import { SignalRHubOptions } from './signalr-hub-options';


/** @default '/signalr' */
export const SIGNALR_URL_PROVIDER: ValueProvider = {
    provide: SIGNALR_URL,
    useValue: '/signalr',
    multi: false
};

export const SIGNALR_CONNECTION_PROVIDER: FactoryProvider = {
    provide: SIGNALR_CONNECTION,
    useFactory: $.hubConnection,
    deps: [SIGNALR_URL, SignalRHubOptions],
    multi: false
};
