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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ORDERSOURCE {
    ONLINE = 'ONLINE',
    MANUAL = 'MANUAL'
}

export function ORDERSOURCEFromJSON(json: any): ORDERSOURCE {
    return ORDERSOURCEFromJSONTyped(json, false);
}

export function ORDERSOURCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): ORDERSOURCE {
    return json as ORDERSOURCE;
}

export function ORDERSOURCEToJSON(value?: ORDERSOURCE | null): any {
    return value as any;
}
