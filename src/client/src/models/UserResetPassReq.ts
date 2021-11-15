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
 * @interface UserResetPassReq
 */
export interface UserResetPassReq {
    /**
     * 
     * @type {number}
     * @memberof UserResetPassReq
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof UserResetPassReq
     */
    pass: string;
    /**
     * 
     * @type {string}
     * @memberof UserResetPassReq
     */
    newPass: string;
}

export function UserResetPassReqFromJSON(json: any): UserResetPassReq {
    return UserResetPassReqFromJSONTyped(json, false);
}

export function UserResetPassReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResetPassReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'pass': json['pass'],
        'newPass': json['newPass'],
    };
}

export function UserResetPassReqToJSON(value?: UserResetPassReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'pass': value.pass,
        'newPass': value.newPass,
    };
}

