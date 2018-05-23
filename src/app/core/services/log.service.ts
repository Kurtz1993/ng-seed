import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LogUrl } from '@app/core/injection-tokens';
import { LogRecord } from '@app/shared/models';
import { LogLevel } from '@app/shared/enums';
import { environment } from 'environments/environment';

@Injectable()
export class LogService {
  constructor(private http: HttpClient, @Inject(LogUrl) private logUrl: string) {}

  /**
   * Logs a warning.
   * @param message Message to log as a warning.
   * @param postToServer Specifies if the log record should be posted to the server.
   */
  logWarning(message: string = null, postToServer: boolean = true): void {
    const logRecord = new LogRecord(null, LogLevel.Warning, message);

    if (postToServer) {
      this.log(logRecord);
    }
  }

  /**
   * Logs an error to the server.
   * @param error Error object to log.
   * @param message Any custom message to add to the log record.
   */
  logError(error: Error, message?: string): void {
    const logRecord = new LogRecord(error, LogLevel.Error, message);

    this.log(logRecord);
  }

  /**
   * Logs a critical error to the server.
   * @param error Error object to log.
   * @param message Any custom message to add to the log record.
   */
  logCritical(error: Error, message?: string): void {
    const logRecord = new LogRecord(error, LogLevel.Critical, message);

    this.log(logRecord);
  }

  /**
   * Logs a record to the server and to the console if the environment
   * is either Development or QA.
   * @param logRecord Log record to post to the server.
   */
  private log(logRecord: LogRecord): void {
    if (!environment.isProduction) {
      this.logToConsole(logRecord);
    }

    logRecord.message = `${logRecord.message} at URL: ${window.location.href}`;

    this.http.post<null>(this.logUrl, logRecord).subscribe(null, null);
  }

  /**
   * Prints a log record into the dev tools console.
   * @param logRecord LogRecord to print in the console.
   */
  private logToConsole(logRecord: LogRecord): void {
    switch (logRecord.logLevel) {
      case LogLevel.Warning:
        console.warn(logRecord);
        break;
      case LogLevel.Error:
      case LogLevel.Critical:
        console.error(logRecord.stackTrace || logRecord);
        break;
      default:
        console.log(logRecord);
        break;
    }
  }
}
