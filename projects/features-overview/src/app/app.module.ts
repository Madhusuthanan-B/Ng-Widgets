import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CdkModule } from 'cdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
