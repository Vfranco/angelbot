import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { localstorageProvider } from './domain/repository/localstorage.provider';
import { authInterceptorProvider } from '@core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [localstorageProvider, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
