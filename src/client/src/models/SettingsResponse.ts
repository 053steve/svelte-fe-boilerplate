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
    SettingsPayload,
    SettingsPayloadFromJSON,
    SettingsPayloadFromJSONTyped,
    SettingsPayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface SettingsResponse
 */
export interface SettingsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SettingsResponse
     */
    success: boolean;
    /**
     * 
     * @type {SettingsPayload}
     * @memberof SettingsResponse
     */
    payload?: SettingsPayload;
    /**
     * 
     * @type {any}
     * @memberof SettingsResponse
     */
    message?: any | null;
}

export function SettingsResponseFromJSON(json: any): SettingsResponse {
    return SettingsResponseFromJSONTyped(json, false);
}

export function SettingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'payload': !exists(json, 'payload') ? undefined : SettingsPayloadFromJSON(json['payload']),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function SettingsResponseToJSON(value?: SettingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'payload': SettingsPayloadToJSON(value.payload),
        'message': value.message,
    };
}

