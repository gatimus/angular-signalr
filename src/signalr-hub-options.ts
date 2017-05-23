import { Injectable } from '@angular/core';

@Injectable()
export class SignalRHubOptions implements SignalR.Hub.Options {
    /** query string */
    public qs: string;
    /** @default false */
    public logging: boolean = false;
    /** @default true */
    public useDefaultPath: boolean = true;
}
