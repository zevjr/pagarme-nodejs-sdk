/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  GetPeriodResponse,
  getPeriodResponseSchema,
} from './getPeriodResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response object for listing subscription cycles */
export interface ListCyclesResponse {
  /** The subscription cycles objects */
  data?: GetPeriodResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listCyclesResponseSchema: Schema<ListCyclesResponse> = object({
  data: [
    'data',
    optional(nullable(array(lazy(() => getPeriodResponseSchema)))),
  ],
  paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
});