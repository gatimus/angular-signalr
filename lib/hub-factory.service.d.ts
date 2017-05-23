/// <reference types="signalr" />
export declare class HubFactory {
    private connection;
    private hubDictionary;
    constructor(connection: any);
    createHub(hubName: string): SignalR.Hub.Proxy;
}
