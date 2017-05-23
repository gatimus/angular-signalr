﻿import { Injectable, Inject } from '@angular/core';
import { SignalRService } from './signalr.service';
import { SIGNALR_CONNECTION } from './signalr_tokens';

@Injectable()
export class HubFactory {

    private connection: SignalR.Hub.Connection;

    private hubDictionary: { [key: string]: SignalR.Hub.Proxy };

    constructor( @Inject(SIGNALR_CONNECTION) connection: any) {
        this.connection = <SignalR.Hub.Connection>connection; // https://github.com/angular/angular/issues/12631#issuecomment-269525406
        this.hubDictionary = {};
    }

    createHub(hubName: string): SignalR.Hub.Proxy {
        if (!this.hubDictionary[hubName]) {
            this.hubDictionary[hubName] = this.connection.createHubProxy(hubName);
        }
        return this.hubDictionary[hubName];
    }

}
