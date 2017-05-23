import { SignalRService } from './signalr.service';
import { HubFactory } from './hub-factory.service';

export abstract class Hub {

    protected hub: SignalR.Hub.Proxy;

    constructor(
        protected signalR: SignalRService,
        hubFactory: HubFactory,
        hubName: string
    ) {
        // make internal hub
        this.hub = hubFactory.createHub(hubName);
    }

}
