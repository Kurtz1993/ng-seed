import { LogLevel } from '@app/shared/enums';

/**
 * Defines a log record.
 */
export class LogRecord {
  message: string;
  stackTrace: string;
  /**
   * Creates a new log record to send to the server via the LogService.
   * @param error Error object to log.
   * @param logLevel Log level of the log record.
   * @param customMessage Custom message of the log record.
   */
  constructor(
    error: Error,
    public logLevel: LogLevel = LogLevel.Error,
    customMessage: string = ''
  ) {
    this.stackTrace = error ? error.stack : null;
    this.message = customMessage || (error ? error.message : null);
  }
}
