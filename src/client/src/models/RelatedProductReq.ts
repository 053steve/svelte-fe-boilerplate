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
/**
 * 
 * @export
 * @interface RelatedProductReq
 */
export interface RelatedProductReq {
    /**
     * 
     * @type {number}
     * @memberof RelatedProductReq
     */
    id?: number;
}

export function RelatedProductReqFromJSON(json: any): RelatedProductReq {
    return RelatedProductReqFromJSONTyped(json, false);
}

export function RelatedProductReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelatedProductReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function RelatedProductReqToJSON(value?: RelatedProductReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


