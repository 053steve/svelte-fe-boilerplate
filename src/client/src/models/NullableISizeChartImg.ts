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
    ISizeChartImg,
    ISizeChartImgFromJSON,
    ISizeChartImgFromJSONTyped,
    ISizeChartImgToJSON,
} from './';

/**
 * 
 * @export
 * @interface NullableISizeChartImg
 */
export interface NullableISizeChartImg extends ISizeChartImg {
}

export function NullableISizeChartImgFromJSON(json: any): NullableISizeChartImg {
    return NullableISizeChartImgFromJSONTyped(json, false);
}

export function NullableISizeChartImgFromJSONTyped(json: any, ignoreDiscriminator: boolean): NullableISizeChartImg {
    return json;
}

export function NullableISizeChartImgToJSON(value?: NullableISizeChartImg | null): any {
    return value;
}

