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
    PromotionPayload,
    PromotionPayloadFromJSON,
    PromotionPayloadFromJSONTyped,
    PromotionPayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface PromotionResponse
 */
export interface PromotionResponse {
    /**
     * 
     * @type {boolean}
     * @memberof PromotionResponse
     */
    success: boolean;
    /**
     * 
     * @type {PromotionPayload}
     * @memberof PromotionResponse
     */
    payload?: PromotionPayload;
    /**
     * 
     * @type {any}
     * @memberof PromotionResponse
     */
    message?: any | null;
}

export function PromotionResponseFromJSON(json: any): PromotionResponse {
    return PromotionResponseFromJSONTyped(json, false);
}

export function PromotionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'payload': !exists(json, 'payload') ? undefined : PromotionPayloadFromJSON(json['payload']),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function PromotionResponseToJSON(value?: PromotionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'payload': PromotionPayloadToJSON(value.payload),
        'message': value.message,
    };
}


