﻿import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SIGNALR_CONNECTION } from './signalr_tokens';

@Injectable()
export class SignalRService {

    private connection: SignalR.Hub.Connection;

    get isConnected(): boolean {
        return this.connection.state <= 1;
    }

    constructor( @Inject(SIGNALR_CONNECTION) connection: any, private errorHandler: ErrorHandler) {
        this.connection = <SignalR.Hub.Connection>connection; // https://github.com/angular/angular/issues/12631#issuecomment-269525406
        this.connection.error(error => this.errorHandler.handleError(error));
        // this.registerHubs(['usersOnLine', 'chatHub']);
    }

    // private _registerHub(hub: string) {
    //     this._connection.createHubProxy(hub).on('register', () => { });
    // }

    // public registerHubs(hubs: string[]) {
    //     hubs.forEach(hub => this._registerHub(hub));
    // }

    public async connect(): Promise<SignalR.Hub.Connection> {
        // switch (this._connection.state) {
        //     case $.signalR.connectionState.connected:
        //         return Observable.of(this._connection);
        //     case $.signalR.connectionState.connecting:
        //     case $.signalR.connectionState.reconnecting:
        //         return this.connect().delay(300);
        //     case $.signalR.connectionState.disconnected:
        //         return Observable.fromPromise(Promise.resolve(this._connection.start())).map(() => this._connection);
        // }

        return Promise.resolve(this.connection.start())

    }

    public disconnect(): SignalR.Connection {
        return this.connection.stop(false, true);
    }

    public setToken(token: string) {
        this.connection.qs = 'Authorization=' + token;
    }

}
