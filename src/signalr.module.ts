import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalRHubOptions } from './signalr-hub-options';
import { SIGNALR_URL_PROVIDER, SIGNALR_CONNECTION_PROVIDER } from './signalr_providers';
import { SignalRService } from './signalr.service';
import { HubFactory } from './hub-factory.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        SIGNALR_URL_PROVIDER,
        SignalRHubOptions,
        SIGNALR_CONNECTION_PROVIDER,
        SignalRService,
        HubFactory
    ]
})
export class SignalRModule{ }
