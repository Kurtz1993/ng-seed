import { isDateRangeValid } from './date.utils';

import { LogRecord } from '@app/shared/models';
import { LogLevel } from '@app/shared/enums';

describe('[Utils]', () => {
  describe('[Date Utils]', () => {
    it('should return false when end date is before start date', () => {
      const startDate = new Date(2018, 1, 10);
      const endDate = new Date(2018, 1, 9);

      expect(isDateRangeValid(startDate, endDate)).toBeFalsy();
    });

    it('should return true when end date is before start date', () => {
      const startDate = new Date(2018, 1, 7);
      const endDate = new Date(2018, 1, 9);

      expect(isDateRangeValid(startDate, endDate)).toBeTruthy();
    });
  });

  describe('[LogRecord model]', () => {
    it('should create a log record with the given error', () => {
      const record = new LogRecord(new Error('Error message'));

      expect(record.stackTrace).toBeDefined();
      expect(record.message).toBe('Error message');
      expect(record.logLevel).toBe(LogLevel.Error);
    });

    it('should create a log record with the given error, log level and custom message', () => {
      const customMessage = 'Custom message';
      const record = new LogRecord(new Error('Error message'), LogLevel.Critical, customMessage);

      expect(record.stackTrace).toBeDefined();
      expect(record.message).toBe(customMessage);
      expect(record.logLevel).toBe(LogLevel.Critical);
    });

    it('should create a log without an error', () => {
      const record = new LogRecord(null);

      expect(record.stackTrace).toBeNull();
      expect(record.logLevel).toBe(LogLevel.Error);
      expect(record.message).toBeNull();
    });
  });
});
