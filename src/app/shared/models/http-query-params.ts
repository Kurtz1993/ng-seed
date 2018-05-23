/** Represents a strongly typed version of an object that has string values. */
export interface HttpQueryParams {
  /** Index of the object. */
  [header: string]: string | string[];
}
