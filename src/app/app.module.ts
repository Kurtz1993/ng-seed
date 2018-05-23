import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { ApiUrl, LogUrl } from './core/injection-tokens';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CoreModule],
  declarations: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    /*
      Use this provider to set your base API URL.
      This should be used with the services inheriting from the base.service.
      Service example:

      import { Injectable, Inject } from '@angular/core';
      import { Http } from '@angular/http';

      import { BaseService } from 'app/core/services;
      import { ApiUrl } from 'app/core/injection-tokens';

      @Injectable()
      class MyService extends BaseService {
        constructor(http: Http, @Inject(ApiUrl) apiUrl) {
          super(http, apiUrl);
        }
      }
    */
    { provide: ApiUrl, useValue: '' },
    { provide: LogUrl, useValue: '' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
