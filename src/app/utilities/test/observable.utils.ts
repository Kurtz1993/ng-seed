import { Observable, of } from 'rxjs';

import { JSendReply } from '@app/shared/models';

/**
 * Creates an Observable containing a mock JSendReply.
 * This is useful when mocking responses from the server.
 * @param data Data to mock.
 * @param statusCode Mock status code.
 * @param message Mock message.
 * @returns A mock Observable with data in JSendReply format.
 */
export function createObservableResponse<T>(
  data: T,
  status: 'success' | 'fail' | 'error' = 'success',
  message: string = null
): Observable<JSendReply<T>> {
  return of({
    data,
    status,
    message,
  }) as Observable<JSendReply<T>>;
}
