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
export enum NOTIFICATIONTYPE {
    HEADERBANNER = 'HEADER_BANNER'
}

export function NOTIFICATIONTYPEFromJSON(json: any): NOTIFICATIONTYPE {
    return NOTIFICATIONTYPEFromJSONTyped(json, false);
}

export function NOTIFICATIONTYPEFromJSONTyped(json: any, ignoreDiscriminator: boolean): NOTIFICATIONTYPE {
    return json as NOTIFICATIONTYPE;
}

export function NOTIFICATIONTYPEToJSON(value?: NOTIFICATIONTYPE | null): any {
    return value as any;
}

