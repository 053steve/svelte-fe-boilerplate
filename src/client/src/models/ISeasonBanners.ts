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
    ISeaBannerImg,
    ISeaBannerImgFromJSON,
    ISeaBannerImgFromJSONTyped,
    ISeaBannerImgToJSON,
} from './';

/**
 * 
 * @export
 * @interface ISeasonBanners
 */
export interface ISeasonBanners {
    /**
     * 
     * @type {ISeaBannerImg}
     * @memberof ISeasonBanners
     */
    highlight: ISeaBannerImg;
    /**
     * 
     * @type {ISeaBannerImg}
     * @memberof ISeasonBanners
     */
    seasonBanner1: ISeaBannerImg;
    /**
     * 
     * @type {ISeaBannerImg}
     * @memberof ISeasonBanners
     */
    seasonBanner2: ISeaBannerImg;
    /**
     * 
     * @type {ISeaBannerImg}
     * @memberof ISeasonBanners
     */
    seasonBanner3: ISeaBannerImg;
    /**
     * 
     * @type {ISeaBannerImg}
     * @memberof ISeasonBanners
     */
    seasonBanner4: ISeaBannerImg;
}

export function ISeasonBannersFromJSON(json: any): ISeasonBanners {
    return ISeasonBannersFromJSONTyped(json, false);
}

export function ISeasonBannersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ISeasonBanners {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'highlight': ISeaBannerImgFromJSON(json['highlight']),
        'seasonBanner1': ISeaBannerImgFromJSON(json['seasonBanner1']),
        'seasonBanner2': ISeaBannerImgFromJSON(json['seasonBanner2']),
        'seasonBanner3': ISeaBannerImgFromJSON(json['seasonBanner3']),
        'seasonBanner4': ISeaBannerImgFromJSON(json['seasonBanner4']),
    };
}

export function ISeasonBannersToJSON(value?: ISeasonBanners | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'highlight': ISeaBannerImgToJSON(value.highlight),
        'seasonBanner1': ISeaBannerImgToJSON(value.seasonBanner1),
        'seasonBanner2': ISeaBannerImgToJSON(value.seasonBanner2),
        'seasonBanner3': ISeaBannerImgToJSON(value.seasonBanner3),
        'seasonBanner4': ISeaBannerImgToJSON(value.seasonBanner4),
    };
}

