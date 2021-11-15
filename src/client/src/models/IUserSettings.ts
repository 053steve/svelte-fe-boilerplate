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
    LANGUAGE,
    LANGUAGEFromJSON,
    LANGUAGEFromJSONTyped,
    LANGUAGEToJSON,
} from './';

/**
 * 
 * @export
 * @interface IUserSettings
 */
export interface IUserSettings {
    /**
     * 
     * @type {LANGUAGE}
     * @memberof IUserSettings
     */
    defaultLanguage: LANGUAGE;
}

export function IUserSettingsFromJSON(json: any): IUserSettings {
    return IUserSettingsFromJSONTyped(json, false);
}

export function IUserSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IUserSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultLanguage': LANGUAGEFromJSON(json['defaultLanguage']),
    };
}

export function IUserSettingsToJSON(value?: IUserSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultLanguage': LANGUAGEToJSON(value.defaultLanguage),
    };
}


