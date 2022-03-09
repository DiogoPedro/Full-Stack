import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { Data2Component } from './components/data2/data2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeComponent,
    DataComponent,
    DiretivaComponent,
    Data2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
