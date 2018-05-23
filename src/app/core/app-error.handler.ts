import { Injectable, ErrorHandler } from '@angular/core';
import { LogService } from 'app/core/services';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private logService: LogService) {}

  handleError(error: any): void {
    this.logService.logError(error);

    throw error;
  }
}
