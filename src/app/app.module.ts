import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuitarTunerComponent } from './guitar-tuner/guitar-tuner.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarTunerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
