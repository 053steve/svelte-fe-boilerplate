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
 * @interface ForgotPassReq
 */
export interface ForgotPassReq {
    /**
     * 
     * @type {string}
     * @memberof ForgotPassReq
     */
    email: string;
}

export function ForgotPassReqFromJSON(json: any): ForgotPassReq {
    return ForgotPassReqFromJSONTyped(json, false);
}

export function ForgotPassReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForgotPassReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function ForgotPassReqToJSON(value?: ForgotPassReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}


