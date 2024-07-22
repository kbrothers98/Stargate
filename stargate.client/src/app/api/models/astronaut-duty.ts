/* tslint:disable */
/* eslint-disable */
import { Person } from '../models/person';
export interface AstronautDuty {
  dutyStartDate?: string;
  dutyTitle?: string | null;
  id?: number;
  person?: Person;
  personId?: number;
  rank?: string | null;
}
