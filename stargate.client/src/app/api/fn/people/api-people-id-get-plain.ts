/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Person } from '../../models/person';

export interface ApiPeopleIdGet$Plain$Params {
  id: number;
}

export function apiPeopleIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiPeopleIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Person>> {
  const rb = new RequestBuilder(rootUrl, apiPeopleIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Person>;
    })
  );
}

apiPeopleIdGet$Plain.PATH = '/api/People/{id}';
