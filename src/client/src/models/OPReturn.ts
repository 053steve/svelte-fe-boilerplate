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
    RETURNREASON,
    RETURNREASONFromJSON,
    RETURNREASONFromJSONTyped,
    RETURNREASONToJSON,
    RETURNSTATUS,
    RETURNSTATUSFromJSON,
    RETURNSTATUSFromJSONTyped,
    RETURNSTATUSToJSON,
} from './';

/**
 * 
 * @export
 * @interface OPReturn
 */
export interface OPReturn {
    [key: string]: any | any;
    /**
     * 
     * @type {number}
     * @memberof OPReturn
     */
    qty: number;
    /**
     * 
     * @type {RETURNSTATUS}
     * @memberof OPReturn
     */
    status?: RETURNSTATUS;
    /**
     * 
     * @type {number}
     * @memberof OPReturn
     */
    orderProductId: number;
    /**
     * 
     * @type {Array<RETURNREASON>}
     * @memberof OPReturn
     */
    reason: Array<RETURNREASON>;
}

export function OPReturnFromJSON(json: any): OPReturn {
    return OPReturnFromJSONTyped(json, false);
}

export function OPReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): OPReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'qty': json['qty'],
        'status': !exists(json, 'status') ? undefined : RETURNSTATUSFromJSON(json['status']),
        'orderProductId': json['orderProductId'],
        'reason': ((json['reason'] as Array<any>).map(RETURNREASONFromJSON)),
    };
}

export function OPReturnToJSON(value?: OPReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'qty': value.qty,
        'status': RETURNSTATUSToJSON(value.status),
        'orderProductId': value.orderProductId,
        'reason': ((value.reason as Array<any>).map(RETURNREASONToJSON)),
    };
}

