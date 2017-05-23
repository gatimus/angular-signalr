import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignalRModule } from '../../src';
import { ContosoChatHubService } from './contoso-chat-hub.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SignalRModule
  ],
  providers: [ContosoChatHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
