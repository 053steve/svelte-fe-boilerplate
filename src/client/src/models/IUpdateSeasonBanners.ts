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
    ISeasonBanners,
    ISeasonBannersFromJSON,
    ISeasonBannersFromJSONTyped,
    ISeasonBannersToJSON,
} from './';

/**
 * 
 * @export
 * @interface IUpdateSeasonBanners
 */
export interface IUpdateSeasonBanners {
    /**
     * 
     * @type {ISeasonBanners}
     * @memberof IUpdateSeasonBanners
     */
    seasonBanners: ISeasonBanners;
}

export function IUpdateSeasonBannersFromJSON(json: any): IUpdateSeasonBanners {
    return IUpdateSeasonBannersFromJSONTyped(json, false);
}

export function IUpdateSeasonBannersFromJSONTyped(json: any, ignoreDiscriminator: boolean): IUpdateSeasonBanners {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seasonBanners': ISeasonBannersFromJSON(json['seasonBanners']),
    };
}

export function IUpdateSeasonBannersToJSON(value?: IUpdateSeasonBanners | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seasonBanners': ISeasonBannersToJSON(value.seasonBanners),
    };
}


