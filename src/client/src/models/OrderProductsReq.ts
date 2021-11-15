/* tslint:disable */
/* eslint-disable */
/**
 * only-bu-BE
 * BE
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DiscountItemObj,
    DiscountItemObjFromJSON,
    DiscountItemObjFromJSONTyped,
    DiscountItemObjToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderProductsReq
 */
export interface OrderProductsReq {
    [key: string]: any | any;
    /**
     * 
     * @type {number}
     * @memberof OrderProductsReq
     */
    qty: number;
    /**
     * 
     * @type {number}
     * @memberof OrderProductsReq
     */
    productId: number;
    /**
     * 
     * @type {number}
     * @memberof OrderProductsReq
     */
    stockId: number;
    /**
     * 
     * @type {DiscountItemObj}
     * @memberof OrderProductsReq
     */
    discountPerItem?: DiscountItemObj;
}

export function OrderProductsReqFromJSON(json: any): OrderProductsReq {
    return OrderProductsReqFromJSONTyped(json, false);
}

export function OrderProductsReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderProductsReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'qty': json['qty'],
        'productId': json['productId'],
        'stockId': json['stockId'],
        'discountPerItem': !exists(json, 'discountPerItem') ? undefined : DiscountItemObjFromJSON(json['discountPerItem']),
    };
}

export function OrderProductsReqToJSON(value?: OrderProductsReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'qty': value.qty,
        'productId': value.productId,
        'stockId': value.stockId,
        'discountPerItem': DiscountItemObjToJSON(value.discountPerItem),
    };
}

