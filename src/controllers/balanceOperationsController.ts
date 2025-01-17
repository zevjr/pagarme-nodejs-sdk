/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GetBalanceOperationResponse,
  getBalanceOperationResponseSchema,
} from '../models/getBalanceOperationResponse';
import {
  ListBalanceOperationResponse,
  listBalanceOperationResponseSchema,
} from '../models/listBalanceOperationResponse';
import { bigint, optional, string } from '../schema';
import { BaseController } from './baseController';

export class BalanceOperationsController extends BaseController {
  /**
   * @param status
   * @param createdSince
   * @param createdUntil
   * @param recipientId
   * @return Response from the API call
   */
  async getBalanceOperations(
    status?: string,
    createdSince?: string,
    createdUntil?: string,
    recipientId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListBalanceOperationResponse>> {
    const req = this.createRequest('GET', '/balance/operations');
    const mapped = req.prepareArgs({
      status: [status, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
      recipientId: [recipientId, optional(string())],
    });
    req.query('status', mapped.status);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.query('recipient_id', mapped.recipientId);
    return req.callAsJson(listBalanceOperationResponseSchema, requestOptions);
  }

  /**
   * @param id
   * @return Response from the API call
   */
  async getBalanceOperationById(
    id: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetBalanceOperationResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, bigint()] });
    req.appendTemplatePath`/balance/operations/${mapped.id}`;
    return req.callAsJson(getBalanceOperationResponseSchema, requestOptions);
  }
}
