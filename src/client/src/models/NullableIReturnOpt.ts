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
    IReturnOpt,
    IReturnOptFromJSON,
    IReturnOptFromJSONTyped,
    IReturnOptToJSON,
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
 * @interface NullableIReturnOpt
 */
export interface NullableIReturnOpt extends IReturnOpt {
}

export function NullableIReturnOptFromJSON(json: any): NullableIReturnOpt {
    return NullableIReturnOptFromJSONTyped(json, false);
}

export function NullableIReturnOptFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullableIReturnOpt {
    return json;
}

export function NullableIReturnOptToJSON(value?: NullableIReturnOpt | null): any {
    return value;
}

