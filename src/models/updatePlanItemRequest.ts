/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  UpdatePricingSchemeRequest,
  updatePricingSchemeRequestSchema,
} from './updatePricingSchemeRequest';

/** Request for updating a plan item */
export interface UpdatePlanItemRequest {
  /** Item name */
  name: string;
  /** Description */
  description: string;
  /** Item status */
  status: string;
  /** Pricing scheme */
  pricingScheme: UpdatePricingSchemeRequest;
  /** Quantity */
  quantity?: number;
  /** Number of cycles that the item will be charged */
  cycles?: number;
}

export const updatePlanItemRequestSchema: Schema<UpdatePlanItemRequest> = object(
  {
    name: ['name', string()],
    description: ['description', string()],
    status: ['status', string()],
    pricingScheme: [
      'pricing_scheme',
      lazy(() => updatePricingSchemeRequestSchema),
    ],
    quantity: ['quantity', optional(number())],
    cycles: ['cycles', optional(number())],
  }
);