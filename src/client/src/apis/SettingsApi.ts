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


import * as runtime from '../runtime';
import {
    ISocialRefs,
    ISocialRefsFromJSON,
    ISocialRefsToJSON,
    IUpdateBottomBanner,
    IUpdateBottomBannerFromJSON,
    IUpdateBottomBannerToJSON,
    IUpdateMainBanners,
    IUpdateMainBannersFromJSON,
    IUpdateMainBannersToJSON,
    IUpdateSeasonBanners,
    IUpdateSeasonBannersFromJSON,
    IUpdateSeasonBannersToJSON,
    SettingsResponse,
    SettingsResponseFromJSON,
    SettingsResponseToJSON,
} from '../models';

export interface UpdateBottomBannerRequest {
    iUpdateBottomBanner: IUpdateBottomBanner;
}

export interface UpdateMainBannersRequest {
    iUpdateMainBanners: IUpdateMainBanners;
}

export interface UpdateSeasonBannersRequest {
    iUpdateSeasonBanners: IUpdateSeasonBanners;
}

export interface UpdateSocialRefsRequest {
    iSocialRefs: ISocialRefs;
}

/**
 * 
 */
export class SettingsApi extends runtime.BaseAPI {

    /**
     */
    async getSettingsRaw(): Promise<runtime.ApiResponse<SettingsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/settings/detail`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async getSettings(): Promise<SettingsResponse> {
        const response = await this.getSettingsRaw();
        return await response.value();
    }

    /**
     */
    async updateBottomBannerRaw(requestParameters: UpdateBottomBannerRequest): Promise<runtime.ApiResponse<SettingsResponse>> {
        if (requestParameters.iUpdateBottomBanner === null || requestParameters.iUpdateBottomBanner === undefined) {
            throw new runtime.RequiredError('iUpdateBottomBanner','Required parameter requestParameters.iUpdateBottomBanner was null or undefined when calling updateBottomBanner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwt", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/settings/update/bottom/banners`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IUpdateBottomBannerToJSON(requestParameters.iUpdateBottomBanner),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateBottomBanner(requestParameters: UpdateBottomBannerRequest): Promise<SettingsResponse> {
        const response = await this.updateBottomBannerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateMainBannersRaw(requestParameters: UpdateMainBannersRequest): Promise<runtime.ApiResponse<SettingsResponse>> {
        if (requestParameters.iUpdateMainBanners === null || requestParameters.iUpdateMainBanners === undefined) {
            throw new runtime.RequiredError('iUpdateMainBanners','Required parameter requestParameters.iUpdateMainBanners was null or undefined when calling updateMainBanners.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwt", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/settings/update/main/banners`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IUpdateMainBannersToJSON(requestParameters.iUpdateMainBanners),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateMainBanners(requestParameters: UpdateMainBannersRequest): Promise<SettingsResponse> {
        const response = await this.updateMainBannersRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateSeasonBannersRaw(requestParameters: UpdateSeasonBannersRequest): Promise<runtime.ApiResponse<SettingsResponse>> {
        if (requestParameters.iUpdateSeasonBanners === null || requestParameters.iUpdateSeasonBanners === undefined) {
            throw new runtime.RequiredError('iUpdateSeasonBanners','Required parameter requestParameters.iUpdateSeasonBanners was null or undefined when calling updateSeasonBanners.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwt", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/settings/update/season/banners`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IUpdateSeasonBannersToJSON(requestParameters.iUpdateSeasonBanners),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateSeasonBanners(requestParameters: UpdateSeasonBannersRequest): Promise<SettingsResponse> {
        const response = await this.updateSeasonBannersRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateSocialRefsRaw(requestParameters: UpdateSocialRefsRequest): Promise<runtime.ApiResponse<SettingsResponse>> {
        if (requestParameters.iSocialRefs === null || requestParameters.iSocialRefs === undefined) {
            throw new runtime.RequiredError('iSocialRefs','Required parameter requestParameters.iSocialRefs was null or undefined when calling updateSocialRefs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwt", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/settings/update/socialRefs`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ISocialRefsToJSON(requestParameters.iSocialRefs),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateSocialRefs(requestParameters: UpdateSocialRefsRequest): Promise<SettingsResponse> {
        const response = await this.updateSocialRefsRaw(requestParameters);
        return await response.value();
    }

}