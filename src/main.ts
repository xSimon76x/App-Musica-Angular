import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { authorizationInterceptor } from '@core/interceptors/inject-session.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes, withComponentInputBinding()),
        importProvidersFrom(BrowserModule),
        CookieService,
        provideHttpClient(withInterceptors([authorizationInterceptor]))//TODO Utilizado de esta forma desde la v16 de angular
    ]
})
  .catch(err => console.error(err));
