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
    AMOUNTTYPE,
    AMOUNTTYPEFromJSON,
    AMOUNTTYPEFromJSONTyped,
    AMOUNTTYPEToJSON,
    DiscountItemObj,
    DiscountItemObjFromJSON,
    DiscountItemObjFromJSONTyped,
    DiscountItemObjToJSON,
} from './';

/**
 * 
 * @export
 * @interface NullableDiscountItemObj
 */
export interface NullableDiscountItemObj extends DiscountItemObj {
}

export function NullableDiscountItemObjFromJSON(json: any): NullableDiscountItemObj {
    return NullableDiscountItemObjFromJSONTyped(json, false);
}

export function NullableDiscountItemObjFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullableDiscountItemObj {
    return json;
}

export function NullableDiscountItemObjToJSON(value?: NullableDiscountItemObj | null): any {
    return value;
}

