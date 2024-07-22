/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AstronautDuty } from '../../models/astronaut-duty';

export interface ApiAstronautDutiesPost$Plain$Params {
      body?: AstronautDuty
}

export function apiAstronautDutiesPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAstronautDutiesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
  const rb = new RequestBuilder(rootUrl, apiAstronautDutiesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AstronautDuty>;
    })
  );
}

apiAstronautDutiesPost$Plain.PATH = '/api/AstronautDuties';
