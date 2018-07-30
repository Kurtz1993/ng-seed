import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JSendReply, ApiResponse, HttpQueryParams } from '@app/shared/models';

export abstract class BaseService {
  protected url: string;

  /**
   * Use the base service class to create your services.
   * @param http Angular HTTP service.
   * @param apiUrl Base URL of the API without the trailing slash. For example: http://example.com
   * @param prefix Prefix to use with the service. For example: 'auth';
   */
  constructor(private readonly http: HttpClient, apiUrl: string, prefix: string = null) {
    // Use this property to populate your API base URL
    this.url = prefix ? `${apiUrl}/${prefix}` : `${apiUrl}`;
  }

  /**
   * Triggers a HTTP GET to the server with the specified endpoint and query parameters.
   * @param [endpoint=''] The endpoint to GET from. Defaults to empty string.
   * @param [params] Any data to be sent to the server. Keys must match query parameter name.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected get<T>(endpoint: string = '', params?: HttpQueryParams): ApiResponse<T> {
    const requestUrl = `${this.url}/${endpoint}`;

    return this.http.get<JSendReply<T>>(requestUrl, { params });
  }

  /**
   * Triggers a HTTP GET to the specified URL and query parameters.
   * @param url URL of the service to call.
   * @param [params] Any data to be sent to the server. Keys must match query parameter name.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected getExternal<T>(url: string, params?: HttpQueryParams): Observable<T> {
    return this.http.get<T>(url, { params });
  }

  /**
   * Triggers a HTTP POST to the server with the specified endpoint and data.
   * @param [endpoint=''] The endpoint to POST to. Defaults to empty string.
   * @param [data=null] Any data to be sent to the server.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected post<T>(endpoint: string = '', data: any = null): ApiResponse<T> {
    return this.http.post<JSendReply<T>>(`${this.url}/${endpoint}`, data);
  }

  /**
   * Triggers a HTTP PUT to the server with the specified endpoint and query parameters.
   * @param [endpoint=''] The endpoint to PUT at. Defaults to empty string.
   * @param [data=null] Any data to be sent to the server.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected put<T>(endpoint: string = '', data: any = null): ApiResponse<T> {
    return this.http.put<JSendReply<T>>(`${this.url}/${endpoint}`, data);
  }

  /**
   * Triggers a HTTP PATCH to the server with the specified endpoint and query parameters.
   * @param [endpoint=''] The endpoint to PATCH at. Defaults to empty string.
   * @param [data=null] Any data to be sent to the server.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected patch<T>(endpoint: string = '', data: any = null): ApiResponse<T> {
    return this.http.patch<JSendReply<T>>(`${this.url}/${endpoint}`, data);
  }

  /**
   * Triggers a HTTP DELETE to the server with the specified endpoint and query parameters.
   * @param [endpoint=''] The endpoint to DELETE from. Defaults to empty string.
   * @param [params] Any data to be sent to the server. Keys must match query parameter name.
   * @returns An observable in the format of ApiResponse<T>.
   */
  protected delete<T>(endpoint: string = '', params?: HttpQueryParams): ApiResponse<T> {
    return this.http.delete<JSendReply<T>>(`${this.url}/${endpoint}`, {
      params,
    });
  }
}
