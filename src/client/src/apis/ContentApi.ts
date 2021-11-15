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
    ContentResponse,
    ContentResponseFromJSON,
    ContentResponseToJSON,
    IContent,
    IContentFromJSON,
    IContentToJSON,
} from '../models';

export interface CreateContentRequest {
    iContent: IContent;
}

export interface DeleteContentRequest {
    contentId: string;
}

export interface GetAllContentsRequest {
    pageNumber?: number;
    pageSize?: number;
    filter?: string;
    sortOrder?: string;
}

export interface GetContentRequest {
    contentId: string;
}

export interface UpdateContentRequest {
    contentId: string;
    iContent: IContent;
}

/**
 * 
 */
export class ContentApi extends runtime.BaseAPI {

    /**
     */
    async createContentRaw(requestParameters: CreateContentRequest): Promise<runtime.ApiResponse<ContentResponse>> {
        if (requestParameters.iContent === null || requestParameters.iContent === undefined) {
            throw new runtime.RequiredError('iContent','Required parameter requestParameters.iContent was null or undefined when calling createContent.');
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
            path: `/content/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IContentToJSON(requestParameters.iContent),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentResponseFromJSON(jsonValue));
    }

    /**
     */
    async createContent(requestParameters: CreateContentRequest): Promise<ContentResponse> {
        const response = await this.createContentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async deleteContentRaw(requestParameters: DeleteContentRequest): Promise<runtime.ApiResponse<ContentResponse>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling deleteContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwt", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/content/delete/{contentId}`.replace(`{${"contentId"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteContent(requestParameters: DeleteContentRequest): Promise<ContentResponse> {
        const response = await this.deleteContentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAllContentsRaw(requestParameters: GetAllContentsRequest): Promise<runtime.ApiResponse<ContentResponse>> {
        const queryParameters: any = {};

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/content/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentResponseFromJSON(jsonValue));
    }

    /**
     */
    async getAllContents(requestParameters: GetAllContentsRequest): Promise<ContentResponse> {
        const response = await this.getAllContentsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getContentRaw(requestParameters: GetContentRequest): Promise<runtime.ApiResponse<ContentResponse>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling getContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/content/detail/{contentId}`.replace(`{${"contentId"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentResponseFromJSON(jsonValue));
    }

    /**
     */
    async getContent(requestParameters: GetContentRequest): Promise<ContentResponse> {
        const response = await this.getContentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateContentRaw(requestParameters: UpdateContentRequest): Promise<runtime.ApiResponse<ContentResponse>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling updateContent.');
        }

        if (requestParameters.iContent === null || requestParameters.iContent === undefined) {
            throw new runtime.RequiredError('iContent','Required parameter requestParameters.iContent was null or undefined when calling updateContent.');
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
            path: `/content/update/{contentId}`.replace(`{${"contentId"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: IContentToJSON(requestParameters.iContent),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateContent(requestParameters: UpdateContentRequest): Promise<ContentResponse> {
        const response = await this.updateContentRaw(requestParameters);
        return await response.value();
    }

}
