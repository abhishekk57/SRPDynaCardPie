import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './SharedModule';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { HighchartsChartModule } from 'highcharts-angular';

import { HttpClientModule } from '@angular/common/http';
import { CommonModules } from './common-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, HighchartsChartModule, HttpClientModule,
    CommonModules],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StatusBar, FingerprintAIO,
    SplashScreen],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
