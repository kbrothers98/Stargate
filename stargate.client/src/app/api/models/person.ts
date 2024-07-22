/* tslint:disable */
/* eslint-disable */
import { AstronautDuty } from '../models/astronaut-duty';
export interface Person {
  astronaut?: boolean;
  astronautDuties?: Array<AstronautDuty> | null;
  id?: number;
  name?: string | null;
}
