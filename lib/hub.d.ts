/// <reference types="signalr" />
import { SignalRService } from './signalr.service';
import { HubFactory } from './hub-factory.service';
export declare abstract class Hub {
    protected signalR: SignalRService;
    protected hub: SignalR.Hub.Proxy;
    constructor(signalR: SignalRService, hubFactory: HubFactory, hubName: string);
}
