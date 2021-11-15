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
    ProductPayload,
    ProductPayloadFromJSON,
    ProductPayloadFromJSONTyped,
    ProductPayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProductResponse
 */
export interface ProductResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ProductResponse
     */
    success: boolean;
    /**
     * 
     * @type {ProductPayload}
     * @memberof ProductResponse
     */
    payload?: ProductPayload;
    /**
     * 
     * @type {any}
     * @memberof ProductResponse
     */
    message?: any | null;
}

export function ProductResponseFromJSON(json: any): ProductResponse {
    return ProductResponseFromJSONTyped(json, false);
}

export function ProductResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'payload': !exists(json, 'payload') ? undefined : ProductPayloadFromJSON(json['payload']),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ProductResponseToJSON(value?: ProductResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'payload': ProductPayloadToJSON(value.payload),
        'message': value.message,
    };
}

