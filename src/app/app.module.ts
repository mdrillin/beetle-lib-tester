import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionsModule, DataservicesModule } from '@teiid/beetle-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnectionsModule,
    DataservicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
