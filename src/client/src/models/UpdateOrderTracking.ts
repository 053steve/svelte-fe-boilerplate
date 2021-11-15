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
 * @interface UpdateOrderTracking
 */
export interface UpdateOrderTracking {
    /**
     * 
     * @type {number}
     * @memberof UpdateOrderTracking
     */
    orderId: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrderTracking
     */
    trackingNo?: string;
    /**
     * 
     * @type {Date}
     * @memberof UpdateOrderTracking
     */
    trackingDate?: Date;
}

export function UpdateOrderTrackingFromJSON(json: any): UpdateOrderTracking {
    return UpdateOrderTrackingFromJSONTyped(json, false);
}

export function UpdateOrderTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrderTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': json['orderId'],
        'trackingNo': !exists(json, 'trackingNo') ? undefined : json['trackingNo'],
        'trackingDate': !exists(json, 'trackingDate') ? undefined : (new Date(json['trackingDate'])),
    };
}

export function UpdateOrderTrackingToJSON(value?: UpdateOrderTracking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderId': value.orderId,
        'trackingNo': value.trackingNo,
        'trackingDate': value.trackingDate === undefined ? undefined : (value.trackingDate.toISOString()),
    };
}

