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
export enum PAYMENTSTATUS {
    SUCCESS = 'SUCCESS',
    PENDING = 'PENDING',
    CANCEL = 'CANCEL'
}

export function PAYMENTSTATUSFromJSON(json: any): PAYMENTSTATUS {
    return PAYMENTSTATUSFromJSONTyped(json, false);
}

export function PAYMENTSTATUSFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAYMENTSTATUS {
    return json as PAYMENTSTATUS;
}

export function PAYMENTSTATUSToJSON(value?: PAYMENTSTATUS | null): any {
    return value as any;
}

