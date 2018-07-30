import { isDateRangeValid } from './date.utils';

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
});
