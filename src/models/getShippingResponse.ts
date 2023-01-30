/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetAddressResponse,
  getAddressResponseSchema,
} from './getAddressResponse';

/** Response object for getting the shipping data */
export interface GetShippingResponse {
  amount: number | null;
  description: string | null;
  recipientName: string | null;
  recipientPhone: string | null;
  address: GetAddressResponse | null;
  /** Data máxima de entrega */
  maxDeliveryDate?: string | null;
  /** Prazo estimado de entrega */
  estimatedDeliveryDate?: string | null;
  /** Shipping Type */
  type: string | null;
}

export const getShippingResponseSchema: Schema<GetShippingResponse> = object({
  amount: ['amount', nullable(number())],
  description: ['description', nullable(string())],
  recipientName: ['recipient_name', nullable(string())],
  recipientPhone: ['recipient_phone', nullable(string())],
  address: ['address', nullable(lazy(() => getAddressResponseSchema))],
  maxDeliveryDate: ['max_delivery_date', optional(nullable(string()))],
  estimatedDeliveryDate: [
    'estimated_delivery_date',
    optional(nullable(string())),
  ],
  type: ['type', nullable(string())],
});