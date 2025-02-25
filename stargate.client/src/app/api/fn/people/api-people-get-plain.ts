/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PersonViewModel } from '../../models/person-view-model';

export interface ApiPeopleGet$Plain$Params {
}

export function apiPeopleGet$Plain(http: HttpClient, rootUrl: string, params?: ApiPeopleGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiPeopleGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PersonViewModel>>;
    })
  );
}

apiPeopleGet$Plain.PATH = '/api/People';
