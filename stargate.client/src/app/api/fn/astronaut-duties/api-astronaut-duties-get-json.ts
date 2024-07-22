/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AstronautDuty } from '../../models/astronaut-duty';

export interface ApiAstronautDutiesGet$Json$Params {
}

export function apiAstronautDutiesGet$Json(http: HttpClient, rootUrl: string, params?: ApiAstronautDutiesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
  const rb = new RequestBuilder(rootUrl, apiAstronautDutiesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AstronautDuty>>;
    })
  );
}

apiAstronautDutiesGet$Json.PATH = '/api/AstronautDuties';
