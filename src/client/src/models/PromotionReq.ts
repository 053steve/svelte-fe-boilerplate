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
    PROMOTYPE,
    PROMOTYPEFromJSON,
    PROMOTYPEFromJSONTyped,
    PROMOTYPEToJSON,
} from './';

/**
 * 
 * @export
 * @interface PromotionReq
 */
export interface PromotionReq {
    /**
     * 
     * @type {string}
     * @memberof PromotionReq
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof PromotionReq
     */
    promoCode: string;
    /**
     * 
     * @type {PROMOTYPE}
     * @memberof PromotionReq
     */
    promotionType?: PROMOTYPE;
    /**
     * 
     * @type {number}
     * @memberof PromotionReq
     */
    totalDiscountAmt?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PromotionReq
     */
    promoQty?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PromotionReq
     */
    promoLimit?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof PromotionReq
     */
    dateStart?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PromotionReq
     */
    dateEnd?: Date | null;
}

export function PromotionReqFromJSON(json: any): PromotionReq {
    return PromotionReqFromJSONTyped(json, false);
}

export function PromotionReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'promoCode': json['promo_code'],
        'promotionType': !exists(json, 'promotion_type') ? undefined : PROMOTYPEFromJSON(json['promotion_type']),
        'totalDiscountAmt': !exists(json, 'total_discount_amt') ? undefined : json['total_discount_amt'],
        'promoQty': !exists(json, 'promo_qty') ? undefined : json['promo_qty'],
        'promoLimit': !exists(json, 'promo_limit') ? undefined : json['promo_limit'],
        'dateStart': !exists(json, 'date_start') ? undefined : (json['date_start'] === null ? null : new Date(json['date_start'])),
        'dateEnd': !exists(json, 'date_end') ? undefined : (json['date_end'] === null ? null : new Date(json['date_end'])),
    };
}

export function PromotionReqToJSON(value?: PromotionReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'promo_code': value.promoCode,
        'promotion_type': PROMOTYPEToJSON(value.promotionType),
        'total_discount_amt': value.totalDiscountAmt,
        'promo_qty': value.promoQty,
        'promo_limit': value.promoLimit,
        'date_start': value.dateStart === undefined ? undefined : (value.dateStart === null ? null : value.dateStart.toISOString()),
        'date_end': value.dateEnd === undefined ? undefined : (value.dateEnd === null ? null : value.dateEnd.toISOString()),
    };
}

