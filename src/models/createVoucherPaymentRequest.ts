/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';

/** The settings for creating a voucher payment */
export interface CreateVoucherPaymentRequest {
  /** The text that will be shown on the voucher's statement */
  statementDescriptor?: string;
  /** Card id */
  cardId?: string;
  /** Card token */
  cardToken?: string;
  /** Card info */
  card?: CreateCardRequest;
  /** Defines whether the card has been used one or more times. */
  recurrencyCycle?: string;
  /** Customer business segment code */
  merchantCategoryCode?: bigint | null;
}

export const createVoucherPaymentRequestSchema: Schema<CreateVoucherPaymentRequest> = object(
  {
    statementDescriptor: ['statement_descriptor', optional(string())],
    cardId: ['card_id', optional(string())],
    cardToken: ['card_token', optional(string())],
    card: ['Card', optional(lazy(() => createCardRequestSchema))],
    recurrencyCycle: ['recurrency_cycle', optional(string())],
    merchantCategoryCode: [
      'merchant_category_code',
      optional(nullable(bigint())),
    ],
  }
);
