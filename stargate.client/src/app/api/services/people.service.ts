/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPeopleGet$Json } from '../fn/people/api-people-get-json';
import { ApiPeopleGet$Json$Params } from '../fn/people/api-people-get-json';
import { apiPeopleGet$Plain } from '../fn/people/api-people-get-plain';
import { ApiPeopleGet$Plain$Params } from '../fn/people/api-people-get-plain';
import { apiPeopleIdDelete } from '../fn/people/api-people-id-delete';
import { ApiPeopleIdDelete$Params } from '../fn/people/api-people-id-delete';
import { apiPeopleIdGet$Json } from '../fn/people/api-people-id-get-json';
import { ApiPeopleIdGet$Json$Params } from '../fn/people/api-people-id-get-json';
import { apiPeopleIdGet$Plain } from '../fn/people/api-people-id-get-plain';
import { ApiPeopleIdGet$Plain$Params } from '../fn/people/api-people-id-get-plain';
import { apiPeopleIdPut } from '../fn/people/api-people-id-put';
import { ApiPeopleIdPut$Params } from '../fn/people/api-people-id-put';
import { apiPeoplePost$Json } from '../fn/people/api-people-post-json';
import { ApiPeoplePost$Json$Params } from '../fn/people/api-people-post-json';
import { apiPeoplePost$Plain } from '../fn/people/api-people-post-plain';
import { ApiPeoplePost$Plain$Params } from '../fn/people/api-people-post-plain';
import { Person } from '../models/person';
import { PersonViewModel } from '../models/person-view-model';

@Injectable({ providedIn: 'root' })
export class PeopleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPeopleGet()` */
  static readonly ApiPeopleGetPath = '/api/People';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleGet$Plain$Response(params?: ApiPeopleGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonViewModel>>> {
    return apiPeopleGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleGet$Plain(params?: ApiPeopleGet$Plain$Params, context?: HttpContext): Observable<Array<PersonViewModel>> {
    return this.apiPeopleGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PersonViewModel>>): Array<PersonViewModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleGet$Json$Response(params?: ApiPeopleGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonViewModel>>> {
    return apiPeopleGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleGet$Json(params?: ApiPeopleGet$Json$Params, context?: HttpContext): Observable<Array<PersonViewModel>> {
    return this.apiPeopleGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PersonViewModel>>): Array<PersonViewModel> => r.body)
    );
  }

  /** Path part for operation `apiPeoplePost()` */
  static readonly ApiPeoplePostPath = '/api/People';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeoplePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeoplePost$Plain$Response(params?: ApiPeoplePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
    return apiPeoplePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeoplePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeoplePost$Plain(params?: ApiPeoplePost$Plain$Params, context?: HttpContext): Observable<Person> {
    return this.apiPeoplePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Person>): Person => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeoplePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeoplePost$Json$Response(params?: ApiPeoplePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
    return apiPeoplePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeoplePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeoplePost$Json(params?: ApiPeoplePost$Json$Params, context?: HttpContext): Observable<Person> {
    return this.apiPeoplePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Person>): Person => r.body)
    );
  }

  /** Path part for operation `apiPeopleIdGet()` */
  static readonly ApiPeopleIdGetPath = '/api/People/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdGet$Plain$Response(params: ApiPeopleIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
    return apiPeopleIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdGet$Plain(params: ApiPeopleIdGet$Plain$Params, context?: HttpContext): Observable<Person> {
    return this.apiPeopleIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Person>): Person => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdGet$Json$Response(params: ApiPeopleIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
    return apiPeopleIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdGet$Json(params: ApiPeopleIdGet$Json$Params, context?: HttpContext): Observable<Person> {
    return this.apiPeopleIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Person>): Person => r.body)
    );
  }

  /** Path part for operation `apiPeopleIdPut()` */
  static readonly ApiPeopleIdPutPath = '/api/People/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeopleIdPut$Response(params: ApiPeopleIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPeopleIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPeopleIdPut(params: ApiPeopleIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiPeopleIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPeopleIdDelete()` */
  static readonly ApiPeopleIdDeletePath = '/api/People/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPeopleIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdDelete$Response(params: ApiPeopleIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPeopleIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPeopleIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPeopleIdDelete(params: ApiPeopleIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiPeopleIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
