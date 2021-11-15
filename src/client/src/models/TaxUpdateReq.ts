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
    TAXTYPE,
    TAXTYPEFromJSON,
    TAXTYPEFromJSONTyped,
    TAXTYPEToJSON,
} from './';

/**
 * 
 * @export
 * @interface TaxUpdateReq
 */
export interface TaxUpdateReq {
    /**
     * 
     * @type {string}
     * @memberof TaxUpdateReq
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TaxUpdateReq
     */
    titleTh?: string;
    /**
     * 
     * @type {TAXTYPE}
     * @memberof TaxUpdateReq
     */
    taxType?: TAXTYPE;
    /**
     * 
     * @type {boolean}
     * @memberof TaxUpdateReq
     */
    isActive?: boolean;
    /**
     * 
     * @type {any}
     * @memberof TaxUpdateReq
     */
    taxPrimaryImgId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TaxUpdateReq
     */
    taxThumbnailId?: any | null;
}

export function TaxUpdateReqFromJSON(json: any): TaxUpdateReq {
    return TaxUpdateReqFromJSONTyped(json, false);
}

export function TaxUpdateReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxUpdateReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'titleTh': !exists(json, 'title_th') ? undefined : json['title_th'],
        'taxType': !exists(json, 'tax_type') ? undefined : TAXTYPEFromJSON(json['tax_type']),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'taxPrimaryImgId': !exists(json, 'TaxPrimaryImgId') ? undefined : json['TaxPrimaryImgId'],
        'taxThumbnailId': !exists(json, 'TaxThumbnailId') ? undefined : json['TaxThumbnailId'],
    };
}

export function TaxUpdateReqToJSON(value?: TaxUpdateReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'title_th': value.titleTh,
        'tax_type': TAXTYPEToJSON(value.taxType),
        'isActive': value.isActive,
        'TaxPrimaryImgId': value.taxPrimaryImgId,
        'TaxThumbnailId': value.taxThumbnailId,
    };
}


