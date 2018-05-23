/**
 * Specifies if the range is valid between the given dates.
 * @param startDate
 * @param endDate
 * @returns True if valid.
 */
export function isDateRangeValid(startDate: Date, endDate: Date) {
  const start = Date.parse(startDate.toDateString());
  const end = Date.parse(endDate.toDateString());

  return start <= end;
}
