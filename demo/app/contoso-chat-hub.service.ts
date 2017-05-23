import { Injectable } from '@angular/core';
import { Hub, SignalRService, HubFactory } from '../../src';

@Injectable()
export class ContosoChatHubService extends Hub {

  public addContosoChatMessageToPage; // TODO

  public addMessageToPage; // TODO

  constructor(
        signalR: SignalRService,
        hubFactory: HubFactory
    ) {
        super(signalR, hubFactory, 'contosoChatHub');

        // TODO
    }

    public async connect(): Promise<SignalR.Hub.Connection> {
        return await this.signalR.connect();
    }

    /* server methods */

    public newContosoChatMessage(name: string, message: string): Promise<void> {
        return Promise.resolve<void>(this.hub.invoke('newContosoChatMessage', name, name));
    }

    public getAllStocks(): Promise<any[]> {
        return Promise.resolve<any[]>(this.hub.invoke('getAllStocks'));
    }

}
