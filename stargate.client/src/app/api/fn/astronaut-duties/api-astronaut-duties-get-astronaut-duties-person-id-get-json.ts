/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AstronautDuty } from '../../models/astronaut-duty';

export interface ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Params {
  personId: number;
}

export function apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAstronautDutiesGetAstronautDutiesPersonIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AstronautDuty>>> {
  const rb = new RequestBuilder(rootUrl, apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('personId', params.personId, {});
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

apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json.PATH = '/api/AstronautDuties/GetAstronautDuties/{personId}';
