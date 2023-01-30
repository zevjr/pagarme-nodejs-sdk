/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, number, object, optional, Schema, string } from '../schema';

export interface CreateWithdrawRequest {
  amount: number;
  metadata?: Record<string, string>;
}

export const createWithdrawRequestSchema: Schema<CreateWithdrawRequest> = object(
  {
    amount: ['amount', number()],
    metadata: ['metadata', optional(dict(string()))],
  }
);