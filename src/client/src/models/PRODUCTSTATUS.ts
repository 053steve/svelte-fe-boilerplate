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
export enum PRODUCTSTATUS {
    DRAFT = 'DRAFT',
    PREVIEW = 'PREVIEW',
    SCHEDULE = 'SCHEDULE',
    PUBLISH = 'PUBLISH',
    INACTIVE = 'INACTIVE'
}

export function PRODUCTSTATUSFromJSON(json: any): PRODUCTSTATUS {
    return PRODUCTSTATUSFromJSONTyped(json, false);
}

export function PRODUCTSTATUSFromJSONTyped(json: any, ignoreDiscriminator: boolean): PRODUCTSTATUS {
    return json as PRODUCTSTATUS;
}

export function PRODUCTSTATUSToJSON(value?: PRODUCTSTATUS | null): any {
    return value as any;
}
