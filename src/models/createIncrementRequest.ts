/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Request for creating a new increment */
export interface CreateIncrementRequest {
  /** The increment value */
  value: number;
  /** Increment type. Can be either flat or percentage. */
  incrementType: string;
  /** The item where the increment will be applied */
  itemId: string;
  /** Number of cycles that the increment will be applied */
  cycles?: number;
  /** Description */
  description?: string;
}

export const createIncrementRequestSchema: Schema<CreateIncrementRequest> = object(
  {
    value: ['value', number()],
    incrementType: ['increment_type', string()],
    itemId: ['item_id', string()],
    cycles: ['cycles', optional(number())],
    description: ['description', optional(string())],
  }
);