import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { PrincipalModule } from './principal/principal.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppRoutingModule } from './app.router';
import { HttpModule } from '@angular/http'
import {HttpClientModule} from '@angular/common/http';

import { SeriesModule } from './series/series.module';




@NgModule({
  declarations: [
    AppComponent
    
    
  
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    PrincipalModule,
    NavbarModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    SeriesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
