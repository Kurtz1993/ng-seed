import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppErrorHandler } from './app-error.handler';

import { LogService } from './services';
import { HttpErrorHandlerInterceptor } from './interceptors';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptor, multi: true },
    LogService
  ],
  exports: [CommonModule, FormsModule]
})
export class CoreModule {}
