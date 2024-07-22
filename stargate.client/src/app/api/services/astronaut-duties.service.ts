/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAstronautDutiesGet$Json } from '../fn/astronaut-duties/api-astronaut-duties-get-json';
import { ApiAstronautDutiesGet$Json$Params } from '../fn/astronaut-duties/api-astronaut-duties-get-json';
import { apiAstronautDutiesGet$Plain } from '../fn/astronaut-duties/api-astronaut-duties-get-plain';
import { ApiAstronautDutiesGet$Plain$Params } from '../fn/astronaut-duties/api-astronaut-duties-get-plain';
import { apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json } from '../fn/astronaut-duties/api-astronaut-duties-get-astronaut-duties-person-id-get-json';
import { ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Params } from '../fn/astronaut-duties/api-astronaut-duties-get-astronaut-duties-person-id-get-json';
import { apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain } from '../fn/astronaut-duties/api-astronaut-duties-get-astronaut-duties-person-id-get-plain';
import { ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Params } from '../fn/astronaut-duties/api-astronaut-duties-get-astronaut-duties-person-id-get-plain';
import { apiAstronautDutiesIdDelete } from '../fn/astronaut-duties/api-astronaut-duties-id-delete';
import { ApiAstronautDutiesIdDelete$Params } from '../fn/astronaut-duties/api-astronaut-duties-id-delete';
import { apiAstronautDutiesIdGet$Json } from '../fn/astronaut-duties/api-astronaut-duties-id-get-json';
import { ApiAstronautDutiesIdGet$Json$Params } from '../fn/astronaut-duties/api-astronaut-duties-id-get-json';
import { apiAstronautDutiesIdGet$Plain } from '../fn/astronaut-duties/api-astronaut-duties-id-get-plain';
import { ApiAstronautDutiesIdGet$Plain$Params } from '../fn/astronaut-duties/api-astronaut-duties-id-get-plain';
import { apiAstronautDutiesIdPut } from '../fn/astronaut-duties/api-astronaut-duties-id-put';
import { ApiAstronautDutiesIdPut$Params } from '../fn/astronaut-duties/api-astronaut-duties-id-put';
import { apiAstronautDutiesPost$Json } from '../fn/astronaut-duties/api-astronaut-duties-post-json';
import { ApiAstronautDutiesPost$Json$Params } from '../fn/astronaut-duties/api-astronaut-duties-post-json';
import { apiAstronautDutiesPost$Plain } from '../fn/astronaut-duties/api-astronaut-duties-post-plain';
import { ApiAstronautDutiesPost$Plain$Params } from '../fn/astronaut-duties/api-astronaut-duties-post-plain';
import { AstronautDuty } from '../models/astronaut-duty';

@Injectable({ providedIn: 'root' })
export class AstronautDutiesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAstronautDutiesGet()` */
  static readonly ApiAstronautDutiesGetPath = '/api/AstronautDuties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGet$Plain$Response(params?: ApiAstronautDutiesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
    return apiAstronautDutiesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGet$Plain(params?: ApiAstronautDutiesGet$Plain$Params, context?: HttpContext): Observable<Array<AstronautDuty>> {
    return this.apiAstronautDutiesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AstronautDuty>>): Array<AstronautDuty> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGet$Json$Response(params?: ApiAstronautDutiesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
    return apiAstronautDutiesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGet$Json(params?: ApiAstronautDutiesGet$Json$Params, context?: HttpContext): Observable<Array<AstronautDuty>> {
    return this.apiAstronautDutiesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AstronautDuty>>): Array<AstronautDuty> => r.body)
    );
  }

  /** Path part for operation `apiAstronautDutiesPost()` */
  static readonly ApiAstronautDutiesPostPath = '/api/AstronautDuties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesPost$Plain$Response(params?: ApiAstronautDutiesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
    return apiAstronautDutiesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesPost$Plain(params?: ApiAstronautDutiesPost$Plain$Params, context?: HttpContext): Observable<AstronautDuty> {
    return this.apiAstronautDutiesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AstronautDuty>): AstronautDuty => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesPost$Json$Response(params?: ApiAstronautDutiesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
    return apiAstronautDutiesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesPost$Json(params?: ApiAstronautDutiesPost$Json$Params, context?: HttpContext): Observable<AstronautDuty> {
    return this.apiAstronautDutiesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AstronautDuty>): AstronautDuty => r.body)
    );
  }

  /** Path part for operation `apiAstronautDutiesIdGet()` */
  static readonly ApiAstronautDutiesIdGetPath = '/api/AstronautDuties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdGet$Plain$Response(params: ApiAstronautDutiesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
    return apiAstronautDutiesIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdGet$Plain(params: ApiAstronautDutiesIdGet$Plain$Params, context?: HttpContext): Observable<AstronautDuty> {
    return this.apiAstronautDutiesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AstronautDuty>): AstronautDuty => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdGet$Json$Response(params: ApiAstronautDutiesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
    return apiAstronautDutiesIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdGet$Json(params: ApiAstronautDutiesIdGet$Json$Params, context?: HttpContext): Observable<AstronautDuty> {
    return this.apiAstronautDutiesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AstronautDuty>): AstronautDuty => r.body)
    );
  }

  /** Path part for operation `apiAstronautDutiesIdPut()` */
  static readonly ApiAstronautDutiesIdPutPath = '/api/AstronautDuties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesIdPut$Response(params: ApiAstronautDutiesIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAstronautDutiesIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAstronautDutiesIdPut(params: ApiAstronautDutiesIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiAstronautDutiesIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAstronautDutiesIdDelete()` */
  static readonly ApiAstronautDutiesIdDeletePath = '/api/AstronautDuties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdDelete$Response(params: ApiAstronautDutiesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAstronautDutiesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesIdDelete(params: ApiAstronautDutiesIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiAstronautDutiesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAstronautDutiesGetAstronautDutiesPersonIdGet()` */
  static readonly ApiAstronautDutiesGetAstronautDutiesPersonIdGetPath = '/api/AstronautDuties/GetAstronautDuties/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Response(params: ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
    return apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain(params: ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Params, context?: HttpContext): Observable<Array<AstronautDuty>> {
    return this.apiAstronautDutiesGetAstronautDutiesPersonIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AstronautDuty>>): Array<AstronautDuty> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Response(params: ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
    return apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json(params: ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Params, context?: HttpContext): Observable<Array<AstronautDuty>> {
    return this.apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AstronautDuty>>): Array<AstronautDuty> => r.body)
    );
  }

}
