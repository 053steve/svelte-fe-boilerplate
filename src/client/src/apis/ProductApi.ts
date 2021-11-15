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
    PRODUCTSTATUS,
    PRODUCTSTATUSFromJSON,
    PRODUCTSTATUSToJSON,
    ProductReq,
    ProductReqFromJSON,
    ProductReqToJSON,
    ProductResponse,
    ProductResponseFromJSON,
    ProductResponseToJSON,
} from '../models';

export interface CreateProductRequest {
    productReq: ProductReq;
}

export interface DeleteProductRequest {
    productId: string;
}

export interface GetAllProductsRequest {
    pageNumber?: number;
    pageSize?: number;
    filter?: string;
    sortOrder?: string;
    sortBy?: string;
    userId?: string;
    currencyId?: number;
    productStatus?: PRODUCTSTATUS;
}

export interface GetProductRequest {
    productId: string;
    userId?: string;
    currencyId?: number;
}

export interface GetProductByAdvanceSearchRequest {
    title?: string;
    pageNumber?: number;
    pageSize?: number;
    filter?: string;
    sortOrder?: string;
    sortBy?: string;
    userId?: string;
    tagId?: number;
    catId?: number;
    colorId?: number;
    currencyId?: number;
    collectionId?: number;
    brandId?: number;
    productStatus?: PRODUCTSTATUS;
}

export interface GetProductByNameRequest {
    title?: string;
    pageNumber?: number;
    pageSize?: number;
    filter?: string;
    sortOrder?: string;
    sortBy?: string;
    userId?: string;
    tagId?: number;
    catId?: number;
    colorId?: number;
    currencyId?: number;
    collectionId?: number;
    brandId?: number;
    productStatus?: PRODUCTSTATUS;
}

export interface UpdateProductRequest {
    productId: string;
    productReq: ProductReq;
}

/**
 * 
 */
export class ProductApi extends runtime.BaseAPI {

    /**
     */
    async createProductRaw(requestParameters: CreateProductRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productReq === null || requestParameters.productReq === undefined) {
            throw new runtime.RequiredError('productReq','Required parameter requestParameters.productReq was null or undefined when calling createProduct.');
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
            path: `/product/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductReqToJSON(requestParameters.productReq),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async createProduct(requestParameters: CreateProductRequest): Promise<ProductResponse> {
        const response = await this.createProductRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async deleteProductRaw(requestParameters: DeleteProductRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling deleteProduct.');
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
            path: `/product/delete/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteProduct(requestParameters: DeleteProductRequest): Promise<ProductResponse> {
        const response = await this.deleteProductRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getAllProductsRaw(requestParameters: GetAllProductsRequest): Promise<runtime.ApiResponse<ProductResponse>> {
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

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.currencyId !== undefined) {
            queryParameters['currencyId'] = requestParameters.currencyId;
        }

        if (requestParameters.productStatus !== undefined) {
            queryParameters['productStatus'] = requestParameters.productStatus;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/product/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async getAllProducts(requestParameters: GetAllProductsRequest): Promise<ProductResponse> {
        const response = await this.getAllProductsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getProductRaw(requestParameters: GetProductRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling getProduct.');
        }

        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.currencyId !== undefined) {
            queryParameters['currencyId'] = requestParameters.currencyId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/product/detail/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async getProduct(requestParameters: GetProductRequest): Promise<ProductResponse> {
        const response = await this.getProductRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getProductByAdvanceSearchRaw(requestParameters: GetProductByAdvanceSearchRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        const queryParameters: any = {};

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

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

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.tagId !== undefined) {
            queryParameters['tagId'] = requestParameters.tagId;
        }

        if (requestParameters.catId !== undefined) {
            queryParameters['catId'] = requestParameters.catId;
        }

        if (requestParameters.colorId !== undefined) {
            queryParameters['colorId'] = requestParameters.colorId;
        }

        if (requestParameters.currencyId !== undefined) {
            queryParameters['currencyId'] = requestParameters.currencyId;
        }

        if (requestParameters.collectionId !== undefined) {
            queryParameters['collectionId'] = requestParameters.collectionId;
        }

        if (requestParameters.brandId !== undefined) {
            queryParameters['brandId'] = requestParameters.brandId;
        }

        if (requestParameters.productStatus !== undefined) {
            queryParameters['productStatus'] = requestParameters.productStatus;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/product/search/advance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async getProductByAdvanceSearch(requestParameters: GetProductByAdvanceSearchRequest): Promise<ProductResponse> {
        const response = await this.getProductByAdvanceSearchRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getProductByNameRaw(requestParameters: GetProductByNameRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        const queryParameters: any = {};

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

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

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.tagId !== undefined) {
            queryParameters['tagId'] = requestParameters.tagId;
        }

        if (requestParameters.catId !== undefined) {
            queryParameters['catId'] = requestParameters.catId;
        }

        if (requestParameters.colorId !== undefined) {
            queryParameters['colorId'] = requestParameters.colorId;
        }

        if (requestParameters.currencyId !== undefined) {
            queryParameters['currencyId'] = requestParameters.currencyId;
        }

        if (requestParameters.collectionId !== undefined) {
            queryParameters['collectionId'] = requestParameters.collectionId;
        }

        if (requestParameters.brandId !== undefined) {
            queryParameters['brandId'] = requestParameters.brandId;
        }

        if (requestParameters.productStatus !== undefined) {
            queryParameters['productStatus'] = requestParameters.productStatus;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/product/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async getProductByName(requestParameters: GetProductByNameRequest): Promise<ProductResponse> {
        const response = await this.getProductByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateProductRaw(requestParameters: UpdateProductRequest): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters.productId === null || requestParameters.productId === undefined) {
            throw new runtime.RequiredError('productId','Required parameter requestParameters.productId was null or undefined when calling updateProduct.');
        }

        if (requestParameters.productReq === null || requestParameters.productReq === undefined) {
            throw new runtime.RequiredError('productReq','Required parameter requestParameters.productReq was null or undefined when calling updateProduct.');
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
            path: `/product/update/{productId}`.replace(`{${"productId"}}`, encodeURIComponent(String(requestParameters.productId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProductReqToJSON(requestParameters.productReq),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateProduct(requestParameters: UpdateProductRequest): Promise<ProductResponse> {
        const response = await this.updateProductRaw(requestParameters);
        return await response.value();
    }

}
