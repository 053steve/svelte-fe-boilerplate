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
    IModelSizeImg,
    IModelSizeImgFromJSON,
    IModelSizeImgFromJSONTyped,
    IModelSizeImgToJSON,
} from './';

/**
 * 
 * @export
 * @interface NullableIModelSizeImg
 */
export interface NullableIModelSizeImg extends IModelSizeImg {
}

export function NullableIModelSizeImgFromJSON(json: any): NullableIModelSizeImg {
    return NullableIModelSizeImgFromJSONTyped(json, false);
}

export function NullableIModelSizeImgFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullableIModelSizeImg {
    return json;
}

export function NullableIModelSizeImgToJSON(value?: NullableIModelSizeImg | null): any {
    return value;
}

