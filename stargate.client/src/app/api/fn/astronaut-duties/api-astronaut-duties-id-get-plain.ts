/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AstronautDuty } from '../../models/astronaut-duty';

export interface ApiAstronautDutiesIdGet$Plain$Params {
  id: number;
}

export function apiAstronautDutiesIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAstronautDutiesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AstronautDuty>> {
  const rb = new RequestBuilder(rootUrl, apiAstronautDutiesIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiAstronautDutiesIdGet$Plain.PATH = '/api/AstronautDuties/{id}';
