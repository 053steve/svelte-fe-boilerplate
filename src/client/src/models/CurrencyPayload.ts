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
    ICurrency,
    ICurrencyFromJSON,
    ICurrencyFromJSONTyped,
    ICurrencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface CurrencyPayload
 */
export interface CurrencyPayload {
    /**
     * 
     * @type {ICurrency}
     * @memberof CurrencyPayload
     */
    currency?: ICurrency;
    /**
     * 
     * @type {Array<ICurrency>}
     * @memberof CurrencyPayload
     */
    currencies?: Array<ICurrency>;
    /**
     * 
     * @type {number}
     * @memberof CurrencyPayload
     */
    listLength?: number;
}

export function CurrencyPayloadFromJSON(json: any): CurrencyPayload {
    return CurrencyPayloadFromJSONTyped(json, false);
}

export function CurrencyPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : ICurrencyFromJSON(json['currency']),
        'currencies': !exists(json, 'currencies') ? undefined : ((json['currencies'] as Array<any>).map(ICurrencyFromJSON)),
        'listLength': !exists(json, 'listLength') ? undefined : json['listLength'],
    };
}

export function CurrencyPayloadToJSON(value?: CurrencyPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': ICurrencyToJSON(value.currency),
        'currencies': value.currencies === undefined ? undefined : ((value.currencies as Array<any>).map(ICurrencyToJSON)),
        'listLength': value.listLength,
    };
}


