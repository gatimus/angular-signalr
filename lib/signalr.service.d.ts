/// <reference types="signalr" />
import { ErrorHandler } from '@angular/core';
export declare class SignalRService {
    private errorHandler;
    private connection;
    readonly isConnected: boolean;
    constructor(connection: any, errorHandler: ErrorHandler);
    connect(): Promise<SignalR.Hub.Connection>;
    disconnect(): SignalR.Connection;
    setToken(token: string): void;
}
