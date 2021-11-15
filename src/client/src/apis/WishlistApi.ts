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
    WishListAddReq,
    WishListAddReqFromJSON,
    WishListAddReqToJSON,
    WishListResponse,
    WishListResponseFromJSON,
    WishListResponseToJSON,
} from '../models';

export interface AttachWishListRequest {
    wishListAddReq: WishListAddReq;
}

export interface DetachWishListRequest {
    wishListAddReq: WishListAddReq;
}

export interface GetWishlistRequest {
    userId: number;
}

/**
 * 
 */
export class WishlistApi extends runtime.BaseAPI {

    /**
     */
    async attachWishListRaw(requestParameters: AttachWishListRequest): Promise<runtime.ApiResponse<WishListResponse>> {
        if (requestParameters.wishListAddReq === null || requestParameters.wishListAddReq === undefined) {
            throw new runtime.RequiredError('wishListAddReq','Required parameter requestParameters.wishListAddReq was null or undefined when calling attachWishList.');
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
            path: `/wishlist/attach`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WishListAddReqToJSON(requestParameters.wishListAddReq),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WishListResponseFromJSON(jsonValue));
    }

    /**
     */
    async attachWishList(requestParameters: AttachWishListRequest): Promise<WishListResponse> {
        const response = await this.attachWishListRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async detachWishListRaw(requestParameters: DetachWishListRequest): Promise<runtime.ApiResponse<WishListResponse>> {
        if (requestParameters.wishListAddReq === null || requestParameters.wishListAddReq === undefined) {
            throw new runtime.RequiredError('wishListAddReq','Required parameter requestParameters.wishListAddReq was null or undefined when calling detachWishList.');
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
            path: `/wishlist/detach`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WishListAddReqToJSON(requestParameters.wishListAddReq),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WishListResponseFromJSON(jsonValue));
    }

    /**
     */
    async detachWishList(requestParameters: DetachWishListRequest): Promise<WishListResponse> {
        const response = await this.detachWishListRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getWishlistRaw(requestParameters: GetWishlistRequest): Promise<runtime.ApiResponse<WishListResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getWishlist.');
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
            path: `/wishlist/detail/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WishListResponseFromJSON(jsonValue));
    }

    /**
     */
    async getWishlist(requestParameters: GetWishlistRequest): Promise<WishListResponse> {
        const response = await this.getWishlistRaw(requestParameters);
        return await response.value();
    }

}
