/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Person } from '../../models/person';

export interface ApiPeoplePost$Json$Params {
      body?: Person
}

export function apiPeoplePost$Json(http: HttpClient, rootUrl: string, params?: ApiPeoplePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
  const rb = new RequestBuilder(rootUrl, apiPeoplePost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Person>;
    })
  );
}

apiPeoplePost$Json.PATH = '/api/People';
