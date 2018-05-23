import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { LogService } from '@app/core/services';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private logService: LogService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do(
      () => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 400:
              break;

            default:
              console.error(err);
              break;
          }
        }
      }
    );
  }
}
