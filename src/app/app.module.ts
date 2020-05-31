import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '@environments/environment';

import { ApiModule, Configuration } from '@core/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularSvgIconModule } from 'angular-svg-icon';

export function GetApiConfiguration() {
  return new Configuration({
    apiKeys: {},
    basePath: environment.baseApiUrl,
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot(), ApiModule.forRoot(GetApiConfiguration)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
