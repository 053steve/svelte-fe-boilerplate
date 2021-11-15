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
    AuthPayload,
    AuthPayloadFromJSON,
    AuthPayloadFromJSONTyped,
    AuthPayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface AuthResponses
 */
export interface AuthResponses {
    /**
     * 
     * @type {boolean}
     * @memberof AuthResponses
     */
    success: boolean;
    /**
     * 
     * @type {AuthPayload}
     * @memberof AuthResponses
     */
    payload?: AuthPayload;
    /**
     * 
     * @type {any}
     * @memberof AuthResponses
     */
    message?: any | null;
}

export function AuthResponsesFromJSON(json: any): AuthResponses {
    return AuthResponsesFromJSONTyped(json, false);
}

export function AuthResponsesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResponses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'payload': !exists(json, 'payload') ? undefined : AuthPayloadFromJSON(json['payload']),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function AuthResponsesToJSON(value?: AuthResponses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'payload': AuthPayloadToJSON(value.payload),
        'message': value.message,
    };
}


